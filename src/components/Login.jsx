import Logo from "./Logo"
import "../styles/login.css"
import { FaLock } from "react-icons/fa"
import { GiMailbox } from "react-icons/gi"
import { Link } from "react-router-dom"
const Login = () => {
    return (
        <div className="bg-light signin">
            <div className="signin-form">
                <div className="d-flex justify-content-center">
                    <Logo />
                </div>
                <div className="message">
                    <p>Welcome, log in to continue</p>
                </div>
                <div className="inputform-box">
                    <span>School Email</span>
                    <div>
                        <span><GiMailbox style={{ color: "#ff6400" }} /></span>  <input type="text" />
                    </div>
                </div>
                <div className="inputform-box">
                    <span >Password</span>
                    <div>
                        <span className="border-right" ><FaLock style={{ color: "#ff6400" }} /></span>  <input type="password" />
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