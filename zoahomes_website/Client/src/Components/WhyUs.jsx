import React, { useState } from "react";

const WhyUsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the state of the FAQ item
  };

  const faqItems = [
    {
      title: "Trust",
      content:
        "We are entitled to trust. It continues to be devoted to its families, open about the housing process, and responsible for any demands made by its clients. We never compromise on the subject of family safety. Beside fairness and excellent customer service, integrity defines AVI Trust Homes.",
    },
    {
      title: "Practice Ethics and Professionalism",
      content:
        "We maintain high ethical and moral standards in our professional and business practices. We are committed to the highest standards of ethics and professionalism. In discharging our responsibilities, we do not take professional or ethical shortcuts.",
    },
    {
      title: "Leadership",
      content:
        "We believe in team work and make every effort to create the group of professionals that inspires and share the same vision.",
    },
    {
      title: "Drive Innovation",
      content:
        "We realize the need to timely identify requirements and opportunities and respond through innovative solutions. To this end, we foster an innovative environment in everything we do and provide supportive atmosphere for new and creative thinking.",
    },
  ];

  return (
    <section id="why-us" className="section why-us light-background mt-5">
      <div >
        <div className="row gy-4">
          <div
            className="col-lg-12 d-flex flex-column justify-content-center order-2 order-lg-1"
            style={{ marginLeft: "0", marginRight: "auto" }}
          >
            <div className="content px-xl-5" data-aos="fade-up" data-aos-delay="100">
              <h3 style={{ color: "black" }}>
                <strong>OUR VALUES</strong>
              </h3>
            </div>

            <div className="faq-container px-xl-5" data-aos="fade-up" data-aos-delay="100">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${openIndex === index ? "open" : ""}`}
                  style={{ color: "black" }}
                >
                  <h3 style={{ color: "#000000" }}>
                    <span>{`0${index + 1}`}</span> {item.title}
                  </h3>
                  <i
                    className={`faq-toggle bi ${
                      openIndex === index ? "bi-chevron-down" : "bi-chevron-right"
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleFaq(index)}
                  ></i>
                  {openIndex === index && (
                    <div className="faq-content">
                      <p>{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
