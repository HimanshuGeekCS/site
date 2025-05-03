import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router";


import React, { Component } from "react";
import { FaStar } from "react-icons/fa";
import { LuDot } from "react-icons/lu";


export const Tea = () => {
    const HomeData = [
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/6/6/8f48cf2a-182c-42c7-bd04-70820d7e554e_4eb4d771-1445-44f0-8c65-3c8c4d439f0f.jpg",
            HotalName: "Indian Coffee House", Time: "35-40mins", rating: 4.3,
            DishName: "South Indian, Chinese, Fast Food, Beverages", link: "/PureVegMenu",
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/1/20/b55cadd0-663f-4d94-8b7f-3c6dd2bc149b_53f806da-b42b-427a-98c9-059d7a8dfc45.JPG",
            HotalName: "Hotel Sai Nath & Sai Restaurant", Time: "35-40mins", rating: 4.1,
            DishName: "North Indian, South Indian, Chinese...", link: "/PureVegMenu"
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/04109fba-1c29-43b5-a800-2446374aa978_864617.jpg",
            HotalName: "Sab Ghar Tak Foods", Time: "35-40mins", rating: 4.3,
            DishName: "Chinese, Biryani, Indian, Beverages, Tandoor", link: "/PureVegMenu"
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/db1b6a51a06526d69e2bdd34d26811dc",
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
                                    <h2 style={{ fontSize:"45px", fontWeight:"bold"}}>Tea</h2>
                                    <p style={{ fontSize:"18px", fontWeight:"490"}}>Hot sips of tea to brighten your mood instantly.
                                    </p>
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