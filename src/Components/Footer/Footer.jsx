import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export const Footer = () => {
    return (
        <>
        {/* style={{ backgroundColor: "rgb(248, 248, 248)" }} */}
            <Container fluid className="px-0 py-5" >
                <Container className="px-0">
                    <Row className="px-5">
                        <Col lg="12">
                            <div>
                                <h1>Bite Buzz</h1>
                            </div>
                        </Col>
                    </Row>

                    <Row className="pt-4 px-5">
                        <Col lg="6">
                            <Row>
                                <Col>
                                    <h5>About Bite Buzz</h5>
                                    <Nav.Link as={Link} to="/"> <p>Who We Are</p></Nav.Link>
                                    <div>Who We Are</div>
                                    <div>Work With Us</div>
                                    <div>Contact Us</div>
                                </Col>
                                <Col>
                                    <h5>Biteverse</h5>
                                    <div>Zomato</div>
                                    <div>Blinkit</div>
                                    <div>Feeding India</div>
                                </Col>

                            </Row>
                        </Col>

                        <Col lg="6">
                            <Row >
                                <Col>
                                    <h5>Learn More</h5>
                                    <div>Privacy</div>
                                    <div>Security</div>
                                    <div>Terms</div>
                                </Col>
                                <Col>
                                    <h5>Social links</h5>
                                    <div className=" d-flex gap-2">
                                        <span><Nav.Link as={Link} to="https://www.facebook.com/" style={{ fontSize: "22px" }} ><FaLinkedin /></Nav.Link></span>
                                        <span><Nav.Link as={Link} to="https://www.facebook.com/" style={{ fontSize: "22px" }} ><FaInstagramSquare /></Nav.Link></span>
                                        <span><Nav.Link as={Link} to="https://www.facebook.com/" style={{ fontSize: "22px" }} ><FaSquareXTwitter /></Nav.Link></span>
                                        <span><Nav.Link as={Link} to="https://www.facebook.com/" style={{ fontSize: "22px" }} ><FaSquareYoutube /></Nav.Link></span>
                                        <span><Nav.Link as={Link} to="https://www.facebook.com/" style={{ fontSize: "22px" }} ><FaFacebook /></Nav.Link></span>
                                    </div>
                                    <Row className="row-gap-2 pt-2">
                                        <Col  >
                                            <span><Nav.Link as={Link} to="https://play.google.com/store/games?hl=en" ><img src="appStore.webp" alt="Google Play" style={{ width: "140px" }} /></Nav.Link></span>
                                        </Col>
                                        <Col >
                                            <span> <Nav.Link as={Link} to="https://www.apple.com/in/app-store/" ><img src="googlePlay.webp" alt="Google Play" style={{ width: "140px" }} /></Nav.Link></span>
                                        </Col>
                                    </Row>

                                </Col>

                            </Row>

                        </Col>

                        <div className="pt-5">
                            <hr />
                        </div>
                        <div >
                            <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2025 © BiteBuzz™ Ltd. All rights reserved.</p>
                        </div>
                    </Row>
                </Container>
            </Container>
        </>
    );
};