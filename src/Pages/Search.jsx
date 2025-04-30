import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useState } from "react";
import { AllHomeData } from "../HotalName";


import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router";
import { AdilHotel } from "./Home/ResWithOnlineFood/Adil Hotel/AdilHotel";

import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router";
import { AllParatha } from "./Home/CarouselOne/Menu";

export const Search = () => {
    const [search, setSearch] = useState("");

    function filteredTasks() {
        // Filter tasks based on search input

        // The includes() method returns true if a string contains a specified string.Otherwise it returns false.

        // return HomeData.filter((e) => (e?.HotalName?.toLowerCase()?.includes(search)));
        return AllHomeData.filter((e) => (e.HotalName.toLowerCase().includes(search)));

    }
    function filteredTasks2() {
        // Filter tasks based on search input
        return AllParatha.filter((e) => (e.Name.toLowerCase().includes(search)));
    }

    return (
        <>
            <Container fluid className="py-2 pb-5 mb-5">
                <Container >
                    <Row className=" justify-content-center py-5">
                        <Col lg="10">
                            <div>
                                <input className=" w-100 fw-medium px-2" placeholder="Search for restaurants and food" style={{ height: "48px" }} type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                            </div>
                            <div>
                                {/* <FiSearch /> */}

                            </div>

                        </Col>

                        {search.length > 0 ?
                            <Col lg="10" className="pt-4">
                                {filteredTasks().map((e, ind) => {
                                    return (
                                        <>
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                    </tr>
                                                </thead>

                                                <tbody >
                                                    <tr>
                                                        <td>
                                                            <Nav.Link as={Link} to={e.link} className="text-decoration-none" >
                                                                <div className=" d-flex  align-items-center column-gap-2">
                                                                    <div>
                                                                        <img src={e.img} alt="" style={{ width: "70px", height: "70px", borderRadius: "10%", objectFit: "cover" }} />
                                                                    </div>
                                                                    <div>
                                                                        {e.HotalName}
                                                                    </div>
                                                                </div>
                                                            </Nav.Link>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </>
                                    )
                                })}
                                {filteredTasks2().map((e, ind) => {
                                    return (
                                        <>
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                    </tr>
                                                </thead>

                                                <tbody >
                                                    <tr>
                                                        <td>
                                                            <Nav.Link as={Link} to={e.link} className="text-decoration-none" >
                                                                <div className=" d-flex  align-items-center column-gap-2">
                                                                    <div>
                                                                        <img src={e.img} alt="" style={{ width: "70px", height: "70px", borderRadius: "10%", objectFit: "cover" }} />
                                                                    </div>
                                                                    <div>
                                                                        {/* {e.HotalName} */}
                                                                        {e.Name}
                                                                    </div>
                                                                </div>
                                                            </Nav.Link>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </>
                                    )
                                })}
                            </Col> : null}
                    </Row>

                    <Row className="py-5 my-5">

                    </Row>
                </Container>
            </Container>
        </>
    );
};