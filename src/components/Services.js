// src/components/Services.js
import React from 'react';

const servicesData = [
  {
    title: "Front-End Development",
    description: "Responsive and interactive user interfaces using React, HTML, CSS, and JavaScript."
  },
  {
    title: "Back-End Development",
    description: "Building scalable backend systems using Node.js, Express.js, MongoDB & SQL."
  },
 
];

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="section-title">
        My <span>Services</span>
      </h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
