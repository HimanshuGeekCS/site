
import Tab from 'react-bootstrap/Tab';

import Accordion from 'react-bootstrap/Accordion';

export const PartnerOnboarding = () => {
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
            <Tab.Content >
                <Tab.Pane eventKey="first">
                    <div className='px-3'>
                        <h4 className=' fw-medium'>Partner Onboarding</h4>
                    </div>
                    <Accordion className=" accordion-flush" >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className=" accordion-flush ">
                                <h6 className=' fw-medium '>I want to partner my restaurant with Bite Buzz</h6></Accordion.Header>
                            <Accordion.Body>
                                <div className="">
                                    <p>Partner with us</p>
                                    <button>SEND AN EMAIL</button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <Accordion className=" accordion-flush " >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className=" accordion-flush ">
                                <h6 className='fw-medium'>What are the mandatory documents needed to list my restaurant on Bite Buzz?</h6></Accordion.Header>
                            <Accordion.Body>
                                <div className="">
                                    <p>-  Copies of the below documents are mandatory</p>
                                    <p>-  FSSAI Licence OR FSSAI Acknowledgement</p>
                                    <p>-  Pan Card</p>
                                    <p>-  GSTIN Certificate</p>
                                    <p>-  Cancelled Cheque OR bank Passbook</p>
                                    <p>-  Menu</p>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <Accordion className=" accordion-flush" >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className=" accordion-flush">
                                <h6 className='fw-medium'>I want to opt-out from Google reserve</h6></Accordion.Header>
                            <Accordion.Body>
                                <div className="">
                                    <p>Send an email</p>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    {data.map((item) => {
                        return (
                            <Accordion className=" accordion-flush" >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className=" accordion-flush">
                                        <h6 className=' fw-medium'>{item.title}</h6></Accordion.Header>
                                    <Accordion.Body>
                                        <div className="">
                                            <p>{item.text}</p>
                                            <p>{item.button}</p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        )
                    })
                    }
                </Tab.Pane>
            </Tab.Content>
        </>
    );
};