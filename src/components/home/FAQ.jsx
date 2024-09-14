import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer assistance with assignments, dissertations, presentations, and other academic tasks to help students succeed.",
  },
  {
    question: "Can you write my essay for me?",
    answer:
      "Absolutely! We specialize in crafting custom essays tailored to your specific needs, ensuring high quality and timely delivery.",
  },
  {
    question: "Can you ensure my confidentiality?",
    answer:
      "Yes, your privacy is our top priority. We take strict measures to ensure all your details remain confidential throughout our service.",
  },
  {
    question: "Do you offer any discounts?",
    answer:
      "Yes, we understand the importance of saving money, and we do offer discounts to help make our services more affordable for students.",
  },
  {
    question: "Can I pay after I receive my order?",
    answer:
      "Unfortunately, payment is required upfront. This allows us to allocate the right resources to deliver your order on time with the highest quality.",
  },
  {
    question: "Is there a money-back guarantee if something goes wrong?",
    answer:
      "Yes, we offer a money-back guarantee. If you're not satisfied with your order, we will review the issue and ensure a fair resolution, including potential refunds.",
  },
  {
    question: "Is there any risk of plagiarism in my order?",
    answer:
      "No, we guarantee 100% plagiarism-free work. Every order is written from scratch and thoroughly checked for originality.",
  },
  {
    question: "How will I receive my order?",
    answer:
      "You will receive your completed order directly via email, ensuring quick and secure delivery.",
  },
  {
    question: "How can I be sure my paper isn't pre-written?",
    answer:
      "We assure you that all papers are custom-written. Every piece is created based on your specific instructions and never reused or resold.",
  },
  {
    question: "What if I'm not fully satisfied with my paper?",
    answer:
      "If you're not happy with the paper, we offer revisions to make adjustments until it meets your expectations. Your satisfaction is our priority.",
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
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="my-16">
      <div>
        <h1 className="text-4xl text-center font-bold divider divider-primary">FAQs</h1>
        <p className="text-center text-gray-700 p-4">
          Here are some common questions and answers about our services.
        </p>
      </div>
      <div className="my-10 mx-auto max-w-5xl p-4">
        <div className="space-y-4">
          {faqs.slice(0, showAll ? faqs.length : 6).map((faq, index) => (
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
        <div className="text-center mt-6">
          <button onClick={handleShowAll} className="text-primary font-semibold">
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
