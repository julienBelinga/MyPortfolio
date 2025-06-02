"use client";

import Image from "next/image";
import Link from "next/link";
import github from "@assets/img/github.png";
import linkedIn from "@assets/img/linkedIn.png";
import malt from "@assets/img/malt.png";
import { useEffect, useState, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const { t } = useTranslation();
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setter: (value: string) => void
  ) => {
    setter(e.target.value);
  };

  return (
    <div id="contact">
      <div className="contact-wrapper">
        <form
          action="https://formsubmit.co/julienbelinga.pro@gmail.com"
          method="POST"
          id="contact-form"
          className="form-horizontal"
          role="form"
        >
          <div className="id">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder={t("contact.lastName")}
              name="name"
              value={name}
              onChange={(e) => handleInputChange(e, setName)}
              required
            />
            <input
              type="text"
              className="form-control"
              id="first-name"
              placeholder={t("contact.firstName")}
              name="first-name"
              value={firstName}
              onChange={(e) => handleInputChange(e, setFirstName)}
              required
            />
          </div>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder={t("contact.email")}
            name="email"
            value={email}
            onChange={(e) => handleInputChange(e, setEmail)}
            required
          />
          <input
            type="tel"
            className="form-control"
            id="telephone"
            name="telephone"
            placeholder={t("contact.phone")}
            value={telephone}
            onChange={(e) => handleInputChange(e, setTelephone)}
            required
          />
          <textarea
            className="form-control"
            rows={10}
            placeholder={t("contact.message")}
            name="message"
            value={message}
            onChange={(e) => handleInputChange(e, setMessage)}
            required
          />
          <button
            className="btn btn-primary send-button"
            id="submit"
            type="submit"
          >
            <div className="alt-send-button">
              <i className="fa fa-paper-plane" />
              <span className="send-text">{t("contact.button")}</span>
            </div>
          </button>
          <p style={{ fontSize: "9px" }}>
            <em>{t("contact.data")}</em>
          </p>
        </form>

        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <i className="fa fa-map-marker fa-2x">
                <span className="contact-text place">Nantes, France</span>
              </i>
            </li>
            <li className="list-item">
              <i className="fa fa-phone fa-2x">
                <span className="contact-text phone">
                  <Link href="tel:0645205490" title="Appelez-moi">
                    06 45 20 54 90
                  </Link>
                </span>
              </i>
            </li>
            <li className="list-item">
              <i className="fa fa-envelope fa-2x">
                <span className="contact-text gmail">
                  <Link
                    href="mailto:julienbelinga.pro@gmail.com"
                    title="Envoyez-moi un email"
                  >
                    julienbelinga.pro@gmail.com
                  </Link>
                </span>
              </i>
            </li>
          </ul>
          <hr />
          <ul className="social-media-list">
            <Link
              href="https://github.com/julienBelinga"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
            >
              <li>
                <Image src={github} alt="GitHub" width={20} height={20} />
              </li>
            </Link>
            <Link
              href="https://www.linkedin.com/in/julien-belinga/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
            >
              <li>
                <Image src={linkedIn} alt="LinkedIn" width={20} height={20} />
              </li>
            </Link>
            <Link
              href="https://www.malt.fr/profile/julienbelinga?overview=true"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
            >
              <li id="malt">
                <Image src={malt} alt="Malt" width={20} height={20} />
              </li>
            </Link>
          </ul>
          <hr />
          <div className="copyright">&copy; {t("contact.right")}</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
