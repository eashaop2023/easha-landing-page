import React from "react";
import specialistDoctors from "../../../assets/specialist-doctors.png";

const WhyChooseUs = () => (
  <section className="container py-0 small-top-space">
    <style>
      {`
        .small-top-space {
          margin-top: 50px; /* small space above the section */
          margin-bottom: 40px; /* optional, small bottom space */
        }


        .doctor-image {
          margin-top: 10px;
        }

        
        @media (max-width: 767.98px) {
          .small-top-space {
            margin-top: 30px;
            margin-bottom: 30px;
          }
        }

        @media (max-width: 374.98px) {
          .small-top-space {
            margin-top: 20px;
            margin-bottom: 20px;
          }
        }
      `}
    </style>

    <div className="row align-items-center">
      <div className="col-12 col-md-6 order-md-2 text-center mb-3 mb-md-0">
        <img
          src={specialistDoctors}
          alt="Specialist Doctors"
          className="img-fluid rounded shadow-lg doctor-image"
        />
      </div>

      <div className="col-12 col-md-6 order-md-1 text-center text-md-start">
        <h2 className="h2 fw-bold mb-4 text-dark">Why Choose Us?</h2>
        <ul className="list-unstyled">
          <li className="d-flex align-items-start mb-3">
            <span
              className="me-3 mt-1 rounded-circle"
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#14b8a6",
                flexShrink: 0,
              }}
            ></span>
            <span className="text-secondary fs-5">Free patient registration.</span>
          </li>
          <li className="d-flex align-items-start mb-3">
            <span
              className="me-3 mt-1 rounded-circle"
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#14b8a6",
                flexShrink: 0,
              }}
            ></span>
            <span className="text-secondary fs-5">Simple, user-friendly platform.</span>
          </li>
          <li className="d-flex align-items-start mb-3">
            <span
              className="me-3 mt-1 rounded-circle"
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#14b8a6",
                flexShrink: 0,
              }}
            ></span>
            <span className="text-secondary fs-5">Wide doctor/hospital network.</span>
          </li>
          <li className="d-flex align-items-start mb-3">
            <span
              className="me-3 mt-1 rounded-circle"
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#14b8a6",
                flexShrink: 0,
              }}
            ></span>
            <span className="text-secondary fs-5">
              Affordable, with no gateway fees.
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;





