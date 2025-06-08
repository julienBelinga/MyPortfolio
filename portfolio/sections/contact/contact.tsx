"use client";
import React, { useState } from "react";
import styles from "./contact.module.scss";
import SocialLinks from "@/components/social-links";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire à implémenter
  };

  return (
    <section className={styles.contact}>
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
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
