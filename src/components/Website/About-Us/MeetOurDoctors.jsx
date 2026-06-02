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
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%; 
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background: white;
  }

  .doctor-image {
    width: 100%;
    height: 210px;
    object-fit: cover;
    object-position: center center;
    display: block;
  }

  .doctor-footer {
    background: #e1f1f6;
    text-align: center;
    padding: 16px 10px;
    flex-grow: 0;
  }

  .doctor-name {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 4px 0;
    color: #333;
  }

  .doctor-specialty {
    font-size: 14px;
    margin: 0;
    color: #555;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    .doctor-image {
      height: 240px;
    }
    
    .doctor-name {
      font-size: 14px;
    }
    
    .doctor-specialty {
      font-size: 12px;
    }
  }
  `}
      </style>
      <section className="pt-4 pb-5">
        <Container>
          <h2 className="text-center fw-semibold mb-4" style={{ fontSize: "28px", color: "#333" }}>
            Meet With Our Doctor
          </h2>

          <Row className="g-4 justify-content-center">
            {doctors.map((doc, index) => (
              <Col key={index} xs={6} md={3}>
                <div className="doctor-card">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="doctor-image"
                  />
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
