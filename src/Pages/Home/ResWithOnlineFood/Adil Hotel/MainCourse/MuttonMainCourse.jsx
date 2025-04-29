// import Container from "react-bootstrap/esm/Container";
// import Row from "react-bootstrap/esm/Row";
// import Col from "react-bootstrap/esm/Col";
// import { AllChickenMainCourse} from "../MenuAdilHotal"

// import Nav from 'react-bootstrap/Nav';
// import { Link } from "react-router";

import React, { useEffect, useState } from "react";
import { FaMinus, FaStar } from "react-icons/fa";


import Accordion from 'react-bootstrap/Accordion';
import { LuPlus } from "react-icons/lu";
import { AllEggMainCourse, AllMuttonMainCourse } from "../MenuAdilHotal";


export const MuttonMainCourse = () => {

    const [MuttonMainCourse, SetMuttonMainCourse] = useState(AllMuttonMainCourse);



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

    useEffect(() => {
        const update = MuttonMainCourse.map((e) => {
            const a = cartdata.find((i) => {
                if (i.Name == e.Name) {
                    return i;
                }
            })
            return a ? ({ ...e, quantity: a.quantity }) : e
        })
        SetMuttonMainCourse(update)

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
            <Accordion className=" accordion-flush" >
                <Accordion.Item eventKey="0">
                    <Accordion.Header className=" accordion-flush">Mutton Main Course (8)</Accordion.Header>
                    <Accordion.Body>
                        {MuttonMainCourse.map((item, index) => {
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
                                                        </button>
                                                        :
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
        </>
    );
};