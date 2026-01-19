
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Eashafounder from "../../../assets/easha-founder.jpg";
import Eashaceo from "../../../assets/ceo.jpg";

const VisionMission = () => {
  return (
    <Container fluid className="py-5 px-4" style={{ backgroundColor: "#e6f2f3" }}>
      
      {/* Vision Section */}
      <Row className="gx-0 mb-5 align-items-center">
        <Col xs={12} md={7} className="ms-auto">
          <div
            style={{
              backgroundColor: "#00A99D",
              borderRadius: "100px 0 0 100px",
              padding: "60px",
              color: "white",
              textAlign: "center",
            }}
          >
            <h4 className="mb-2">Our Vision</h4>
            <p style={{ fontSize: "14px", marginBottom: 0 }}>
              Smart, Secure, And Accessible Healthcare—Powered By Innovation.
            </p>
          </div>
        </Col>
      </Row>

      {/* Founder Images */}
      <Row className="justify-content-center text-center mb-5">
        
        {/* Founder 1 */}
        <Col xs={12} md={5} className="mb-4 mb-md-0 d-flex flex-column align-items-center">
          
          <img
            src={Eashafounder}
            alt="Easha Founder"
            style={{
              width: "250px",
              height: "240px",
              borderRadius: "50%",
              border: "6px solid #00A99D",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              objectFit: "cover",
              objectPosition: "center 20%",
            }}
          />
          
          <h5 className="mt-3">Mr. Nayakanti Pruthvi Raj</h5>
          <h6>Easha Founder</h6>
        </Col>

        {/* Founder 2 */}
        <Col xs={12} md={5} className="d-flex flex-column align-items-center">
          <img
            src={Eashaceo}
            alt="Easha CEO"
            style={{
              width: "250px",
              height: "240px",
              borderRadius: "50%",
              border: "6px solid #00A99D",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              objectFit: "cover",
              objectPosition: "center 18%", 
            }}
          />
          <h5 className="mt-3">Ms. Nadimidoddi Salomi</h5>
          <h6>Easha CEO</h6>
        </Col>

      </Row>

      {/* Mission Section */}
      <Row className="gx-0">
        <Col xs={12} md={7} className="me-auto">
          <div
            style={{
              backgroundColor: "#00A99D",
              borderRadius: "0 100px 100px 0",
              padding: "60px",
              color: "white",
              textAlign: "center",
            }}
          >
            <h4 className="mb-2">Our Mission</h4>
            <p style={{ fontSize: "14px", marginBottom: 0 }}>
              Outpatient Care, Simplified For Everyone, Everywhere.
            </p>
          </div>
        </Col>
      </Row>

    </Container>
  );
};

export default VisionMission;