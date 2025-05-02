

import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

import Accordion from 'react-bootstrap/Accordion';


import { LuPlus } from "react-icons/lu";
import { FaMinus } from "react-icons/fa6";

import { AllRice, AllRoti } from "../Menu";

export const Rice_Roti = () => {

    const [Rice, SetRice] = useState(AllRice)
    const [Roti, SetRoti] = useState(AllRoti)


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

    // Rice
    // this is change quantity of Recommended when data is update in cartdata or localStorage
    useEffect(() => {
        const b = Rice.map((item) => {
            const a = cartdata.find((e) => {
                if (e.Name === item.Name) {
                    return e;
                }
            })
            return a ? ({ ...item, quantity: a.quantity }) : item
        })
        SetRice(b)
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


    // Roti
    // this is change quantity of Recommended when data is update in cartdata or localStorage
    useEffect(() => {
        const b = Roti.map((item) => {
            const a = cartdata.find((e) => {
                if (e.Name === item.Name) {
                    return e;
                }
            })
            return a ? ({ ...item, quantity: a.quantity }) : item
        })
        SetRoti(b)
    }, [cartdata])


    const increaseQty2 = (item) => {
        const updatedItems = cartdata.map(e => {
            if (e.Name === item.Name) {
                return { ...e, quantity: e.quantity + 1 };
            }
            return e;
        });
        setCartdata(updatedItems);
        localStorage.setItem('item', JSON.stringify(updatedItems));
    };

    const decreaseQty2 = (item) => {
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
            <Accordion className=" accordion-flush" defaultActiveKey="0"  >
                <Accordion.Item eventKey="0">
                    <Accordion.Header className=" accordion-flush ">
                        <p className=" fw-bolder"> Rice (4)</p></Accordion.Header>
                    <Accordion.Body>
                        {Rice.map((item, index) => {
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
                                            <img src={item} alt="Not Available" style={{ width: "156px", height: "144px", objectFit: "cover", borderRadius: "12px" }} />

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

            <Accordion className=" accordion-flush" defaultActiveKey="0"  >
                <Accordion.Item eventKey="0">
                    <Accordion.Header className=" accordion-flush ">
                        <p className=" fw-bolder"> Roti (2)</p></Accordion.Header>
                    <Accordion.Body>
                        {Roti.map((item, index) => {
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
                                            <img src={item} alt="Not Available" style={{ width: "156px", height: "144px", objectFit: "cover", borderRadius: "12px" }} />

                                            <div className=" position-absolute ">
                                                {
                                                    !cartdata?.some((i) => i.Name === item.Name) ?
                                                        <button className="btn  btn-light  border-secondary text-success fw-bold shadow-lg" style={{ width: "7rem" }} onClick={() => Click(item)} >
                                                            Add
                                                        </button> :
                                                        <div className="bg-light rounded border-secondary text-success fw-bold shadow-lg d-flex justify-content-center align-items-center  column-gap-2">
                                                            <div className="btn btn-light " onClick={() => increaseQty2(item)}>
                                                                <LuPlus />
                                                            </div>

                                                            <div className="">{item.quantity}</div>
                                                            <div className="btn btn-light " onClick={() => decreaseQty2(item)} >
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
        </>
    )
}