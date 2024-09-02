import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer assistance with assignments, dissertations, presentations, and other academic tasks to help students succeed.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can reach out to us via Email, Facebook, or WhatsApp. Our contact details are available on our website.",
  },
  {
    question: "What is the process for getting help?",
    answer:
      "The process is simple: contact us, discuss your needs, make payment, and receive your solution on time.",
  },
  {
    question: "Is my payment secure?",
    answer: "Yes, we use secure payment gateways to ensure your transaction is safe and secure.",
  },
  {
    question: "When will I receive my solution?",
    answer:
      "The delivery time depends on the complexity of the task, but we always strive to meet deadlines.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="my-16">
      <div>
        <h1 className="text-4xl text-center font-bold divider divider-primary">
          FAQs
        </h1>
        <p className="text-center text-gray-700 p-4">
          Here are some common questions and answers about our services.
        </p>
      </div>
      <div className="my-10 mx-auto max-w-5xl p-4">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <div
                className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 hover:bg-gray-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {activeIndex === index ? (
                  <BsChevronUp className="text-xl" />
                ) : (
                  <BsChevronDown className="text-xl" />
                )}
              </div>
              {activeIndex === index && (
                <div className="p-4 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
