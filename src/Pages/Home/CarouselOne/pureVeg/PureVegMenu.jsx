import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

import Accordion from 'react-bootstrap/Accordion';
import { LuPlus } from "react-icons/lu";
import { FaMinus } from "react-icons/fa6";

import { item } from "../Menu";

export const PureVegMenu = () => {

    const [Recommended, SetRecommended] = useState(item)

    // when you click on page it show on top  
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    // when button is click it get data form localStorage and store in state.
    const existData = JSON.parse(localStorage.getItem('item')) || [];
    const [cartdata, setCartdata] = useState(existData)

    console.log(cartdata, 'cartdata');

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

    const groupedData = item.reduce((accumulator, currentItem) => {
        const key = currentItem.Type; // Replace propertyName with the actual property to group by
        if (!accumulator[key]) {
            accumulator[key] = [];
        }
        accumulator[key].push(currentItem);
        return accumulator;
    }, {});

    return (
        <>
            <Container fluid className="px-0">
                <Container className="px-0">
                    <Row className="py-5 px-4 justify-content-center">
                        <Col lg="10">
                            <div>
                                <div className=" text-center">
                                    <h2 style={{ fontSize: "21px", fontWeight: "bold" }}>MENU</h2>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {Object.keys(groupedData).map(key => (

                        <Row className=" justify-content-center">
                            <Col lg="10" >
                                <Accordion className=" accordion-flush" defaultActiveKey="0"  >
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className=" accordion-flush ">
                                            <p className=" fw-bolder"> {key}</p></Accordion.Header>
                                        <Accordion.Body>
                                            {
                                                groupedData[key].filter((item, index) => {
                                                    if (item.Type === item.Type) {
                                                        return item;

                                                    }
                                                }).map((item, index) => {
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
                                                                                <div className="bg-light rounded border-secondary text-success fw-bold shadow-lg d-flex justify-content-center align-items-center  column-gap-2">
                                                                                    <div className="btn btn-light " onClick={() => increaseQty(item)}>
                                                                                        <LuPlus />
                                                                                    </div>

                                                                                    <div className="">
                                                                                        {
                                                                                            cartdata.find((e) => {
                                                                                                if (e.Name === item.Name) {
                                                                                                    return e;
                                                                                                }
                                                                                            }).quantity
                                                                                        }
                                                                                    </div>

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
                                                })
                                            }
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <div className="">
                                    <hr style={{ border: "1px solid gray", height: "16px", backgroundColor: "#c6c3c3" }} />
                                </div>
                            </Col>
                        </Row>

                    ))}

                </Container>
            </Container >
        </>
    );
};