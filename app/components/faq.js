import React from 'react'
import Image from 'next/image'

const faq = () => {
    return (
      <div className="mb-32 relative w-1/2 sm:w-full flex flex-col sm:flex-row pt-10 pb-8 mt-8 shadow-xl">
            <div className="px-5  w-full flex flex-col justify-center items-center">
          <div className="flex flex-col items-center">
          <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
          <p className="mt-3 text-lg text-white md:text-xl">Frequently asked questions</p>
          </div>
          <div className="items-center w-full justify-center mt-8 grid grid-rows-1 sm:grid-cols-3 gap-8 ">
            {/* Repeatable Item */}
            {faqList.map((item, index) => (
              <div className="py-5" key={index}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span>{item.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-white">{item.answer}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  const faqList = [
    {
      question: "How does the billing work?",
      answer: "Springerdata offers a variety of billing options, including monthly and annual subscription plans...",
    },
    {
      question: "Can I get a refund for my subscription?",
      answer: "We offer a 30-day money-back guarantee for most of its subscription plans...",
    },
    {
      question: "How do I cancel my subscription?",
      answer: "To cancel your subscription, you can log in to your account and navigate to the subscription management page...",
    },
    {
      question: "Is there a free trial?",
      answer: "We offer a free trial of our software for a limited time...",
    },
    {
      question: "How do I contact support?",
      answer: "If you need help with our platform, contact our support team via website or email...",
    },
    {
      question: "Do you offer any discounts or promotions?",
      answer: "We may offer discounts or promotions from time to time. Follow us on social media...",
    },
  ];
  

export default faq