import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2 className="topic">Our Services</h2>
          <p className="text-muted">
          Transform your space with our top-tier cleaning services! Whether it’s schools, homes, or corporate offices, 
          we bring a spotless shine to every corner. Our dedicated team ensures a fresh, hygienic, and welcoming environment, 
          so you can focus on what truly matters. Let us handle the mess while you enjoy the cleanliness!
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="service-card">
                    <img src={`img/service-${i + 1}.jpg`} alt={d.name} />
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
