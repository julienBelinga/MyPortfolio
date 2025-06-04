"use client";

import React, { useState, useEffect } from "react";
import styles from "./typewritter.module.scss";

interface TypewriterProps {
  staticText: string;
  textArray: string[];
}

export default function Typewriter({ staticText, textArray }: TypewriterProps) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, textArray, typingSpeed]);

  return (
    <span className={styles.typewriter}>
      <span className={styles.staticText}>{staticText}</span>
      <span className={styles.dynamicText}>{text}</span>
      <div className={styles.cursor} />
    </span>
  );
}
