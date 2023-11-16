// FAQSection.js

import React, { useState } from 'react';
import '../../common.css'; // assuming common styles are imported here

const faqs = [
  {
    question: "How do I apply for a permit?",
    answer: "You can start by contacting us through our form or giving us a call. We'll guide you through the steps."
  },
  {
    question: "What types of permits can you help with?",
    answer: "We specialize in a range of permits including building, electrical, plumbing, and more."
  },
  {
    question: "How long does the permit process take?",
    answer: "The time frame can vary depending on the type of permit and local regulations, but we strive to expedite the process."
  },
  {
    question: "Can you handle permits for both residential and commercial properties?",
    answer: "Yes, we have experience handling permit processes for all types of properties."
  },
  {
    question: "What information do I need to provide to apply for a permit?",
    answer: "Generally, you need the property details, your contact information, and the specifics of your project."
  },
  {
    question: "Do you assist with permit renewals and extensions?",
    answer: "Absolutely, we can help you with renewing existing permits or applying for extensions as required."
  },
];

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        {faq.question}
        <span className="faq-toggle">{isOpen ? '▲' : '▼'}</span>
      </div>
      <div className={`faq-answer ${isOpen ? "open" : ""}`}>
        {faq.answer}
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faqs-container">
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
