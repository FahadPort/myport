import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import logo from "../Assests/image/logo.png"
import { MdWifiCalling } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";




const Footer = () => {
  return (
    <>
      <div id="footer">
        <div className="row-bg">
          <div className="container">
            <div className="ft-cont">
              <div className="ft-top">
                <Row>
                  <Col md={6}>
                    <div className="inner-col">
                      <div className="text">
                        <h2>Lets Connect there</h2>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="inner-col">
                      <div className="text">
                        <div className="arrow">
                          <Link to={""}>Hire Me<FaArrowRightLong /></Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="ft-mid">
                <Row>
                  <Col md={6}>
                    <div className="inner-col">
                      <div className="text">
                        <img src={logo} alt="" />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam quod ipsa accusamus eius? Dolor, exercitationem. Sed alias sint aut ullam adipisci recusandae numquam, corporis saepe eius consequuntur corrupti beatae fugiat!</p>

                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="inner-col">
                      <div className="text">
                        <h5>Contact</h5>
                        <ul>
                          <li><Link to={"/"}><MdWifiCalling />+9234752553886</Link></li>
                          <li><Link to={"/"}><SiGmail />fahadmustufa3@gmail.com</Link></li>
                          <li><Link to={"/"}><CiLinkedin />Linkdin</Link></li>
                          </ul>
                      </div>
                    </div>
                  </Col>
                 
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
