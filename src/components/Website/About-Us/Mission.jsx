import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Eashafounder from "../../../assets/eashafounder.png"; 
import Eashachairman from "../../../assets/eashachairman.png"; 
import Eashaceoo from "../../../assets/eashaceo.png"; 
//import Eashafounder from "../../../assets/Founder.jpg";
// import EashacoFounder from "../../../assets/ceo-new2.png"; // 
//import Eashachairman from "../../../assets/chairmann.jpeg"; //
//import Eashaceoo from "../../../assets/mam.jpeg"; //
// import Eashaceo from "../../../assets/ceo-new2.png"; 


const VisionMission = () => {
  return (
    <Container fluid className="py-5 px-0" style={{ backgroundColor: "#e6f2f3" }}>





      {/* Vision Section */}
<Row className="gx-0 mb-5 align-items-center">
  <Col>
    <div
      style={{
        backgroundColor: "#00A99D",
        borderRadius: "100px 0 0 100px",
        height: "100px",              
        display: "flex",             
        flexDirection: "column",
        justifyContent: "center",   
        alignItems: "center",        
        color: "white",
        textAlign: "center",
        padding: "0 20px",
        marginLeft:"5px",
                 
      }}
    >
      <h4 className="mb-1">Our Vision</h4>
      <p style={{ fontSize: "13px", marginBottom: 0 }}>
        Smart, Secure, And Accessible Healthcare—Powered By Innovation.
      </p>
    </div>
  </Col>
</Row>



    

      {/* Founders Section */}
      <Row className="justify-content-center text-center my-5">
        {/* Founder */}
        <Col xs={12} sm={10} md={6} lg={5} xl={4} className="mb-4 mt-4 d-flex flex-column align-items-center">
          <div
            style={{
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              border: "6px solid #00A99D",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={Eashafounder}
              alt="Easha Founder"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
          </div>
          <h5 className="mt-3 mb-1">Mr. Nayakanti Pruthvi Raj</h5>
          <h6 className="mb-0">Kantan IT Founder</h6>
        </Col>

        {/* Chairman */}
        <Col xs={12} sm={10} md={6} lg={5} xl={4} className="mb-4 mt-4 d-flex flex-column align-items-center">
          <div
            style={{
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              border: "6px solid #00A99D",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={Eashachairman}
              alt="Easha Chairman"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 20%",
              }}
            />
          </div>
          <h5 className="mt-3 mb-1">Mr. Nayakanti N Raju</h5>
          <h6 className="mb-0">Kantan IT Chairman</h6>
        </Col>

        {/* CEO - Commented Out */}
        {/* <Col xs={12} md={4} className="mb-4 mt-4 d-flex flex-column align-items-center">
          <img
            src={Eashaceoo}
            alt="Easha CEO"
            style={{
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              border: "6px solid #00A99D",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              objectFit: "cover",
              objectPosition: "center 20%",
            }}
          />
          <h5 className="mt-3">Ms. Nadimidoddi Salomi</h5>
          <h6>Kantan IT CEO</h6>
        </Col> */}
      </Row>




      {/* Mission Section */}
<Row className="gx-0 mt-5 px-0">
  <Col >
    <div
      style={{
        backgroundColor: "#00A99D",
        borderRadius: "0 100px 100px 0",
        height: "100px",               
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",    
        alignItems: "center",        
        color: "white",
        textAlign: "center",
        padding: "0 20px",    
        marginLeft:"0px",
        marginRight:"5px",       
      }}
    >
      <h4 className="mb-1">Our Mission</h4>
      <p style={{ fontSize: "13px", marginBottom: 0 }}>
        Outpatient Care, Simplified For Everyone, Everywhere.
      </p>
    </div>
  </Col>
</Row>
    </Container>
  );
};

export default VisionMission;