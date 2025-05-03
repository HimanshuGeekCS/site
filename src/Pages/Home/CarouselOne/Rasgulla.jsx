import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router";


import React, { Component } from "react";
import { FaStar } from "react-icons/fa";
import { LuDot } from "react-icons/lu";


export const Rasgulla = () => {
    const HomeData = [
        {
            img: "ResWithOnlineFood/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.avif",
            HotalName: "Adil Hotel", Time: "35-40mins", rating: 4.3,
            DishName: "North Indian, Biryani, Tandoor", link: "/PureVegMenu",
        },
        {
            img: "ResWithOnlineFood/gp1ityra6utvzqn6ghnv.avif",
            HotalName: "Bakery World", Time: "35-40mins", rating: 4.3,
            DishName: "Bakery, Ice Cream, Snacks, Beverages", link: "/PureVegMenu"
        },
        {
            img: "ResWithOnlineFood/dbe91f1f-b400-4f4b-a78d-c6b99bdc61c5_912754.avif",
            HotalName: "Hotel Sai Nath & Sai Restaurant", Time: "35-40mins", rating: 4.1,
            DishName: "North Indian, South Indian, Chinese...", link: "/PureVegMenu"
        },
        {
            img: "ResWithOnlineFood/rvxp5xbniat84r6efku2.avif",
            HotalName: "The Fusion Lounge", Time: "35-40mins", rating: 4.3,
            DishName: "South Indian, Chinese, Beverages...", link: "/PureVegMenu"
        },

        {
            img: "ResWithOnlineFood/78517964-20dc-4e37-92ce-8990deb14ab6_898041.avif",
            HotalName: "Satkar Restaurant", Time: "35-40mins", rating: 4.3,
            DishName: "North Indian, South Indian, Indian...", link: "/PureVegMenu"
        },

        {
            img: "ResWithOnlineFood/vkhcohhmqfczycw9vsar.avif",
            HotalName: "Kathi Junction", Time: "35-40mins", rating: 4.3,
            DishName: "rolls, Burgers, Pizzas, Fast Food", link: "/PureVegMenu"
        },
    ];
    return (
        <>
            <Container fluid className="px-0">
                <Container className="px-0">
                    <Row className=" pt-5">
                        <Col lg="12">
                            <div>
                                <div>
                                    <h2 style={{ fontSize:"45px", fontWeight:"bold"}}>Rasgulla</h2>
                                    <p style={{ fontSize:"18px", fontWeight:"490"}}>Savour these mouth-watering and juicy Rasgullas.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className=" row-gap-4 py-5 mb-5">
                        <h3 style={{ fontSize:"24px", fontWeight:"bold"}}>Restaurants to explore</h3>
                        {HomeData.map((item, index) => {
                            return (
                                <Col lg="3" sm="4">
                                    <div key={index} className="icon" >
                                        <div className=" d-flex justify-content-center">
                                            <Nav.Link as={Link} to={item.link} className="text-decoration-none" >
                                                <img src={item.img} alt="" className=" img-fluid" style={{
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