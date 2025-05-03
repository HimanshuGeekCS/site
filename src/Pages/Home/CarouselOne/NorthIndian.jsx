import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router";


import React, { Component } from "react";
import { FaStar } from "react-icons/fa";
import { LuDot } from "react-icons/lu";


export const NorthIndian = () => {
    const HomeData = [
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fa4944f0cfdcbca2bec1f3ab8e3db3f7",
            HotalName: "The Fusion Lounge", Time: "35-40mins", rating: 4.3,
            DishName: "South Indian, Chinese, Beverages, Fast Food, Desserts", link: "/PureVegMenu",
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vkhcohhmqfczycw9vsar",
            HotalName: "Hotel Sai Nath & Sai Restaurant", Time: "35-40mins", rating: 4.3,
            DishName: "North Indian, South Indian, Chinese...", link: "/PureVegMenu"
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv",
            HotalName: "Adil Hotel", Time: "35-40mins", rating: 4.1,
            DishName: "North Indian, Biryani, Tandoor", link: "/PureVegMenu"
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yzgqriufpzmloogcn2vl",
            HotalName: "Jai Ganesh Bhojnalaya", Time: "35-40mins", rating: 4.3,
            DishName: "North Indian, South Indian, Indian, Chinese..", link: "/PureVegMenu"
        },

        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2469fa88ee9b0b5d1366ba88f2a7fa7f",
            HotalName: "Indian Coffee House", Time: "35-40mins", rating: 4.3,
            DishName: "South Indian, Chinese, Fast Food, Beverages", link: "/PureVegMenu"
        },

        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rvxp5xbniat84r6efku2",
            HotalName: "Satkar Restaurant", Time: "35-40mins", rating: 4.3,
            DishName: "North Indian, South Indian, Indian, Salads, Desserts", link: "/PureVegMenu"
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/21/dbe91f1f-b400-4f4b-a78d-c6b99bdc61c5_912754.JPG",
            HotalName: "Urban Cafe", Time: "35-40mins", rating: 4.3,
            DishName: "Snacks, Pizzas, Pastas, Fast Food, Burgers, Cafe", link: "/PureVegMenu"
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/enj3srsnhbltbom2ovvh",
            HotalName: "Dev International", Time: "35-40mins", rating: 4.3,
            DishName: "North Indian, Chinese, Fast Food, Beverages", link: "/PureVegMenu"
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ryzswg44bt7thqzkuaj4",
            HotalName: "Sab Ghar Tak Foods", Time: "35-40mins", rating: 4.3,
            DishName: "North Indian, South Indian, Chinese...", link: "/PureVegMenu"
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/23f2e646af4a747829c649c6d1929e9a",
            HotalName: "The Woods Cafe", Time: "35-40mins", rating: 4.3,
            DishName: "Chaat, Fast Food, Beverages", link: "/PureVegMenu"
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
                                    <h2 style={{ fontSize:"45px", fontWeight:"bold"}}>North Indian</h2>
                                    <p style={{ fontSize:"18px", fontWeight:"490"}}>Indulge with the best of North Indian cuisines.</p>
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