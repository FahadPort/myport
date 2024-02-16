import React, {  useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import qoute from "../Assests/image/quote-up.png";
import girl from "../Assests/image/girl.png";
import webgif from "../Assests/image/webgif.gif"
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import webdesign1 from "../Assests/image/webdesign1.png";
import uiux1 from "../Assests/image/uiux1.png";
import webdesign2 from "../Assests/image/webdesign2.png";
import uiux2 from "../Assests/image/uiux2.png";
import { FaArrowRight } from "react-icons/fa6";
import { LiaStarSolid } from "react-icons/lia";
import circleimg from "../Assests/image/circles.png";
import hireimg from "../Assests/image/hireimg.png";
import broadcast from "../Assests/image/broadcast.png";
import { IoMail } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { LiaAwardSolid } from "react-icons/lia";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { PiStarFourFill } from "react-icons/pi";




const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const portfolio = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };








  useEffect(() => {

    AOS.init({ duration: 2000 });



    




  }, []);

  return (
    <>
      <div  className="page">
        <div  className="page__wrapper">
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
                        <h1
                          data-aos="fade-up"
                          data-aos-anchor-placement="bottom-bottom"
                        >
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
                      <div
                        className="inner-col left"
                        data-aos="fade-right"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500"
                      >
                        <div className="icon">
                          <img src={qoute} alt="" />
                        </div>
                        <p>
                          Jenny’s Exceptional product design ensure our
                          website’s success. Highly Recommended
                        </p>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="inner-col mid">
                        <div className="img">
                          <img src={webgif} alt="" />

                          {/* <div class="switches-container">
                            <input
                              type="radio"
                              id="switchMonthly"
                              name="switchPlan"
                              value="Monthly"
                              checked="checked"
                            />
                            <input
                              type="radio"
                              id="switchYearly"
                              name="switchPlan"
                              value="Yearly"
                            />
                            <label for="switchMonthly">Portfolio</label>
                            <label for="switchYearly">Hire Me</label>
                            <div class="switch-wrapper">
                              <div class="switch">
                                <div>Portfolio</div>
                                <div>Hire Me</div>
                              </div>
                            </div>
                          </div> */}

                          <div className="switch-btn">
                            <button className="cta-switch portfolio"><Link to={""}>Portfolio</Link></button>
                            <button className="cta-switch hireme"><Link to={""}>Hire Me</Link></button>
                          </div>



                        </div>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div
                        className="inner-col right"
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500"
                      >
                        <div className="exp">
                          <ul>
                            <li>
                              <LiaStarSolid />
                            </li>
                            <li>
                              <LiaStarSolid />
                            </li>
                            <li>
                              <LiaStarSolid />
                            </li>
                            <li>
                              <LiaStarSolid />
                            </li>
                            <li>
                              <LiaStarSolid />
                            </li>
                          </ul>
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

          <div id="services">
            <div className="row-bg">
              <div className="container">
                <div className="serv-content">
                  <div className="heading-sec">
                    <Row>
                      <Col md={6}>
                        <div className="inner-col">
                          <h3>
                            My <span className="orange">Services</span>
                          </h3>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="inner-col">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis lacus nunc, posuere in justo vulputate,
                            bibendum sodales{" "}
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="boxes">
                    <Slider {...settings}>
                      <div>
                        <div className="box">
                          <div className="title">
                            <h4>UI/ UX Design</h4>
                          </div>
                          <div className="image-div">
                            <div className="image-inner">
                              <img src={webdesign1} alt="" />
                            </div>

                            <div className="arrow">
                              <Link to={""}>
                                <FaArrowRight />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="box">
                          <div className="title">
                            <h4>Web Design</h4>
                          </div>
                          <div className="image-div">
                            <div className="image-inner">
                              <img src={uiux1} alt="" />
                            </div>

                            <div className="arrow">
                              <Link to={""}>
                                <FaArrowRight />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="box">
                          <div className="title">
                            <h4>Landing Page</h4>
                          </div>
                          <div className="image-div">
                            <div className="image-inner">
                              <img src={webdesign2} alt="" />
                            </div>

                            <div className="arrow">
                              <Link to={""}>
                                <FaArrowRight />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="box">
                          <div className="title">
                            <h4>UI/ UX Design</h4>
                          </div>
                          <div className="image-div">
                            <div className="image-inner">
                              <img src={uiux2} alt="" />
                            </div>

                            <div className="arrow">
                              <Link to={""}>
                                <FaArrowRight />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="experience">
            <div className="container">
              <div className="exp-text">
                <h2
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  My <span className="orange">Work Experince</span>
                </h2>
              </div>
              <div className="timeline">
                <div className="exp-timeline">
                  <Row>
                    <Col md={4}>
                      <div className="inner-col">
                        {" "}
                        <div className="companydetails">
                          <div className="c_name">
                            <h5>Dapytech</h5>
                            <p>Dec 2022 - Feb 2023</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="inner-col">
                        {" "}
                        <div className="circle">
                          <span className="line"></span>
                        </div>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="inner-col">
                        <div className="exp-details">
                          <div className="position">
                            <h5>WordPress Web Developer</h5>
                            <p>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Natus, harum.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="exp-timeline">
                  <Row>
                    <Col md={4}>
                      <div className="inner-col">
                        {" "}
                        <div className="companydetails">
                          <div className="c_name">
                            <h5>FLow Technologies</h5>
                            <p>March 2023 - Present</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="inner-col">
                        {" "}
                        <div className="circle active">
                          <span></span>
                        </div>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="inner-col">
                        <div className="exp-details">
                          <div className="position">
                            <h5>WordPress Web Developer</h5>
                            <p>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Natus, harum.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>

          <div id="hireme">
            <div className="row-bg">
              <div className="container">
                <div className="content">
                  <Row>
                    <Col ms={5}>
                      <div className="inner-col">
                        <div className="image-div">
                          <img src={hireimg} className="girlimg" alt="" />
                          <img src={circleimg} className="rings" alt="" />
                        </div>
                      </div>
                    </Col>
                    <Col ms={5}>
                      <div className="inner-col">
                        <div className="text">
                          <h2>
                            Why <span className="orange">Hire me</span>?
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis lacus nunc, posuere in justo vulputate,
                            bibendum sodales
                          </p>
                          <div className="projects">
                            <Row>
                              <Col md={6}>
                                <div className="com-projects">
                                  <h5>450+</h5>
                                  <p>Project Completed</p>
                                </div>
                              </Col>
                              <Col md={6}>
                                <div className="satis-clients">
                                  <h5>100+</h5>
                                  <p>Satisfied Clients</p>
                                </div>
                              </Col>
                            </Row>
                          </div>
                          <button className="cta-hire">
                            <Link to={"/"}>Hire Me</Link>
                          </button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>

          <div id="portfolio">
            <div className="row-bg">
              <div className="container">
                <div className="port-content">
                  <div className="heading-sec">
                    <Row>
                      <Col md={12}>
                        <div className="inner-col">
                          <h3>
                            Lets have a look at <br /> my{" "}
                            <span className="orange">Portfolio</span>
                          </h3>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="port-slides">
                    <Slider {...portfolio}>
                      <div>
                        <div className="inner-slide">
                          <div className="slide-text">
                            <div className="image">
                              <img src={broadcast} alt="" />
                            </div>
                            <div className="content">
                              <h3>React App</h3>
                              <div className="inner-text">
                                <p>
                                  Lorem ipsum dolor, sit amet consectetur
                                  adipisicing elit. Magni rerum autem et culpa
                                  numquam! Beatae ipsum, placeat saepe nisi
                                  mollitia error fugiat debitis ullam ad
                                  similique, natus eveniet consectetur! Error.
                                </p>
                                <Link to={"/"}>Github</Link>
                              </div>
                            </div>
                            <div className="arrow">
                              <Link to={""}>
                                <FaArrowRight />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="inner-slide">
                          <div className="slide-text">
                            <div className="image">
                              <img src={broadcast} alt="" />
                            </div>
                            <div className="content">
                              <h3>React App</h3>
                              <div className="inner-text">
                                <p>
                                  Lorem ipsum dolor, sit amet consectetur
                                  adipisicing elit. Magni rerum autem et culpa
                                  numquam! Beatae ipsum, placeat saepe nisi
                                  mollitia error fugiat debitis ullam ad
                                  similique, natus eveniet consectetur! Error.
                                </p>
                                <Link to={"/"}>Github</Link>
                              </div>
                            </div>
                            <div className="arrow">
                              <Link to={""}>
                                <FaArrowRight />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="inner-slide">
                          <div className="slide-text">
                            <div className="image">
                              <img src={broadcast} alt="" />
                            </div>
                            <div className="content">
                              <h3>React App</h3>
                              <div className="inner-text">
                                <p>
                                  Lorem ipsum dolor, sit amet consectetur
                                  adipisicing elit. Magni rerum autem et culpa
                                  numquam! Beatae ipsum, placeat saepe nisi
                                  mollitia error fugiat debitis ullam ad
                                  similique, natus eveniet consectetur! Error.
                                </p>
                                <Link to={"/"}>Github</Link>
                              </div>
                            </div>
                            <div className="arrow">
                              <Link to={""}>
                                <FaArrowRight />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="newsletter">
            <div className="row-bg">
              <div className="container">
                <div className="content">
                  <h2>
                    Have an Awsome Project <br /> Idea?{" "}
                    <span className="orange">Let’s Discuss</span>
                  </h2>
                  <div className="form-content">
                    <div className="form-sec">
                      <div className="field">
                        <IoMail />

                        <input
                          type="Email"
                          className="email"
                          placeholder="Enter Email Address"
                        />
                      </div>
                      <div className="field-btn">
                        <input type="Submit" className="sbmt-btn" />
                      </div>
                    </div>

                    <div className="rating">
                      <div className="rate">
                        <p>
                          <FaStar />
                          4.9/5 Average Ratings
                        </p>
                      </div>
                      <div className="rate">
                        <p>
                          <LiaAwardSolid />
                          25+ Winning Awards
                        </p>
                      </div>
                      <div className="rate">
                        <p>
                          <BsFillPatchCheckFill />
                          Certified Product Designer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="tivker-sec">
          <ul class="txt-rotate-rit">
        <li>
        <PiStarFourFill /><h5 class="yellow">WordPress</h5>  <PiStarFourFill /><h5 class="grey">React JS</h5> <PiStarFourFill /><h5 class="grey">HTML CSS </h5> <PiStarFourFill /><h5 class="grey">Javascript</h5>
        <PiStarFourFill /><h5 class="yellow">WordPress</h5>  <PiStarFourFill /><h5 class="grey">React JS</h5> <PiStarFourFill /><h5 class="grey">HTML CSS </h5> <PiStarFourFill /><h5 class="grey">Javascript</h5>
        <PiStarFourFill /><h5 class="yellow">WordPress</h5>  <PiStarFourFill /><h5 class="grey">React JS</h5> <PiStarFourFill /><h5 class="grey">HTML CSS </h5> <PiStarFourFill /><h5 class="grey">Javascript</h5>
        <PiStarFourFill /><h5 class="yellow">WordPress</h5>  <PiStarFourFill /><h5 class="grey">React JS</h5> <PiStarFourFill /><h5 class="grey">HTML CSS </h5> <PiStarFourFill /><h5 class="grey">Javascript</h5>
        <PiStarFourFill /><h5 class="yellow">WordPress</h5>  <PiStarFourFill /><h5 class="grey">React JS</h5> <PiStarFourFill /><h5 class="grey">HTML CSS </h5> <PiStarFourFill /><h5 class="grey">Javascript</h5>
        <PiStarFourFill /><h5 class="yellow">WordPress</h5>  <PiStarFourFill /><h5 class="grey">React JS</h5> <PiStarFourFill /><h5 class="grey">HTML CSS </h5> <PiStarFourFill /><h5 class="grey">Javascript</h5>
        <PiStarFourFill /><h5 class="yellow">WordPress</h5>  <PiStarFourFill /><h5 class="grey">React JS</h5> <PiStarFourFill /><h5 class="grey">HTML CSS </h5> <PiStarFourFill /><h5 class="grey">Javascript</h5>
        <PiStarFourFill /><h5 class="yellow">WordPress</h5>  <PiStarFourFill /><h5 class="grey">React JS</h5> <PiStarFourFill /><h5 class="grey">HTML CSS </h5> <PiStarFourFill /><h5 class="grey">Javascript</h5>
        <PiStarFourFill /><h5 class="yellow">WordPress</h5>  <PiStarFourFill /><h5 class="grey">React JS</h5> <PiStarFourFill /><h5 class="grey">HTML CSS </h5> <PiStarFourFill /><h5 class="grey">Javascript</h5>
        <PiStarFourFill /><h5 class="yellow">WordPress</h5>  <PiStarFourFill /><h5 class="grey">React JS</h5> <PiStarFourFill /><h5 class="grey">HTML CSS </h5> <PiStarFourFill /><h5 class="grey">Javascript</h5>
        <PiStarFourFill /><h5 class="yellow">WordPress</h5>  <PiStarFourFill /><h5 class="grey">React JS</h5> <PiStarFourFill /><h5 class="grey">HTML CSS </h5> <PiStarFourFill /><h5 class="grey">Javascript</h5>
        <PiStarFourFill /><h5 class="yellow">WordPress</h5>  <PiStarFourFill /><h5 class="grey">React JS</h5> <PiStarFourFill /><h5 class="grey">HTML CSS </h5> <PiStarFourFill /><h5 class="grey">Javascript</h5>
        <PiStarFourFill /><h5 class="yellow">WordPress</h5>  <PiStarFourFill /><h5 class="grey">React JS</h5> <PiStarFourFill /><h5 class="grey">HTML CSS </h5> <PiStarFourFill /><h5 class="grey">Javascript</h5>
        <PiStarFourFill /><h5 class="yellow">WordPress</h5>  <PiStarFourFill /><h5 class="grey">React JS</h5> <PiStarFourFill /><h5 class="grey">HTML CSS </h5> <PiStarFourFill /><h5 class="grey">Javascript</h5>
        <PiStarFourFill /><h5 class="yellow">WordPress</h5>  <PiStarFourFill /><h5 class="grey">React JS</h5> <PiStarFourFill /><h5 class="grey">HTML CSS </h5> <PiStarFourFill /><h5 class="grey">Javascript</h5>
        <PiStarFourFill /><h5 class="yellow">WordPress</h5>  <PiStarFourFill /><h5 class="grey">React JS</h5> <PiStarFourFill /><h5 class="grey">HTML CSS </h5> <PiStarFourFill /><h5 class="grey">Javascript</h5>
        <PiStarFourFill /><h5 class="yellow">WordPress</h5>  <PiStarFourFill /><h5 class="grey">React JS</h5> <PiStarFourFill /><h5 class="grey">HTML CSS </h5> <PiStarFourFill /><h5 class="grey">Javascript</h5>
        
        </li>

        </ul>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
