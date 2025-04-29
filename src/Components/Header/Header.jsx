import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from "react-router";

import { FiSearch } from "react-icons/fi";
import { IoIosHelpBuoy } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { useEffect, useState } from 'react';


export const Header = () => {

    const number = JSON.parse(localStorage.getItem('item'))

    const [CartCount, SetCartCount] = useState(number);





    // useEffect(() => {
    //     const a = CartCount.map((e) => {
    //         let c = 0;
    //         if (e) {
    //             return c++;
    //         }
    //     })
    //     SetCartCount(a)
    // }, [])

    // console.log(number)

    return (
        <>
            {/* bg-body-tertiary */}
            <Container fluid className='px-0 shadow-sm'>
                <Container className='px-0 '>

                    <Navbar expand="lg" className=' '>
                        <Navbar.Brand as={Link} to="/">
                            <div className='bg-body-tertiary'>
                                <img src="Logo.png" alt="" className=' ' style={{ width: "85px" }} />
                            </div>
                        </Navbar.Brand>

                        {/* <Navbar.Brand as={Link} to="/">Bite Buzz</Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav className="ms-auto  column-gap-5 fw-medium">
                                <Nav.Link as={Link} to="/Search" className="text-decoration-none " ><i className='px-2' style={{ fontSize: "22px" }}><FiSearch /></i>Search</Nav.Link>

                                <Nav.Link as={Link} to="/Help" className="text-decoration-none " ><i className='px-2' style={{ fontSize: "22px" }}><IoIosHelpBuoy /></i>Help</Nav.Link>

                                <Nav.Link as={Link} to="/Login" className="text-decoration-none " ><i className='px-2' style={{ fontSize: "22px" }}><BsPerson /></i>Log in</Nav.Link>

                                {!CartCount?.length ?
                                    <Nav.Link as={Link} to="/Cart" className="text-decoration-none " >
                                        <i className='px-2' style={{ fontSize: "22px" }}>
                                            <CiShoppingCart style={{ fontSize: "30px" }} />
                                            <span className=' position-absolute ' style={{ fontSize: "14px", fontStyle: "normal", bottom: "43px", right: "56px", }}>{CartCount?.length}</span>
                                        </i>
                                        Cart
                                    </Nav.Link>
                                    :
                                    <Nav.Link as={Link} to="/Cart" className="text-decoration-none " >
                                        <i className='px-2' style={{ fontSize: "22px" }}>
                                            <CiShoppingCart style={{ fontSize: "30px", color: "green", }} />
                                            <span className=' position-absolute text-success fw-medium' style={{ fontSize: "14px", fontStyle: "normal", bottom: "43px", right: "58px", }}>{CartCount?.length}</span>
                                        </i>
                                        Cart
                                    </Nav.Link>}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Container>
        </>
    );
};