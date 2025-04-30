import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router";


import React, { Component } from "react";
import Slider from "react-slick";



export const BestPlaceEat = () => {
    const HomeData = [
        { text: "Best Restaurants in Bangalore", link: "/Restaurants" }, { text: "Best Restaurants in Pune", link: "/Restaurants" },
        { text: "Best Restaurants in Mumbai", link: "/Restaurants" }, { text: "Best Restaurants in Delhi", link: "/Restaurants" },
        { text: "Best Restaurants in Hyderabad", link: "/Restaurants" }, { text: "Best Restaurants in Kolkata", link: "/Restaurants" },
        { text: "Best Restaurants in Chennai", link: "/Restaurants" }, { text: "Best Restaurants in Ahmedabad", link: "/Restaurants" },
        { text: "Best Restaurants in Chandigarh", link: "/Restaurants" }, { text: "Best Restaurants in Jaipur", link: "/Restaurants" },
        { text: "Best Restaurants in Dehradun", link: "/Restaurants" }, { text: "Best Restaurants in Ludhiana", link: "/Restaurants" },
    ];

    return (
        <>
            <Container fluid className="px-0">
                <Container className="px-0">
                    <Row className="pt-5 px-5">
                        <Col lg="12">
                            <div>
                                <div>
                                    <h2 style={{ fontSize: "21px", fontWeight: "bold" }}>Best Places to Eat Across Cities</h2>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className=" row-gap-4 py-3  pb-5 px-5">
                        {
                            HomeData.map((item, index) => {
                                return (
                                    <>
                                        <Col lg="4" sm="4" >

                                            <Nav.Link as={Link} to={item.link} className="text-decoration-none" >
                                                <div className="p-3 py-4 px-5 rounded-3 icon2" key={index} style={{ border: "1px solid grey", border: "1.5px solid rgba(2, 6, 12, 0.1)" }}>
                                                    <h6> {item.text}</h6>
                                                </div>
                                            </Nav.Link>
                                        </Col>
                                    </>
                                )
                            })
                        }


                        {/* <div className="py-4">
                            <hr style={{ border: "1px solid gray" }} />
                        </div> */}
                    </Row>
                </Container>
            </Container>
        </>
    );
};