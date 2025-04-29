
import Tab from 'react-bootstrap/Tab';

import Accordion from 'react-bootstrap/Accordion';

export const FAQs = () => {
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

    const data2 = [
        {
            title: "What is Bite Buzz Customer Care Number?",
            text: "We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@Bite Buzz.in Note We value your privacy and your information is safe with us.Please do not reveal any personal information, bank account number, OTP etc.to another person.A Bite Buzz representative will never ask you for these details.Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf.Be vigilant and do not entertain phishing calls or emails",
            button: "SEND AN EMAIL",
        },
        {
            title: "I want to explore career opportunities with Bite Buzz",
            text: "Join our team",
            button: "SEND AN EMAIL",
        },
        {
            title: "I want to provide feedback",
            text: "",
            button: "SEND AN EMAIL",
        },
        {
            title: "I don’t have an FSSAI licence for my restaurant. Can it still be onboarded?",
            text: "",
            button: "SEND AN EMAIL",
        },
    ]


    return (
        <>
            <Tab.Content>
                <Tab.Pane eventKey="third">
                <div className='px-3'>
                        <h4 className=' fw-medium'>FAQs</h4>
                    </div>
                    {data2.map((item) => {
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
                    {data.map((item) => {
                        return (
                            <Accordion className=" accordion-flush" >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className=" accordion-flush">
                                        <h6 className=' fw-medium'>{item.title}</h6></Accordion.Header>
                                    <Accordion.Body>
                                        <div className="">
                                            <p>{item.text}</p>
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