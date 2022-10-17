
import Logo from "./Logo"
import "../styles/login.css"
import { Link } from "react-router-dom"
const Register = () => {
    return (
        <div className="signup bg-light">
            <div className="signupForm">
                <div className="d-flex justify-content-center w-100">
                    <Logo />
                </div>;
                <div className="signupformInput w-100 px-3">
                    <div className="form">
                        <span>SCHOOL EMAIL</span>
                        <div>
                            <input type="text" />
                        </div>

                    </div>
                    <div className="form">
                        <span>SCHOOL NAME</span>
                        <div>
                            <input type="text" />
                        </div>

                    </div>
                    <div className="form">
                        <span>SCHOOL ADDRESS</span>
                        <div>
                            <input type="text" placeholder="Enter school addres" />
                        </div>

                    </div>
                    <div className="form">
                        <span>SCHOOL PHONENUMBER</span>
                        <div>
                            <input type="text" />
                        </div>

                    </div>
                    <div className="form">
                        <span>PASSWORD</span>
                        <div>
                            <input type="paswword" />
                        </div>

                    </div>

                </div>
                <div className="signupbtn">
                    <button>Signup</button>
                </div>
                <div className="d-flex justify-content-center align-items-center gotAnAccount">
                    <p>Got an account already?</p> <p><Link to="/signin" className="link">Login</Link></p>
                </div>


            </div>

        </div>
    )
}

export default Register