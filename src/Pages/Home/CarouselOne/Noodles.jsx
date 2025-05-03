import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router";


import React, { Component } from "react";
import { FaStar } from "react-icons/fa";
import { LuDot } from "react-icons/lu";


export const Noodles = () => {
    const HomeData = [
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/10/2/12c3cfd3-5416-4f4c-a835-d8853af271b3_a2759d2f-0edd-4b4d-9354-ebe509e02723.JPG",
            HotalName: "The Fusion Lounge", Time: "35-40mins", rating: 4.3,
            DishName: "South Indian, Chinese, Beverages, Fast Food, Desserts", link: "/PureVegMenu",
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qe1frassmh9oj1kypond",
            HotalName: "Hotel Sai Nath & Sai Restaurant", Time: "35-40mins", rating: 4.3,
            DishName: "North Indian, South Indian, Chinese...", link: "/PureVegMenu"
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/1/24/d123dcb8-3a82-4726-8882-84f070857d97_3286ddfd-6f15-4cd4-a051-36871e9384ce.jpg",
            HotalName: "Indian Coffee House", Time: "35-40mins", rating: 4.1,
            DishName: "South Indian, Chinese, Fast Food, Beverages", link: "/PureVegMenu"
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/8/8/4158576f-645e-469a-b41d-6ebf5871fd9a_135bb342-7939-460f-a8a6-c6e1ac78ff64.jpg",
            HotalName: "BABA CHAINES", Time: "35-40mins", rating: 4.3,
            DishName: "Indian, Juices, Street Food, Pastas, Fast Food, Cafe", link: "/PureVegMenu"
        },

        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/3/15/ea7a4321-b0bc-4b54-be94-324eafa1eab1_0d8ee559-3d7a-44bd-b532-c59a089478c9.jpg",
            HotalName: "Satkar Restaurant", Time: "35-40mins", rating: 4.3,
            DishName: "North Indian, South Indian, Indian, Salads, Desserts", link: "/PureVegMenu"
        },

        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e5d1cbf972517097f108aa24553f1d91",
            HotalName: "Kathi Junction", Time: "35-40mins", rating: 4.3,
            DishName: "rolls, Burgers, Pizzas, Fast Food", link: "/PureVegMenu"
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/1/13/30e7e25f-03ec-4b40-8f1f-3fe557a5af5d_82fb8a29-0866-4bc5-b55a-8001da1405d1.JPG",
            HotalName: "Urban Cafe", Time: "35-40mins", rating: 4.3,
            DishName: "Snacks, Pizzas, Pastas, Fast Food, Burgers, Cafe", link: "/PureVegMenu"
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
                                    <h2 style={{ fontSize:"45px", fontWeight:"bold"}}>Noodles</h2>
                                    <p style={{ fontSize:"18px", fontWeight:"490"}}>Dive into these delicious & flavoursome noodles for a perfect meal.</p>
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