<<<<<<< HEAD

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Eashafounder from "../../../assets/easha-founder.jpg";
import Eashaceo from "../../../assets/ceo.jpg";

=======
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Eashafounder from "../../../assets/easha-founder.jpg";
// import Eashaceo from "../../../assets/easha-ceo.jpg"; 
// import Eashaceo from "../../../assets/easha-ceo-final.jpg";
// import Eashaceo from "../../../assets/Easha-ceo-final.jpg";
// import Eashaceo from "../../../assets/CEO-FINAL.jpg";
import Eashaceo from "../../../assets/ceo.jpg";
>>>>>>> 858ff2f30513508742440b20f791896828877a84
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

<<<<<<< HEAD
      {/* Founder Images */}
      <Row className="justify-content-center text-center mb-5">
        
        {/* Founder 1 */}
        <Col xs={12} md={5} className="mb-4 mb-md-0 d-flex flex-column align-items-center">
          
=======
      {/* Two Founder Images in Same Row with Names */}
      <Row className="justify-content-center text-center mb-5">
        {/* Founder 1 */}
        <Col xs={12} md={5} className="mb-4 mb-md-0 d-flex flex-column align-items-center">
>>>>>>> 858ff2f30513508742440b20f791896828877a84
          <img
            src={Eashafounder}
            alt="Easha Founder"
            style={{
<<<<<<< HEAD
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
=======
              width: "100%",
              maxWidth: "250px",
              borderRadius: "50%",
              border: "6px solid #00A99D",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
          <h5 className="mt-3" style={{ color: "#0f1111ff" }}>Mr.Nayakanti Pruthvi Raj</h5>
          <h6 className="mt-1" style={{ color: "#0f1111ff" }}>Easha Founder</h6>
>>>>>>> 858ff2f30513508742440b20f791896828877a84
        </Col>

        {/* Founder 2 */}
        <Col xs={12} md={5} className="d-flex flex-column align-items-center">
          <img
            src={Eashaceo}
            alt="Easha CEO"
            style={{
<<<<<<< HEAD
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

=======
              width: "100%",
              maxWidth: "250px",
              borderRadius: "50%",
              height:"240px",
              border: "6px solid #00A99D",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
          <h5 className="mt-3" style={{ color: "#0f1111ff" }}>Ms.Nadimidoddi Salomi</h5>
          <h6 className="mt-1" style={{ color: "#0f1111ff" }}>Easha CEO</h6>
        </Col>
>>>>>>> 858ff2f30513508742440b20f791896828877a84
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
<<<<<<< HEAD

=======
>>>>>>> 858ff2f30513508742440b20f791896828877a84
    </Container>
  );
};

<<<<<<< HEAD
export default VisionMission;
=======
export default VisionMission;
>>>>>>> 858ff2f30513508742440b20f791896828877a84
