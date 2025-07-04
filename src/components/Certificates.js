// src/components/Certificates.js
import React from 'react';

const certificateData = [
  { title: "Static Website", img: "/certificates/static.jpg" },
  { title: "Responsive Website", img: "/certificates/responsive.jpg" },
  { title: "Dynamic Web App", img: "/certificates/dynamic.jpg" },
  { title: "JS Essentials", img: "/certificates/js.jpg" },
  { title: "Python Programming", img: "/certificates/python.jpg" },
  { title: "Databases", img: "/certificates/database.jpg"}
];

const Certificates = () => {
  return (
    <section className="certificates" id="certificates">
      <h2 className="section-title">
        My <span>Certificates</span>
      </h2>
      <div className="certificates-grid">
        {certificateData.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <img src={cert.img} alt={cert.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
