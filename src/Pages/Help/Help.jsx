import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";




import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import Accordion from 'react-bootstrap/Accordion';
import { PartnerOnboarding } from "./PartnerOnboarding";
import { Legal } from "./Legal";
import { FaQ } from "react-icons/fa6";
import { FAQs } from "./FAQs";
import { InstamartOnboarding } from "./InstamartOnboarding";

export const Help = () => {
    const data = [
        {
            title: "After I submit all documents, how long will it take for my restaurant to go live on Bite Buzz?",
            text: "After all mandatory documents have been received and verified it takes upto 7-10 working days for the onboarding to be completed and make your restaurant live on the platform.",
        },
        {
            title: "What is this one time Onboarding fees? Do I have to pay for it while registering?",
            text: "This is a one-time fee charged towards the system & admin costs incurred during the onboarding process. It is deducted from the weekly payouts after you start receiving orders from Bite Buzz.",
            button: "SEND AN EMAIL",
        },
        {
            title: "How much commission will I be charged by Bite Buzz?",
            text: "The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled.",
            button: "SEND AN EMAIL",
        },
        {
            title: "I don’t have an FSSAI licence for my restaurant. Can it still be onboarded?",
            text: "FSSAI licence is a mandatory requirement according to the government’s policies. However, if you are yet to receive the licence at the time of onboarding, you can proceed with the acknowledgement number which you will have received from FSSAI for your registration.",
            button: "SEND AN EMAIL",
        },
    ]
    return (
        <>
            <Container fluid className="px-0 py-5 pb-5 mb-5" >
                <Container className="px-0 " >
                    <Row className=" px-0" >
                        <Col lg="12" >
                            <div>
                                <h2>Help & Support</h2>
                                <h6>Let's take a step ahead and help you better.</h6>
                            </div>
                        </Col>
                    </Row>

                    <Row className="py-5 mt-5">
                        <Col lg="12">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row className="px-5 mx-5">
                                    <Col sm={3}>
                                        {/* variant="pills" */}
                                        <Nav className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first" className="text-black fw-bolder icon2">Partner Onboarding</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second" className="text-black fw-bolder icon2">Legal</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third" className="text-black fw-bolder icon2">FAQs</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="four" className="text-black fw-bolder icon2">Instamart Onboarding</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col sm={9} >
                                        {/* Components */}

                                        <PartnerOnboarding />
                                        <Legal />
                                        <FAQs />
                                        <InstamartOnboarding />
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};