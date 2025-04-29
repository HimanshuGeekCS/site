import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router";


import React, { Component, useState } from "react";
import { FaStar } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { AllHomeData } from "../../../HotalName";

export const ResWithOnlineFood = () => {
    
    const [HomeData, SetHomeData] = useState(AllHomeData)


    // const [FilterPure, SetFilterPure] = useState([])

    const FastDelivery = () => {
        const a = HomeData.filter((e) => {
            if (e.Time <= "30") {
                return ({ ...e })
            }
        })
        SetHomeData(a);
    }
    const PureVeg = (e) => {
        const a = HomeData.filter((e) => {
            if (e.Dish === "veg") {
                return ({ ...e })
            }
        })
        SetHomeData(a);
    }
    const NonVeg = () => {
        const a = HomeData.filter((e) => {
            if (e.Dish === "Nonveg") {
                return ({ ...e })
            }
        })
        SetHomeData(a);
    }
    const Rating4 = () => {
        const a = HomeData.filter((e) => {
            if (e.rating > 4.0) {
                return ({ ...e })
            }
        })
        SetHomeData(a);
    }
    const Pricebetween = () => {
        const a = HomeData.filter((e) => {
            if (e.price >= 300 && e.price <= 600) {
                return ({ ...e })
            }
        })
        SetHomeData(a);
    }
    const Lessthan300 = () => {
        const a = HomeData.filter((e) => {
            if (e.price <= 300) {
                return ({ ...e });
            }
        })
        SetHomeData(a);
    }


    return (
        <>
            <Container fluid className="px-0">
                <Container className="px-0">
                    <Row className="px-5">
                        <Col lg="12">
                            <div>
                                <div>
                                    <h2 style={{ fontSize: "21px", fontWeight: "bold" }}>Restaurants with online food delivery </h2>
                                </div>
                            </div>
                        </Col>
                        <Col lg="12">
                            <div className=" d-flex column-gap-2 py-3 ">
                                <button className="btn icon2 icon2 btn1 border-dark-subtle fw-medium rounded-pill" onClick={FastDelivery}>Fast Delivery</button>
                                <button className="btn icon2 btn1 border-dark-subtle fw-medium rounded-pill" onClick={PureVeg}>PureVeg</button>
                                <button className="btn icon2 btn1 border-dark-subtle fw-medium rounded-pill" onClick={NonVeg}>NonVeg</button>
                                <button className="btn icon2 btn1 border-dark-subtle fw-medium rounded-pill" onClick={Rating4}>Rating 4.0+</button>
                                <button className="btn icon2 btn1 border-dark-subtle border-black fw-medium rounded-pill" onClick={Pricebetween}>Rs. 300-Rs. 600</button>
                                <button className="btn icon2 btn1 border-dark-subtle border-black fw-medium rounded-pill" onClick={Lessthan300}>Less than Rs. 300</button>
                            </div>
                        </Col>
                    </Row>

                    <Row className=" row-gap-4 py-2 pt-4 px-5">
                        {HomeData.map((item, index) => {
                            return (
                                <Col lg="3" sm="4">
                                    <div key={index} className="icon" >
                                        <div className=" d-flex justify-content-center">
                                            <Nav.Link as={Link} to={item.link} className="text-decoration-none" >
                                                <img src={item.img} alt="" className=" img-fluid shadow-lg" style={{
                                                    width: "250px", height: "155px", objectFit: "cover", borderRadius: "25px"
                                                }} />
                                            </Nav.Link>
                                        </div>
                                        <div className=" px-3 pt-3">
                                            <div style={{ fontWeight: "bold" }}>
                                                {item.HotalName}
                                            </div>
                                            <div className=" d-flex align-items-center column-gap-1" >
                                                <FaStar style={{ color: "green" }} />
                                                {item.rating}
                                                <LuDot className=" fs-3" />
                                                {item.Time}
                                            </div>
                                            <div >
                                                {item.DishName}
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                        }
                    </Row>
                </Container>
            </Container>
        </>
    );
};