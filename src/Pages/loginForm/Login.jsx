import { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useNavigate } from "react-router";

import { ToastContainer, toast } from 'react-toastify';

export const Login = () => {

    const [UserInput, SetUserInput] = useState({ Email: "", Password: "" })

    // data is set in UserInput sate
    const UserInputChange = (e) => {
        SetUserInput((prev) => {
            return ({ ...prev, [e.target.name]: e.target.value })
        })
    };

   

    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        if (!UserInput.Email || UserInput.Email.trim === "") {
            toast.error("whitespace is Not required")
            return;
        }
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!pattern.test(UserInput.Email)) {
            toast.error("Email is required")
        }

        if (!UserInput.Password || UserInput.Password.trim === "") {
            toast.error("whitespace is Not required")
            return;
        }

        SetUserInput({ Email: "", Password: "" })
        localStorage.setItem('UserInput', JSON.stringify(UserInput));

        // when condition and data store in localStorage then it go on default page.
        navigate("/");
        
    };

    return (
        <>
            <Container fluid className="px-0">
                <Container className="">
                    <Row className=" justify-content-center">
                        <Col lg="6">
                            <form onSubmit={submit}>
                                <div class="mb-3 pt-3">
                                    <label class="form-label" style={{ fontSize: "28px", fontWeight: "500" }}>Log in</label><br />
                                    <label class="form-label">E-mail</label>
                                    <input type="email" class="form-control" id="Email" name="Email" value={UserInput.Email} onChange={UserInputChange} />
                                </div>
                                <div class="mb-3 pt-3">
                                    <label class="form-label">Password</label>
                                    <input type="Password" class="form-control" id="Password" name="Password" value={UserInput.Password} onChange={UserInputChange} />
                                </div>
                                <div class="mb-3 pt-3">
                                    <button type="submit"  className=" btn w-100 button1">Login</button>
                                </div>
                                <ToastContainer />
                            </form>

                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};