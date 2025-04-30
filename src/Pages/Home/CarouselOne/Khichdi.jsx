import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router";


import React, { Component } from "react";
import { FaStar } from "react-icons/fa";
import { LuDot } from "react-icons/lu";


export const Khichdi = () => {
    const HomeData = [
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/10/1/e3518f78-12cb-41b6-a79c-036b59386be2_f2aee924-1b64-4580-8a9a-860925fe2802.JPG",
            HotalName: "Dev International", Time: "35-40mins", rating: 4.3,
            DishName: "North Indian, Chinese, Fast Food, Beverages", link: "/PureVegMenu",
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/10/1/e3518f78-12cb-41b6-a79c-036b59386be2_f2aee924-1b64-4580-8a9a-860925fe2802.JPG",
            HotalName: "Hotel Sai Nath & Sai Restaurant", Time: "35-40mins", rating: 4.3,
            DishName: "North Indian, South Indian, Chinese...", link: "/PureVegMenu"
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/4/9/788d4ff6-5d5b-4956-b136-24159b8799b9_308d4115-d37f-4f09-b679-ae583d59641a.JPG",
            HotalName: "Jai Ganesh Bhojnalaya", Time: "35-40mins", rating: 4.1,
            DishName: "North Indian, South Indian, Indian, Chinese", link: "/PureVegMenu"
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/3/14/dff34b28-5a3b-4ec2-b757-ff8106a491fc_daa1d2cb-b9f5-4f43-b123-d194d1f6ba4a.png",
            HotalName: "Satkar Restaurant", Time: "35-40mins", rating: 4.3,
            DishName: "North Indian, South Indian, Indian, Salads, Desserts", link: "/PureVegMenu"
        },

        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/04109fba-1c29-43b5-a800-2446374aa978_864617.jpg",
            HotalName: "Sab Ghar Tak Foods", Time: "35-40mins", rating: 4.3,
            DishName: "Chinese, Biryani, Indian, Beverages, Tandoor", link: "/PureVegMenu"
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
                                    <h2 style={{ fontSize:"45px", fontWeight:"bold"}}>Khichdi</h2>
                                    <p style={{ fontSize:"18px", fontWeight:"490"}}>Comforting and filling, dive into the delicious flavour of Khichdi.</p>
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