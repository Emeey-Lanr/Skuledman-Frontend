import Logo from "./Logo"
import "../styles/login.css"
import { FaLock } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { Link } from "react-router-dom"
const Login = () => {
    return (
        <div className="bg-light signin">
            <div className="signin-form">
                <div className="d-flex justify-content-center">
                    <Logo />
                </div>
                <div className="inputform-box">
                    <span>School Email</span>
                    <div>
                        <span>< AiOutlineMail /></span>  <input type="text" />
                    </div>
                </div>
                <div className="inputform-box">
                    <span>Password</span>
                    <div>
                        <span><FaLock /></span>  <input type="text" />
                    </div>
                </div>

                <div className="inputform-box">
                    <button>Login</button>
                </div>
                <div className="d-flex justify-content-center noacc">
                    <span>Don't have an account <Link to="/" className="link">Signup</Link></span>
                </div>


            </div>
        </div >
    )
}

export default Login