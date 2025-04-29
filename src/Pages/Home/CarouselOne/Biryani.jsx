import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router";


import React, { Component } from "react";
import { FaStar } from "react-icons/fa";
import { LuDot } from "react-icons/lu";


export const Biryani = () => {
    const HomeData = [
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/4/9/f7658b36-95e0-4b08-bb51-e89cccd8acc9_638915f5-2704-4df8-8b6e-38232a7f719f.JPG",
            HotalName: "The Fusion Lounge", Time: "35-40mins", rating: 4.3,
            DishName: "South Indian, Chinese, Beverages, Fast Food, Desserts", link: "/Help",
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lln3zxpll8pshaeqrgr9",
            HotalName: "Adil Hotel", Time: "35-40mins", rating: 4.3,
            DishName: "North Indian, Biryani, Tandoor", link: "/Help"
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/6/27/c31d6067-a3b0-4d8d-acef-c25aeb4dc418_05cf481e-e52c-4645-8899-80783e9f5fcb.JPG",
            HotalName: "Champaran Handi Restaurant", Time: "35-40mins", rating: 4.1,
            DishName: "North Indian", link: "/Help"
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/04109fba-1c29-43b5-a800-2446374aa978_864617.jpg",
            HotalName: "Sab Ghar Tak Foods", Time: "35-40mins", rating: 4.3,
            DishName: "Chinese, Biryani, Indian, Beverages, Tandoor", link: "/Help"
        },

        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/4/9/5f74ca6a-2a92-4810-a6a0-ace38aa6cc31_886af383-53f2-4ee0-8393-10ec944f21c7.JPG",
            HotalName: "Dev International", Time: "35-40mins", rating: 4.3,
            DishName: "North Indian, Chinese, Fast Food, Beverages", link: "/Help"
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
                                    <h2 style={{ fontSize:"45px", fontWeight:"bold"}}>Biryani</h2>
                                    <p style={{ fontSize:"18px", fontWeight:"490"}}>Taste these delectable classics, delectable biryanis to make your day.</p>
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