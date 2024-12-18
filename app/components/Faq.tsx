"use client"
import {  useState } from "react";
import styles from "../styles/Faq.module.css";

const FAQ = () => {
const [activeIndex, setActiveIndex] = useState<number | null>(null);

const toggleFAQ = (index: number) => {
  setActiveIndex(activeIndex === index ? null : index);
};

  const questions = [
    {
      question: "Quels types de sites web développez-vous ?",
      preanswer: "Site web",
      second: "Application web",
      answer: "Je développe principalement des sites vitrines, landing page et application web. Je m'occupe aussi du SEO, web design, animation, intégration 3D",
    },
    {
      question: "Quels est le prix d'un site web ?",
      preanswer: "Pages, Fonctionnalités",
      second: "Design, SEO",
      answer: "Tout dépend du design, du nombre de pages, de la technicité (animations, intégration 3D), du SEO et des fonctionnalités demandées.",
    },
    {
      question: "Proposez-vous aussi du design ?",
      preanswer: "Design",
      second: "Développement",
      answer: "Oui, je réalise aussi le design sur Figma en fonction de la demande.",
    },
    {
      question: "Créez-vous des applications web sur mesure ?",
      preanswer: "Sur-mesure",
      second: "Personnalisation",
      answer: "Je propose des services sur-mesure et uniques.",
    },
    {
      question: "Proposez-vous des tarifs adaptés aux petites entreprises ?",
      preanswer: "Oui",
      second: "",
      answer: "Oui, j'essaye de proposer des services adaptés aux petits commerçants.",
    },
  ];

  return (
    <div className={styles.fContainer}>
      <h1 className={styles.titleFaq}>Faq</h1>
      <div className={styles.faqContainer}>
        {questions.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={styles.question}
              onClick={() => toggleFAQ(index)}
            >
              <div className={styles.questionPreanswer}>
                <span className={styles.questionText}>{item.question}</span>
                <div className={styles.preanswer}>
                  <span>{item.preanswer}</span>
                  <span>{item.second}</span>
                </div>
              </div>
              <span className={styles.toggle}>+</span>
            </div>
            {activeIndex === index && (
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
