import { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import Nav from 'react-bootstrap/Nav';
import { FaStar } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { Link } from "react-router";

import { RiDiscountPercentFill } from "react-icons/ri";

export const Restaurants = () => {

    const [Data, SetData] = useState([
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/5/30/945b75f6-c613-4c4c-accd-dbcea15e421c_20240530T123252596.jpg",
            HotalName: "MG's Fine Dining", rating: 4.3, Address: "North Indian • Asian", offer: "Springs Hotel And Spa, Basavanagudi",
            distance: 2.1 + "km", discount: "Flat 15% off on pre-booking", Dish: "veg", link: "/AdilHotel",
            price: 300, Booktable: "yes", Quantity: 1,
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1681283876/602f55413af2b5d71333a8af03bc7172.jpg",
            HotalName: "Frozen Bottle", rating: 4.0, Address: "Beverages • Desserts", offer: "ETA Mall, Binnipete, Bangalore",
            distance: 2.9 + "km", discount: "Flat 15% off on pre-booking", Dish: "veg", link: "/AdilHotel",
            price: 400, Booktable: "no", ServesAlcohol: "yes", Quantity: 1,
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1662123565/rldy0mhqrr1dsnmf1cq4.webp",
            HotalName: "La Pino'z Pizza", rating: 3.3, Address: "Pizza • Fast Food", offer: "Basavanagudi, Bangalore",
            distance: 2 + "km", discount: "Flat 15% off on pre-booking", Dish: "Nonveg", link: "/AdilHotel",
            price: 300, Booktable: "no", ServesAlcohol: "yes", Quantity: 1,
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1702629843/2f81027c45e36b0271f9c0ef29a2e7c1.jpg",
            HotalName: "Cafe San Churro", rating: 3.9, Address: "Desserts • Italian", offer: "Basavanagudi, Bangalore",
            distance: 2.2 + "km", discount: "Flat 15% off on pre-booking", Dish: "veg", link: "/AdilHotel",
            price: 1300, Booktable: "no", ServesAlcohol: "yes", Quantity: 1,
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/12/6/675cc417-2b9d-4921-ab0d-ceaa27966d83_image320deb7275b8e4bbea8a88fb10d3bd798.JPG",
            HotalName: "Harley's Fine Baking", rating: 2.3, Address: "Continental • Bakery", offer: "Basavanagudi, Bangalore",
            distance: 2 + "km", discount: "Flat 15% off on pre-booking", Dish: "veg", link: "/AdilHotel",
            price: 500, Booktable: "yes", Quantity: 1,
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1709206651/4fcc48769de6e11b88f573784db3d561.jpg",
            HotalName: "Pipabu", rating: 3.3, Address: "Continental • Italian", offer: "Basavanagudi, Bangalore",
            distance: 5.3 + "km", discount: "Flat 15% off on pre-booking", Dish: "Nonveg", link: "/AdilHotel",
            price: 500, Booktable: "no", ServesAlcohol: "yes", Quantity: 1,
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1670225927/95f1ca19a3cfa869b03bcf1db66bbec3.webp",
            HotalName: "South Ruchis @ Janatha", rating: 3.5, Address: "North Indian • South Indian", offer: "Gandhi Nagar, Bangalore",
            distance: 3.8 + "km", discount: "Flat 15% off on pre-booking", Dish: "Nonveg", link: "/AdilHotel",
            price: 500, Booktable: "no", ServesAlcohol: "yes", Quantity: 1,
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1678095403/3abded391f389250f5152991d18a165c.jpg",
            HotalName: "Geo Restaurant", rating: 3.7, Address: "Andhra • North Indian", offer: "Sampangirama Nagar, Bangalore",
            distance: 2.8 + "km", discount: "Flat 15% off on pre-booking", Dish: "veg", link: "/AdilHotel",
            price: 700, Booktable: "no", ServesAlcohol: "yes", Quantity: 1,
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1707228302/046d15cf8fe5a726a76487c184b49d3e.jpg",
            HotalName: "Southern Bhavan", rating: 5.3, Address: "Chinese • North Indian", offer: "Majestic, Bangalore",
            distance: 2.2 + "km", discount: "Flat 15% off on pre-booking", Dish: "veg", link: "/AdilHotel",
            price: 700, Booktable: "yes", Quantity: 1,
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1660390338/hbsbapqoaghioekpauzu.jpg",
            HotalName: "Scotland Curry House", rating: 3.4, Address: "Chinese • North Indian", offer: "Zion Hotel, Majestic, Bangalore",
            distance: 5.9 + "km", discount: "Flat 15% off on pre-booking", Dish: "veg", link: "/AdilHotel",
            price: 700, Booktable: "yes", Quantity: 1,
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1704870210/29bed230f43fc16cfd6f98e7a519d7e8.jpg",
            HotalName: "Dynasty Lounge Bar &", rating: 3.3, Address: "Asian • North Indian", offer: "Shanti Nagar, Bangalore",
            distance: 6 + "km", discount: "Flat 15% off on pre-booking", Dish: "veg", link: "/AdilHotel",
            price: 700, Booktable: "yes", Quantity: 1,
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1660222265/nvqw9n7r2dthi0w8f6di.jpg",
            HotalName: "Board 4 Bored", rating: 4.3, Address: "Chinese • Fast Food", offer: "Chaitanya Plaza, Basavanagudi,",
            distance: 5 + "km", discount: "Flat 15% off on pre-booking", Dish: "Nonveg", link: "/AdilHotel",
            price: 700, Quantity: 1,
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/1/16/a7fad692-f87f-4fb9-81f4-bd310e658d33_image16403da64d5fa2470c99ff625ce10cbb98.JPG",
            HotalName: "OTP - Oven Tawa Pan", rating: 3.3, Address: "Italian • Chinese", offer: "Basavanagudi, Bangalore",
            distance: 2.8 + "km", discount: "Flat 15% off on pre-booking", Dish: "Nonveg", link: "/AdilHotel",
            price: 600, Booktable: "yes", Quantity: 1,
        },
        {
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1671535857/447198f72aa059c79985ea17b31b2af9.webp",
            HotalName: "Sri Udupi Food Hub", rating: 3.1, Address: "North Indian • South Indian", offer: "The Kanishka Grand Building, Gandhi",
            distance: 0.9 + "km", discount: "Flat 15% off on pre-booking", Dish: "Nonveg", link: "/AdilHotel",
            price: 600, Booktable: "yes", Quantity: 1,
        },
    ])


    const rating = () => {
        const a = Data.filter((e) => {
            if (e.rating >= "4") {
                return ({ ...e })
            }
        })
        SetData(a);
    }
    const Whitinkm = () => {
        const a = Data.filter((e) => {
            if (e.distance <= "5") {
                return ({ ...e })
            }
        })
        SetData(a);
    }
    const PureVeg = () => {
        const a = Data.filter((e) => {
            if (e.Dish === "veg") {
                return ({ ...e })
            }
        })
        SetData(a);
    }
    const Booktable = () => {
        const a = Data.filter((e) => {
            if (e.Booktable === "yes") {
                return ({ ...e })
            }
        })
        SetData(a);
    }
    const ServesAlcohol = () => {
        const a = Data.filter((e) => {
            if (e.ServesAlcohol === "yes") {
                return ({ ...e })
            }
        })
        SetData(a);
    }
    return (
        <>
            <Container fluid className="">
                <Container className="">
                    <Row className="py-5 px-5">
                        <Col lg="12">
                            <div>
                                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/DO_collectionBanner.png" alt="" className="img-fluid rounded-5 object-fit-cover" style={{ height: "340px", width: "100%" }} />
                            </div>

                        </Col>
                    </Row>
                    <Row className="px-5">
                        <Col lg="12">
                            <div className=" d-flex column-gap-2 py-3 ">
                                <button className="btn icon2 icon2 btn1 border-dark-subtle fw-medium rounded-pill" onClick={rating}>Rating 4+</button>
                                <button className="btn icon2 btn1 border-dark-subtle fw-medium rounded-pill" onClick={Whitinkm}>Whitin 5km</button>
                                <button className="btn icon2 btn1 border-dark-subtle fw-medium rounded-pill" onClick={PureVeg}>PureVeg</button>
                                <button className="btn icon2 btn1 border-dark-subtle fw-medium rounded-pill" onClick={Booktable}>Book a table</button>
                                <button className="btn icon2 btn1 border-dark-subtle fw-medium rounded-pill" onClick={ServesAlcohol}>Serves Alcohol</button>
                            </div>
                        </Col>
                    </Row>


                    <Row className="py-2 mb-5 px-5 ">
                        {Data.map((item, index) => {
                            return (
                                <Col lg="4" sm="3" className="py-3 px-3 d-flex justify-content-center">
                                    <div key={index} className=" icon shadow-lg rounded" >
                                        <div>
                                            <Nav.Link as={Link} to={item.link} className="text-decoration-none" >
                                                <img src={item.img} alt="" className=" img-fluid rounded-top" style={{
                                                    width: "100%", objectFit: "cover"
                                                }} />
                                            </Nav.Link>
                                        </div>
                                        <div className="px-2 d-flex justify-content-between " style={{ fontWeight: "bold", }}>
                                            {item.HotalName}
                                            <div className=" d-flex align-items-center column-gap-1" >
                                                <FaStar style={{ color: "green" }} />
                                                {item.rating}
                                            </div>
                                        </div>
                                        <div className="px-2 py-2">
                                            <div className=" d-flex justify-content-between " style={{ fontSize: "12px" }}>
                                                <p className="my-1">{item.Address}</p>
                                                <p className="my-1"> ₹{item.price} for two</p>
                                            </div>
                                            <div className=" d-flex justify-content-between " style={{ fontSize: "12px" }}>
                                                <p >{item.offer}</p>
                                                <p> {item.distance}</p>
                                            </div>

                                            <div className="py-1 rounded text-white fw-bold d-flex justify-content-center align-items-center column-gap-2" style={{ backgroundColor: "rgb(27, 166, 114)" }}>
                                                <RiDiscountPercentFill className=" fs-5" /> {item.discount}
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                        }
                    </Row>
                </Container>


            </Container>
        </>
    );
};