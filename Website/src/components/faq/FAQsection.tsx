import React, { useState } from "react";
import "./FAQsection.css";

interface FAQ {
  question: string;
  answer: string;
  image: string;
}

const faqs: FAQ[] = [
  {
    question: "Who can participate?",
    answer: "The hackathon is open for students from all over India.",
    image: "Images/Images/1.png",
  },
  {
    question: "Is there a registration fee for participation?",
    answer:
      "The 1st round is free. The 2nd round requires a fee of Rs.600 per member.",
    image: "Images/Images/2.png",
  },
  {
    question: "Is inter-college team allowed?",
    answer: "No, you can form a team with students from your college.",
    image: "Images/Images/3.png",
  },
  {
    question:
      "Can participants join multiple teams or submit multiple projects?",
    answer:
      "No, each participant can only join one team, and each team can submit only one project.",
    image: "Images/Images/4.png",
  },
  {
    question: "Will food and beverages be provided during the hackathon?",
    answer:
      "Yes, for the offline round, snacks, lunch, and dinner will be provided for participants.",
    image: "Images/Images/5.png",
  },
  {
    question:
      "Are there specific documentation required for project submissions?",
    answer:
      "Yes, you're required to submit your PPT, explaining your idea according to the given format.",
    image: "Images/Images/6.png",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-header">
        <h1 className="faq-title">FAQs</h1>
        <h3>Responses to the most frequently asked questions!</h3>
      </div>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-card ${openIndex === index ? "expanded" : ""}`}
          >
            <div className="faq-header-row">
              <h3 className="faq-question">{faq.question}</h3>
              <button
                className="toggle-button"
                onClick={() => toggleFAQ(index)}
              >
                {openIndex === index ? "-" : "+"}
              </button>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
