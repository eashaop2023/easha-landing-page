<<<<<<< HEAD

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
=======
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MeetDoctor from "../../../assets/MeetDoctor.png";
import "bootstrap/dist/css/bootstrap.min.css";

const MeetWithOurDoctor = () => {
  const doctors = [
    { name: "Dr Chinchcu Chan", specialty: "Gynecologist" },
    { name: "Dr Chinchcu Chan", specialty: "Gynecologist" },
    { name: "Dr Chinchcu Chan", specialty: "Gynecologist" },
    { name: "Dr Chinchcu Chan", specialty: "Gynecologist" },
>>>>>>> 858ff2f30513508742440b20f791896828877a84
  ];

  return (
    <>
      <style>
<<<<<<< HEAD
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
=======
  {`
    .mt-mobile-only {
      margin-top: 120px;
    }
    @media (min-width: 375px) and (max-width: 767.98px) {
      .mt-mobile-only {
        margin-top: 170px;
      }
    }
    @media (min-width: 768px) {
      .mt-mobile-only {
        margin-top: 0;
      }
      .doctor-heading {
        margin-bottom: 40px;
        margin-top: 0px;
      }
    }

    .doctor-info {
      display: flex;
      flex-direction: column;   /* stack name and specialty */
      align-items: center;      /* center horizontally */
      justify-content: center; 
      width: 100%;
      text-align: center;
    }

    /* Name font sizes */
    .doctor-name {
      font-weight: 600;
      margin: 0;
      font-size: 13px; /* default mobile */
    }
    @media (min-width: 576px) {
      .doctor-name { font-size: 14px; }
    }
    @media (min-width: 768px) and (max-width: 991.98px) {
      .doctor-name { font-size: 13px !important; }  /* smaller in tablets */
    }
    @media (min-width: 992px) {
      .doctor-name { font-size: 16px; }
    }

    /* Specialty font sizes */
    .doctor-specialty {
      margin: 0;
      color: #333;
      font-size: 11px; /* default mobile */
    }
    @media (min-width: 576px) {
      .doctor-specialty { font-size: 12px; }
    }
    @media (min-width: 768px) and (max-width: 991.98px) {
      .doctor-specialty { font-size: 13px !important; } /* smaller in tablets */
    }
    @media (min-width: 992px) {
      .doctor-specialty { font-size: 14px; }
    }
  `}
</style>


      <section className="mt-mobile-only">
        <Container>
          <h2 className="text-center fw-semibold doctor-heading">
>>>>>>> 858ff2f30513508742440b20f791896828877a84
            Meet With Our Doctor
          </h2>

          <Row className="g-4 justify-content-center">
            {doctors.map((doc, index) => (
<<<<<<< HEAD
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
=======
              <Col key={index} xs={6} md={3} className="mt-4 mt-md-0">
                <div className="position-relative rounded overflow-hidden">
                  <img
                    src={MeetDoctor}
                    alt={doc.name}
                    className="img-fluid w-100"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 w-100 d-flex justify-content-center align-items-center"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.85)",
                      minHeight: "60px",
                      padding: "6px",
                    }}
                  >
                    <div className="doctor-info">
                      <p className="doctor-name">{doc.name}</p>
                      <p className="doctor-specialty">{doc.specialty}</p>
                    </div>
>>>>>>> 858ff2f30513508742440b20f791896828877a84
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

<<<<<<< HEAD
export default MeetWithOurDoctor;
=======
export default MeetWithOurDoctor;
>>>>>>> 858ff2f30513508742440b20f791896828877a84
