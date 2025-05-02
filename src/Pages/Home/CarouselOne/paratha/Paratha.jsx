import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router";


import React, { Component } from "react";
import { FaStar } from "react-icons/fa";
import { LuDot } from "react-icons/lu";


export const Paratha = () => {
    const HomeData = [
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/6/27/c6dd4cea-08a0-4d1b-9459-b40843a23b87_6a74510e-1b44-4473-9bc7-9cedd1a4dae5.JPG",
            HotalName: "Jai Ganesh Bhojnalaya", Time: "35-40mins", rating: 4.3,
            DishName: "North Indian, South Indian, Indian, Chinese", link: "/ParathaMenu",
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/24ef7f30223e10b1746b4f00cae6513e",
            HotalName: "Hotel Sai Nath & Sai Restaurant", Time: "35-40mins", rating: 4.3,
            DishName: "North Indian, South Indian, Chinese, Beverages, Fast Food, Desserts", link: "/ParathaMenu"
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/3/15/418108f8-ee01-4111-bb3b-25cc472899a1_01503c40-374d-4694-93d3-ef9165c5174d.jpg",
            HotalName: "Satkar Restaurant", Time: "35-40mins", rating: 4.1,
            DishName: "North Indian, South Indian, Indian, Salads, Desserts", link: "/ParathaMenu"
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0ccd31818f2e9d59f91bbd77bfb50b76",
            HotalName: "Sarthak Tiffin Center", Time: "35-40mins", rating: 4.3,
            DishName: "North Indian, Indian", link: "/ParathaMenu"
        },

        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b85ed4f300d122ae59fd7c6becea5dd3",
            HotalName: "Dev International", Time: "35-40mins", rating: 4.3,
            DishName: "North Indian, Chinese, Fast Food, Beverages", link: "/ParathaMenu"
        },

        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/10/2/252e7519-4beb-4dd4-b100-35239baca592_a8987d90-ccf6-4027-b4ef-e905d618e796.JPG",
            HotalName: "The Fusion Lounge", Time: "35-40mins", rating: 4.3,
            DishName: "South Indian, Chinese, Beverages, Fast Food, Desserts", link: "/ParathaMenu"
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
                                    <h2 style={{ fontSize:"45px", fontWeight:"bold"}}>Paratha</h2>
                                    <p style={{ fontSize:"18px", fontWeight:"490"}}>Explore a wide variety of Parathas to satisfy your cravings.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* <Row className=" row-gap-4 py-5 mb-5">
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
                    </Row> */}
                </Container>
            </Container>

        </>
    );
};