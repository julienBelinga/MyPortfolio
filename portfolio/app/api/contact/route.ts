import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactData {
  name: string;
  email: string;
  message: string;
  recaptchaToken: string;
}

// Vérification du reCAPTCHA
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error("RECAPTCHA_SECRET_KEY non configurée");
    return false;
  }

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("Erreur lors de la vérification du reCAPTCHA:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, recaptchaToken }: ContactData =
      await request.json();

    // Validation des champs
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    // Vérification du reCAPTCHA
    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
    if (!isRecaptchaValid) {
      return NextResponse.json(
        { message: "Vérification reCAPTCHA échouée" },
        { status: 400 }
      );
    }

    // Configuration du transporteur email
    const transporter = nodemailer.createTransport({
      service: "gmail", // ou votre service email
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, // Utilisez un mot de passe d'application
      },
    });

    // Configuration de l'email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Votre email pour recevoir les messages
      subject: `Nouveau message de ${name} - Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouveau message depuis votre portfolio</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin: 0 0 10px 0; color: #555;">Informations de contact :</h3>
            <p style="margin: 5px 0;"><strong>Nom :</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email :</strong> ${email}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="margin: 0 0 15px 0; color: #555;">Message :</h3>
            <p style="line-height: 1.6; color: #333;">${message}</p>
          </div>
          
          <p style="margin-top: 20px; font-size: 12px; color: #888;">
            Ce message a été envoyé depuis votre portfolio le ${new Date().toLocaleString(
              "fr-FR"
            )}.
          </p>
        </div>
      `,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { message: "Erreur lors de l'envoi du message" },
      { status: 500 }
    );
  }
}
