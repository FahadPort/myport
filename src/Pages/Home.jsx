import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import qoute from "../Assests/image/quote-up.png";
import girl from "../Assests/image/girl.png";
import AOS from 'aos';
import "aos/dist/aos.css"

const Home = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
   
    
}, [])
  return (
    <>
    
      <div id="banner">
        <div className="container">
          <div className="banner-content">
            <div className="ban-head">
              <Row>
                <Col>
                  <div className="inner-col">
                    <button className="cta-btn">
                      <Link to={""}>Hello!</Link>
                    </button>
                    <h1  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                      I'm <span className="orange">Fahad,</span>
                      <br />
                      Web Developer
                    </h1>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="ban-text">
              <Row>
                <Col md={3}>
                  <div className="inner-col left" data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" >
                    <div className="icon">
                      <img src={qoute} alt="" />
                    </div>
                    <p>
                      Jenny’s Exceptional product design ensure our website’s
                      success. Highly Recommended
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="inner-col mid">
                    <div className="img">
                      <img src={girl} alt="" />
                      <div className="buttons">
                      <button className="cta-orange">
                      <Link to={""}>Portfolio</Link>
                    </button>
                      <button className="cta-hire">
                      <Link to={""}>Hire me</Link>
                    </button>

                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="inner-col right" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
                    <div className="exp">
                      <h3>10 Years</h3>
                      <p>Experience</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div id="experience">
        <div className="container">
          <div className="exp-text">
            <h2 data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">My <span className="orange" >Work Experince</span></h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
