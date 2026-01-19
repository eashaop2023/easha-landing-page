
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Doctor1 from "../../../assets/Doctor7.jpg";
import Doctor2 from "../../../assets/Doctor2.jpg";
import Doctor3 from "../../../assets/Doctor3.jpg";
import Doctor4 from "../../../assets/Doctor4.jpg";

const MeetWithOurDoctor = () => {
  const doctors = [
    {
      name: "Dr. Nisha Gupta",
      specialty: "Urologist",
      image: Doctor1,
    },
    {
      name: "Dr. Sanjay Sharma",
      specialty: "Neurologist",
      image: Doctor2,
    },
    {
      name: "Dr. Deepa Sharma",
      specialty: "Neurologist",
      image: Doctor3,
    },
    {
      name: "Dr. Ravi Gupta",
      specialty: "Gynecologist",
      image: Doctor4,
    },
  ];

  return (
    <>
      <style>
        {`
  .doctor-card {
    border-radius: 30px;
    overflow: hidden; /* This clips the image to the card's radius */
    display: flex;
    flex-direction: column;
    height: 100%; 
  }

  .doctor-image {
    height: 210px; /* Kept exactly as your original code */
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    /* Forces the top of the image to respect the curve */
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }

  .doctor-footer {
    background: #e1f1f6;
    text-align: center;
    padding: 16px 10px;
    /* Ensures the bottom corners are also rounded */
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  .doctor-name {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }

  .doctor-specialty {
    font-size: 14px;
    margin: 0;
    color: #555;
  }

  @media (max-width: 768px) {
    .doctor-image {
      height: 240px; /* Kept exactly as your original code */
    }
  }
  `}
      </style>
      <section className="pt-4 pb-5">
        <Container>
          <h2 className="text-center fw-semibold mb-4">
            Meet With Our Doctor
          </h2>

          <Row className="g-4 justify-content-center">
            {doctors.map((doc, index) => (
              <Col key={index} xs={6} md={3}>
                <div className="doctor-card">
                  {/* IMAGE AS BACKGROUND */}
                  <div
                    className="doctor-image"
                    style={{ backgroundImage: `url(${doc.image})` }}
                  ></div>

                  {/* FOOTER */}
                  <div className="doctor-footer">
                    <p className="doctor-name">{doc.name}</p>
                    <p className="doctor-specialty">{doc.specialty}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MeetWithOurDoctor;