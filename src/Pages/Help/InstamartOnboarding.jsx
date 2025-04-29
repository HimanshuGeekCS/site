
import Tab from 'react-bootstrap/Tab';

import Accordion from 'react-bootstrap/Accordion';

export const InstamartOnboarding = () => {
    const data = [
        {
            title: "I want to partner with Instamart",
            text: "Partner with Instamart (Link: https://www.Bite Buzz.com/instamart-partner)",
        },
        {
            title: "How many cities does Instamart operate in?",
            text: "Instamart proudly serves customers in 30 vibrant cities and is consistently expanding its reach to bring convenience and quality to even more locations. We are dedicated to continuous growth, ensuring that more communities can benefit from our top-notch services.",
        },
        {
            title: "What is the time to onboard?",
            text: "The onboarding duration is tailored to each product and brand, contingent upon their adherence to our comprehensive onboarding guidelines. We meticulously assess each application to ensure a smooth and efficient integration into the Instamart platform, promising only the finest selections for our esteemed customers.",
        },
        {
            title: "What flavour/grammage moves the best?",
            text: "The popularity of specific flavours and gram sizes is subject to variation across different categories.",
        },
        {
            title: "What are the expected volumes in the first 30 days?",
            text: "The projected sales volumes in the initial 30 days are highly dependent on the brand's reputation and market strategy. We provide personalized support to help each brand maximize its potential, ensuring a successful launch and sustained growth on our platform.",
        },
        {
            title: "Do I get sales data?",
            text: "Yes, we furnish detailed day-level sales data, empowering brands with the insights needed to make informed, strategic decisions. This data-driven approach enables our partners to optimize their offerings and enhance their performance continuously.",
        },
        {
            title: "How do ads work?",
            text: "Our dedicated advertising portal offers a robust platform for running targeted search ads. Brands can leverage this tool to increase visibility, drive traffic, and boost sales, all while benefiting from our comprehensive support and expertise in digital marketing.",
        },
        {
            title: "What are the opportunities for expansion into new cities/SKUs?",
            text: "xpansion into new cities or the introduction of additional SKUs is evaluated based on the performance of existing products. Our team conducts thorough assessments to determine the viability and potential success of such expansions, ensuring that each decision aligns with our strategic growth objectives and market demand.",
        },
    ]

    return (
        <>
            <Tab.Content>
                <Tab.Pane eventKey="four">
                <div className='px-3'>
                        <h4 className=' fw-medium'>Instamart Onboarding</h4>
                    </div>
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