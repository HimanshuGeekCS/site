import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router";


import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export const CarouselTwo = () => {

    const HomeData = [
        {
            img: "homeCarouselTwo/gp1ityra6utvzqn6ghnv.avif",
            HotalName: "Adil Hotel", Time: "35-40mins", rating: 4.3,
            DishName: "North Indian, Biryani, Tandoor", link: "/AdilHotel",
        },
        {
            img: "homeCarouselTwo/mt2aggiscfl3yviatwng.avif",
            HotalName: "Bakery World", Time: "35-40mins", rating: 4.3,
            DishName: "Bakery, Ice Cream, Snacks, Beverages", link: "/AdilHotel"
        },
        {
            img: "homeCarouselTwo/vkhcohhmqfczycw9vsar.avif",
            HotalName: "Hotel Sai Nath & Sai Restaurant", Time: "35-40mins", rating: 4.1,
            DishName: "North Indian, South Indian, Chinese...", link: "/AdilHotel"
            // , Beverages, Fast Food, Desserts
        },
        {
            img: "homeCarouselTwo/fa4944f0cfdcbca2bec1f3ab8e3db3f7.avif",
            HotalName: "The Fusion Lounge", Time: "35-40mins", rating: 4.3,
            DishName: "South Indian, Chinese, Beverages...", link: "/AdilHotel"
            // Fast Food
        },

        {
            img: "homeCarouselTwo/rvxp5xbniat84r6efku2.avif",
            HotalName: "Satkar Restaurant", Time: "35-40mins", rating: 4.3,
            DishName: "North Indian, South Indian, Indian...", link: "/AdilHotel"
            // , Salads, Desserts
        },

        {
            img: "homeCarouselTwo/nigqvxgzvyxtfjuqasgg.avif",
            HotalName: "Kathi Junction", Time: "35-40mins", rating: 4.3,
            DishName: "rolls, Burgers, Pizzas, Fast Food", link: "/AdilHotel"
        },

        {
            img: "homeCarouselTwo/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.avif",
            HotalName: "The Belgian Waffle Co.", Time: "35-40mins", rating: 4.3,
            DishName: "Waffle, Desserts, Ice Cream, Beverages", link: "/AdilHotel"
        },
        {
            img: "homeCarouselTwo/ryzswg44bt7thqzkuaj4.avif",
            HotalName: "Sab Ghar Tak Foods", Time: "35-40mins", rating: 4.0,
            DishName: "North Indian, South Indian, Chinese...", link: "/AdilHotel"
            // , Beverages, Fast Food, Desserts
        },

        {
            img: "homeCarouselTwo/enj3srsnhbltbom2ovvh.avif",
            HotalName: "Dev International", Time: "35-40mins", rating: 4.2,
            DishName: "North Indian, Chinese, Fast Food...", link: "/AdilHotel"
            // ,Beverages
        },

        {
            img: "homeCarouselTwo/fm3rs3g6z7ibfhesmxnu.avif",
            HotalName: "Scoops Fast Food And Ice Cream", Time: "35-40mins", rating: 4.4,
            DishName: "Bakery, Ice Cream, Snacks, Beverages", link: "/AdilHotel"
        },
    ];

    // // Custom Arrows
    const CustomNextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="custom-arrow custom-next"
                onClick={onClick}
                style={{
                    position: "absolute",
                    top: "0%",
                    right: "5rem",
                    height: "34px",
                    transform: "translateY(-148%)",
                    zIndex: 1,
                    cursor: "pointer",
                    background: "rgba(2, 6, 12, 0.15)",
                    borderRadius: "50%",
                    padding: " 4px 8px 4px",
                }}
            >
                <FaArrowLeft />
            </div>
        );
    };
    const CustomPrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="custom-arrow custom-prev align-items-center"
                onClick={onClick}
                style={{
                    position: "absolute",
                    top: "0%",
                    left: "61rem",
                    height: "34px",
                    transform: "translateY(-148%)",
                    zIndex: 1,
                    cursor: "pointer",
                    background: "rgba(2, 6, 12, 0.15)",
                    borderRadius: "50%",
                    padding: " 4px 8px 4px",
                }}
            >
                <FaArrowRight />
            </div>
        );
    };
    const settings = {
        // focusOnSelect: true,
        // infinite: true,
        // slidesToShow: 3,
        // slidesToScroll: 1,
        // speed: 500

        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Container fluid className="px-0">
                <Container className="px-0">
                    <Row className="pt-3 pb-3 px-5">
                        <Col lg="12">
                            <div>
                                <h2 style={{ fontSize: "21px", fontWeight: "bold" }}>Top restaurant chains in Bite Buzz</h2>
                            </div>
                        </Col>
                    </Row>

                    <Row className=" justify-content-center">
                        <Col lg="12">
                            <div className="slider-container px-5">
                                <Slider {...settings}>
                                    {HomeData.map((item, index) => {
                                        return (
                                            <>
                                                <div key={index} >
                                                    <div className=" d-flex justify-content-center">
                                                        <Nav.Link as={Link} to={item.link} className="text-decoration-none" >
                                                            <img src={item.img} alt="" className=" img-fluid" style={{
                                                                width: "240px", height: "170px", objectFit: "cover", borderRadius: "25px"
                                                            }} />
                                                        </Nav.Link>
                                                    </div>
                                                    <div className=" px-4 pt-3">
                                                        <div style={{ fontWeight: "bold" }}>
                                                            {item.HotalName}
                                                        </div>
                                                        <div className=" d-flex align-items-center column-gap-1" >
                                                            <FaStar style={{ color: "green" }} />
                                                            {item.rating}
                                                            <LuDot className=" fs-3" />
                                                            {item.Time}
                                                        </div>
                                                        <div >
                                                            {item.DishName}

                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                    }
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                    <div className="py-4 px-5">
                            <hr style={{ border: "1px solid gray" }} />
                        </div>
                </Container>
            </Container>

        </>
    );
};