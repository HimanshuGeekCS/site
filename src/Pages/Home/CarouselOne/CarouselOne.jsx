import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router";


import React, { Component } from "react";
import Slider from "react-slick";

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


export const CarouselOne = () => {
    const HomeData = [
        { img: "homeCarouselImg/pureveg.avif", link: "/PureVeg" }, { img: "homeCarouselImg/paratha.avif", link: "/Paratha" },
        { img: "homeCarouselImg/chinese.avif", link: "/Chinese" }, { img: "homeCarouselImg/tea.avif", link: "/Tea" }, { img: "homeCarouselImg/coffee.avif", link: "/Coffee" },

        { img: "homeCarouselImg/northindian.avif", link: "/NorthIndian" }, { img: "homeCarouselImg/biryani.avif", link: "/Biryani" }, { img: "homeCarouselImg/khichdi.avif", link: "/Khichdi" }, { img: "homeCarouselImg/cakes.avif", link: "/Cakes" },
        { img: "homeCarouselImg/desserts.avif", link: "/Desserts" },

        { img: "homeCarouselImg/rasgulla.avif", link: "/Rasgulla" }, { img: "homeCarouselImg/gulabjamun.avif", link: "/GulabJamun" }, { img: "homeCarouselImg/cholebhature.avif", link: "/CholeBhature" }, { img: "homeCarouselImg/southindian.avif", link: "/SouthIndian" }, { img: "homeCarouselImg/noodles.avif", link: "/Noodles" },
    ];

    // // Custom Arrows
    const CustomNextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="custom-arrow custom-next"
                onClick={onClick}
                style={{
                    position: "absolute",
                    top: "0%",
                    right: "5rem",
                    height: "34px",
                    transform: "translateY(-101%)",
                    zIndex: 2,
                    cursor: "pointer",
                    background: "rgba(2, 6, 12, 0.15)",
                    borderRadius: "50%",
                    padding: " 4px 8px 4px",
                }}
            >
                <FaArrowRight />

            </div>
        );
    };
    const CustomPrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="custom-arrow custom-prev align-items-center"
                onClick={onClick}
                style={{
                    position: "absolute",
                    top: "0%",
                    left: "61rem",
                    height: "34px",
                    transform: "translateY(-101%)",
                    zIndex: 1,
                    cursor: "pointer",
                    background: "rgba(2, 6, 12, 0.15)",
                    borderRadius: "50%",
                    padding: " 4px 8px 4px",
                }}
            >
                <FaArrowLeft />
            </div>
        );
    };

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        },
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        // dots: true,
        // infinite: true,
        // slidesToShow: 6,
        // slidesToScroll: 1,
        // autoplay: true,
        // speed: 4000,
        // autoplaySpeed: 2000,
        // cssEase: "linear",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    };

    return (
        <>
            <Container fluid className="px-0 pt-3">
                <Container className="px-0 ">
                    <Row className="pt-3 px-5">
                        <Col lg="12">
                            <div>
                                <h2 style={{ fontSize: "21px", fontWeight: "bold" }}>What's on your mind?</h2>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="12">
                            <div className="slider-container">
                                <Slider {...settings}>
                                    {HomeData.map((item, index) => (
                                        <div key={index} className=" d-flex justify-content-center">
                                            <Nav.Link as={Link} to={item.link} className="text-decoration-none" >
                                                <img src={item.img} style={{ width: "144px", height: "180px" }} />
                                            </Nav.Link>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </Col>
                       
                    </Row>
                    <div className="py-4 px-5">
                            <hr style={{ border: "1px solid gray" }} />
                        </div>
                </Container>
            </Container>
        </>
    );
};