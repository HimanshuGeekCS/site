import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { AllMustTry } from "./MenuAdilHotal"

import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router";

import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

import Accordion from 'react-bootstrap/Accordion';

import { LuPlus } from "react-icons/lu";
import { FaMinus } from "react-icons/fa6";


export const MustTryCombos = () => {
    const [MustTry, SetMustTry] = useState(AllMustTry)

    // when button is click it get data form localStorage and store in state.
    const existData = JSON.parse(localStorage.getItem('item')) || [];
    const [cartdata, setCartdata] = useState(existData)


    const Click = (item) => {
        const exist = JSON.parse(localStorage.getItem('item')) || [];
        const update = [...exist, item];
        localStorage.setItem('item', JSON.stringify(update));
        setCartdata(update);
    };

    useEffect(() => {
        const update = MustTry.map((e) => {
            const a = cartdata.find((i) => {
                if (i.Name == e.Name) {
                    return i;
                }
            })
            return a ? ({ ...e, quantity: a.quantity }) : e
        })
        SetMustTry(update)

    }, [cartdata])


    const increaseQty = (item) => {
        const update = cartdata.map((e) => {
            if (e.Name === item.Name) {
                return ({ ...e, quantity: e.quantity + 1 })
            }
            return e;
        })
        setCartdata(update)
        localStorage.setItem('item', JSON.stringify(update))
    }
    const decreaseQty = (item) => {
        const update = cartdata.map((e) => {
            if (e.Name === item.Name) {
                return ({ ...e, quantity: e.quantity - 1 })
            }
            return e;
        }).filter((e) => e.quantity > 0)
        setCartdata(update)
        localStorage.setItem('item', JSON.stringify(update))
    }


    return (
        <>
            <Container fluid className="px-0">
                <Container className="px-0">
                    <Row className=" justify-content-center">
                        <Col lg="10" >
                            <Accordion className=" accordion-flush" defaultActiveKey="0" >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className=" accordion-flush">
                                        <p className=" fw-bolder">Must Try Combos (9)</p></Accordion.Header>
                                    <Accordion.Body>
                                        {MustTry.map((item, index) => {
                                            return (
                                                <>
                                                    <div key={index} className=" d-flex justify-content-between">
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
                                                        <div className="px-4">
                                                            {
                                                                cartdata?.some((i) => i.Name === item.Name) ?
                                                                    <div className="bg-light rounded border-secondary text-success fw-bold shadow-lg d-flex justify-content-center align-items-center  column-gap-2">
                                                                        <div className="btn btn-light" onClick={() => increaseQty(item)} >
                                                                            <LuPlus />
                                                                        </div>

                                                                        <div>{item.quantity}</div>

                                                                        <div className="btn btn-light" onClick={() => decreaseQty(item)} >
                                                                            <FaMinus />
                                                                        </div>
                                                                    </div>
                                                                    :
                                                                    <button className="btn btn-light border-secondary text-success fw-bold shadow-lg" style={{ width: "7rem" }} onClick={() => Click(item)} >
                                                                        Add
                                                                    </button>
                                                            }
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
            </Container>
        </>
    );
};