interface ContactFormData {
  name: string;
  email: string;
  message: string;
  recaptchaToken: string;
}

interface EmailResponse {
  success: boolean;
  message: string;
}

export const sendContactEmail = async (
  data: ContactFormData
): Promise<EmailResponse> => {
  try {
    // Validation côté client
    if (!data.name || !data.email || !data.message) {
      return {
        success: false,
        message: "Tous les champs sont requis",
      };
    }

    if (!data.recaptchaToken) {
      return {
        success: false,
        message: "Veuillez compléter le captcha",
      };
    }

    // Validation email basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: "Format d'email invalide",
      };
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Erreur lors de l'envoi");
    }

    return {
      success: true,
      message: "Message envoyé avec succès !",
    };
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Erreur lors de l'envoi du message",
    };
  }
};
