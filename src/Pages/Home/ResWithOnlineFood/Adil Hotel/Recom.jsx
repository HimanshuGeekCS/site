import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

import Accordion from 'react-bootstrap/Accordion';


import { LuPlus } from "react-icons/lu";
import { FaMinus } from "react-icons/fa6";
import { AllRecommended } from "./MenuAdilHotal";


export const Recom = () => {
    const [Recommended, SetRecommended] = useState(AllRecommended)


    // when button is click it get data form localStorage and store in state.
    const existData = JSON.parse(localStorage.getItem('item')) || [];
    const [cartdata, setCartdata] = useState(existData)


    const Click = (item) => {
        // const exist = JSON.parse(localStorage.getItem('item')) || [];
        const exist = [...cartdata];
        const update = [...exist, item];
        localStorage.setItem('item', JSON.stringify(update));
        setCartdata(update);
    };


    // this is change quantity of Recommended when data is update in cartdata or localStorage
    useEffect(() => {
        const b = Recommended.map((item) => {
            const a = cartdata.find((e) => {
                if (e.Name === item.Name) {
                    return e;
                }
            })
            return a ? ({ ...item, quantity: a.quantity }) : item
        })
        SetRecommended(b)
    }, [cartdata])


    const increaseQty = (item) => {
        const updatedItems = cartdata.map(e => {
            if (e.Name === item.Name) {
                return { ...e, quantity: e.quantity + 1 };
            }
            return e;
        });
        setCartdata(updatedItems);
        localStorage.setItem('item', JSON.stringify(updatedItems));
    };

    const decreaseQty = (item) => {
        const updatedItems = cartdata.map(e => {
            if (e.Name === item.Name) {
                return { ...e, quantity: e.quantity - 1 };
            }
            return e;
        }).filter(item => item.quantity > 0);
        setCartdata(updatedItems);
        localStorage.setItem('item', JSON.stringify(updatedItems));
    };



    return (
        <>
            <Container fluid className="px-0">
                <Container className="px-0">
                    <Row className="py-5 px-4 justify-content-center">
                        <Col lg="10">
                            <div>
                                <div>
                                    <h2 style={{ fontSize: "21px", fontWeight: "bold" }}>Adil Hotel</h2>
                                </div>
                                <div className=" text-center">
                                    <h2 style={{ fontSize: "21px", fontWeight: "bold" }}>MENU</h2>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className=" justify-content-center">
                        <Col lg="10" >
                            <Accordion className=" accordion-flush" defaultActiveKey="0" >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className=" accordion-flush ">
                                        <p className=" fw-bolder"> Recommended (20)</p></Accordion.Header>
                                    <Accordion.Body>
                                        {Recommended.map((item, index) => {
                                            return (
                                                <>
                                                    <div key={index} className=" d-flex justify-content-between column-gap-5">
                                                        <div>
                                                            <div>
                                                                <h6>{item.Name}</h6>
                                                                <h6>{item.Price}</h6>
                                                            </div>
                                                            <div className=" d-flex align-items-center column-gap-1" >
                                                                <FaStar style={{ color: "green" }} />
                                                                {item.Rating}
                                                            </div>
                                                            <p>{item.Text}</p>
                                                        </div>
                                                        <div className="text-center d-flex justify-content-center align-items-end">
                                                            <img src={item.img} alt="" style={{ width: "156px", height: "144px", objectFit: "cover", borderRadius: "12px" }} />

                                                            <div className=" position-absolute ">
                                                                {
                                                                    !cartdata?.some((i) => i.Name === item.Name) ?
                                                                        <button className="btn  btn-light  border-secondary text-success fw-bold shadow-lg" style={{ width: "7rem" }} onClick={() => Click(item)} >
                                                                            Add
                                                                        </button> :
                                                                        // <button className="btn btn-light border-secondary text-success fw-bold shadow-lg" style={{ width: "7rem" }} >
                                                                        //     Edit
                                                                        // </button>
                                                                        <div className="bg-light rounded border-secondary text-success fw-bold shadow-lg d-flex justify-content-center align-items-center  column-gap-2">
                                                                            <div className="btn btn-light " onClick={() => increaseQty(item)}>
                                                                                <LuPlus />
                                                                            </div>

                                                                            <div className="">{item.quantity}</div>
                                                                            <div className="btn btn-light " onClick={() => decreaseQty(item)} >
                                                                                <FaMinus />
                                                                            </div>

                                                                        </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="py-2">
                                                        <hr style={{ border: "1px solid gray" }} />
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <div className="">
                                <hr style={{ border: "1px solid gray", height: "16px", backgroundColor: "#c6c3c3" }} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container >
        </>
    );
};