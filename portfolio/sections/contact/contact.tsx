"use client";
import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./contact.module.scss";
import SocialLinks from "@/components/social-links";
import Link from "next/link";
import { sendContactEmail } from "@/services/email";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [buttonState, setButtonState] = useState<
    "idle" | "sending" | "success"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // Vérifier si tous les champs sont remplis
  const areAllFieldsFilled =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Vérifier le captcha
    const recaptchaToken = recaptchaRef.current?.getValue();
    if (!recaptchaToken) {
      setErrorMessage("Veuillez compléter le captcha");
      return;
    }

    // Animation d'envoi
    setButtonState("sending");

    try {
      const result = await sendContactEmail({
        ...formData,
        recaptchaToken,
      });

      if (result.success) {
        // Animation de succès
        setTimeout(() => {
          setButtonState("success");
        }, 600);

        // Réinitialiser le formulaire après l'animation
        setTimeout(() => {
          setFormData({ name: "", email: "", message: "" });
          recaptchaRef.current?.reset();
          setButtonState("idle");
        }, 2000);
      } else {
        setErrorMessage(result.message);
        setButtonState("idle");
      }
    } catch (error) {
      setErrorMessage("Erreur lors de l'envoi du message");
      setButtonState("idle");
    }
  };

  const getButtonContent = () => {
    switch (buttonState) {
      case "sending":
        return (
          <>
            <span className={styles.buttonText}>Envoyer</span>
            <span className={styles.checkIcon}>✓</span>
          </>
        );
      case "success":
        return (
          <>
            <span className={styles.buttonText}>Envoyer</span>
            <span className={styles.checkIcon}>✓</span>
          </>
        );
      default:
        return <span className={styles.buttonText}>Envoyer</span>;
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h2>Contact</h2>
          <p>
            Cliquâ, ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>

          <div className={styles.contactDetails}>
            <div className={styles.detail}>
              <h3>Téléphone</h3>
              <p>06 45 40 54 50</p>
            </div>
            <div className={styles.detail}>
              <h3>Mail</h3>
              <Link href="mailto:julienbelinga.pro@gmail.com">
                julienbelinga.pro@gmail.com
              </Link>
            </div>
          </div>

          <SocialLinks className={styles.socialLinks} imageSize={24} />
        </div>

        <div className={styles.contactForm}>
          <h2>Restons en contact</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="Nom/Prénom"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
            </div>

            {areAllFieldsFilled && (
              <div className={styles.recaptcha}>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                  theme="light"
                />
              </div>
            )}

            {errorMessage && (
              <div
                style={{
                  color: "#ff6b6b",
                  textAlign: "center",
                  margin: "1rem 0",
                }}
              >
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              className={`${styles.submitButton} ${
                buttonState !== "idle" ? styles[buttonState] : ""
              }`}
              disabled={buttonState !== "idle"}
            >
              {getButtonContent()}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
