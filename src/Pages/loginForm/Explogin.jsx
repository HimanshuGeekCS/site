import { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import { useNavigate } from "react-router";

export const Explogin = () => {
    const [user, setuser] = useState(
        {
            Email: "", password: ""
        },
    );

    useEffect(() => {
        const savedData = localStorage.getItem("userFormData");
        if (savedData) {
            setuser(JSON.parse(savedData));
        }
    }, []);

    const change = (e) => {
        setuser((prev) =>({...prev, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        }));
    };

    const submit = (event) => {
        event.preventDefault();
        console.log(user);

        if (!user.Email || user.Email.trim() == "") {
            alert(" Email is required! ");
            return;
        }
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!pattern.test(user.Email)) {
            alert("Invalid email format!");
            return;
        }

        if (!user.password || user.password.trim() == "") {
            alert(" Password is required! ");
            return;
        }


        setuser({ Email: "", password: "" })
        localStorage.setItem("userFormData", JSON.stringify(user)); // Fixed formData -> user
    }
    const navigate = useNavigate();
    const go = ()=>{
        navigate("/");
    }
    return (
        <>
            <Container fluid>
                <Row className="">
                    <Col lg="6" className="log py-4">
                        <Row className=" text-center" >
                            <div className="p-5 text-white  text-center">
                                <Col lg="12">
                                    <h1>Your Finances <br /> in One Place</h1>
                                    <div>
                                        <img src="https://web.budgetbakers.com/a827649cc88d00d3b4d0f5bf0d1ac494.png" alt="" className=" img-fluid" />
                                    </div>
                                    <div style={{ width: "34rem" }}>
                                        <p style={{ fontSize: "18px" }}>Track your expenses, set monthly budgets  and <br /> enjoy automatic expense categorization for  <br /> smarter financial planning.</p>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                    </Col>
                    <Col lg="6" className="py-4">
                        <Row className="justify-content-center  py-5">
                            <Col lg="7">
                                <form onSubmit={submit}>
                                    <div class="mb-3 pt-3">
                                        <label class="form-label" style={{ fontSize: "28px", fontWeight: "500" }}>Log in</label><br />
                                        <label class="form-label">E-mail</label>
                                        <input type="email" class="form-control" id="Email" name="Email" value={user.Email} onChange={change} />
                                    </div>
                                    <div class="mb-3 pt-3">
                                        <label class="form-label">Password</label>
                                        <input type="password" class="form-control" id="password" name="password" value={user.password} onChange={change} />
                                    </div>

                                    <div className='py-3 d-flex justify-content-center'>
                                        <button type="submit" onClick={go} class="btn w-100 button1 text-white">Log In</button>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};