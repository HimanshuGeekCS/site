import { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { FaStar } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router";

import { LuPlus } from "react-icons/lu";
import { FaMinus } from "react-icons/fa6";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export const Cart = () => {

    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);


    const [Data, SetData] = useState("");


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('item'));
        if (data) {
            setItems(data);
        }
    }, []);


    // total price 
    useEffect(() => {
        let total = 0;
        items.map((e) => {
            total += e.Price * e.quantity;
        })
        setTotalPrice(total);
    }, [items])



    // Load items from localStorage and add quantity if missing
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('item'));
        if (data) {
            const updatedItems = data.map(item => ({ ...item, quantity: item.quantity || 1 }));
            setItems(updatedItems);
        }
    }, []);


    // Increase quantity
    const increaseQty = (index) => {
        const updatedItems = [...items];
        updatedItems[index].quantity++;
        setItems(updatedItems);
        localStorage.setItem('item', JSON.stringify(updatedItems));
    };

    // const increaseQty = (index) => {
    //     const updatedItems = items.map((item, i) => {
    //         if (i === index) {
    //             return { ...item, quantity: item.quantity+1 };
    //         }
    //     })
    //     setItems(updatedItems);
    //     localStorage.setItem('item', JSON.stringify(updatedItems));
    // };

    const decreaseQty = (index) => {
        const updatedItems = items.map((item, ind) => {
            if (ind === index) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }).filter(item => item.quantity > 0); // Remove items with quantity < 1
        setItems(updatedItems);
        localStorage.setItem('item', JSON.stringify(updatedItems));
    };


    // // const data = () => {
    //     const a = JSON.parse(localStorage.getItem('UserInput'))
    //     SetData(a)
    // // }

    useEffect(() => {
        const a = JSON.parse(localStorage.getItem('UserInput'))
        SetData(a)
    }, [])

    console.log(Data);










    // use this if data in not an Array.. ager data object hoga ye function useko array mei convert kardega.
    // useEffect(() => {
    //     const data = JSON.parse(localStorage.getItem('item'));
    //     if (data) {
    //         setItems(Array.isArray(data) ? data : [data]);
    //     } 
    // }, []);

    // useEffect(() => {
    //     const data = JSON.parse(localStorage.getItem('item'))
    // }, [])



    const delitems = (index) => {
        // const a = items.filter((e, ind) => { return ind !== index })
        const data = items.filter((e, ind) => {
            if (ind !== index) {
                return e
            }
        });
        setItems(data);
        // localStorage.removeItem('item');   ye puri data remove kar dega ek sath
        localStorage.setItem('item', JSON.stringify(data));
    }

    // dataSubmit
    const dataSubmit = () => {
        localStorage.setItem('submit', JSON.stringify(items));  //item set in localstorage when user submit data
        localStorage.removeItem('item')   //item remove form localstorage
        setItems([]);
        
        toast.success(" Your order has been successfully placed!");
    };






    return (
        <>
            <Container fluid>
                <Container className="pb-5 mb-5">
                    <ToastContainer />

                    <Row className=" justify-content-center">
                        {items.length > 0 ?
                            <Col lg="10" className="py-5">
                                <table class="table">
                                    <thead>
                                        <tr >
                                            <th scope="col-1">
                                                <div className="px-4">Product</div>
                                            </th>
                                            <th scope="col">
                                                <div>Price</div>
                                            </th>
                                            <th scope="col" >
                                                <div>Quantity</div>
                                            </th>
                                            <th scope="col">
                                                <div>Subtotal</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    {items.map((e, index) => {
                                        return (
                                            <> <tbody >
                                                <tr >
                                                    <td>
                                                        <div className=" d-flex  align-items-center column-gap-2">
                                                            <div >
                                                                <i type="button" className=" text-danger fs-5" onClick={() => delitems(index)}>
                                                                    <RxCross2 />
                                                                </i>
                                                            </div>
                                                            <div >
                                                                <img src={e.img} className=" rounded" alt="" style={{ width: "70px" }} />
                                                            </div>
                                                            <div>
                                                                {e.Name}
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div className=" d-flex align-items-center">
                                                            <div>
                                                                {e.Price}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td >
                                                        <div className=" d-flex  column-gap-3">
                                                            <div >
                                                                <LuPlus onClick={() => increaseQty(index)} />
                                                            </div>

                                                            <div> <p>{e.quantity}</p> </div>
                                                            <div >
                                                                <FaMinus onClick={() => decreaseQty(index)} />
                                                            </div>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className=" d-flex align-items-center">
                                                            <div>
                                                                {e.Price * e.quantity}
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody></>
                                        )
                                    })}

                                </table>
                            </Col>
                            : // Your cart is empty
                            <div className="text-center">
                                <Col lg="12">
                                    <div>
                                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="" style={{ width: "271px", height: "256px", backgroundRepeat: "no-repeat" }} />
                                    </div>
                                </Col>

                                <Col lg="12" className="pt-4">
                                    <div>
                                        <h5 className="fw-bold">Your cart is empty</h5>
                                        <p>You can go to home page to view more restaurants</p>
                                    </div>
                                    <div>
                                        <Nav.Link as={Link} to="/" className="text-decoration-none " >
                                            <button className=" btn btn-danger">See restaurants near you</button>
                                        </Nav.Link>
                                    </div>
                                </Col>
                            </div>
                        }
                    </Row>


                    {/* if items have any product then it show.otherwise not showing */}
                    {
                        items.length > 0 ?
                            <Row className="px-5 ">
                                <Col lg="6"></Col>
                                <Col lg="6" className="px-5">
                                    <table className="table border ">
                                        <thead >
                                            <tr>
                                                <th scope="col-1">
                                                    <div className=" text-center">Cart Total</div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th >
                                                    <div className="">Total</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            <tr>
                                                <td>
                                                    <div className="">
                                                        <div>
                                                            {totalPrice}
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Col>
                                {/* <Col lg="6"></Col> */}
                                {/* <Col lg="6" className="px-5 ms-auto">
                                    <div className=" text-center" >
                                        <Nav.Link as={Link} to="/Login" className="text-decoration-none" >
                                            <button className="btn btn-danger w-100">Proceed to checkout</button>
                                        </Nav.Link>
                                    </div>
                                </Col> */}
                                {
                                    !Data ? <Col lg="6" className="px-5 ms-auto">
                                        <div className=" text-center" >
                                            <Nav.Link as={Link} to="/Login" className="text-decoration-none" >
                                                <button className="btn btn-danger w-100">Proceed to checkout</button>
                                            </Nav.Link>
                                        </div>
                                    </Col> :
                                        <Col lg="6" className="px-5 ms-auto">
                                            <div className=" text-center" >
                                                <div className="text-decoration-none" onClick={dataSubmit} >
                                                    <button className="btn btn-danger w-100">Proceed to checkout</button>
                                                </div>
                                            </div>
                                        </Col>
                                }
                            </Row>
                            : null
                    }
                </Container>
            </Container >
        </>
    );
};