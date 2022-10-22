import Logo from "./Logo"
import "../styles/login.css"
import { FaLock } from "react-icons/fa"
import { GiMailbox } from "react-icons/gi"
import { Link, useNavigate } from "react-router-dom"
import { useState, useContext, useEffect } from "react"
import axios from "axios"
import { appContext } from "../App"
const Login = () => {
    const { yes } = useContext(appContext)
    useEffect(() => {
        yes()
    }, [])
    const [whenClicked, setWhenClicked] = useState(false)
    const [forgotSomethingCheck, setforgotSomethingCheck] = useState(false)
    const [checkMessage, setCheckMessage] = useState("")
    const [schoolEmail, setSchoolEmail] = useState("")
    const [schoolPass, setSchoolPass] = useState()


    const loginEndPoint = "http://localhost:6463/school/signin"
    const otp1 = Math.floor(Math.random() * 9)
    const otp2 = Math.floor(Math.random() * 9)
    const otp3 = Math.floor(Math.random() * 9)
    const otp4 = Math.floor(Math.random() * 9)

    const signUpSchema = {
        schoolEmail: schoolEmail,
        schoolPass: schoolPass,
        otp: Number(String(otp1) + String(otp2) + String(otp3) + String(otp4)),
    }
    const navigate = useNavigate()
    const Login = () => {
        setWhenClicked(true)
        if (schoolEmail === "" || schoolPass === "") {
            setforgotSomethingCheck(true)
            setWhenClicked(false)
            setCheckMessage("Missing details, fill it")
        } else {
            axios.post(loginEndPoint, signUpSchema).then((result) => {
                if (result.data.status) {
                    localStorage.eduManToken = result.data.userToken
                    navigate("/dashboard")
                } else {
                    setforgotSomethingCheck(true)
                    setWhenClicked(false)
                    setCheckMessage(result.data.message)
                }
                if (result.data.mailStatus) {
                    localStorage.pto = result.data.pto
                    localStorage.eduEmail = result.data.schoolEmail
                    navigate("/token")
                }

            })
        }

    }
    return (
        <div className="bg-light signin">
            <div className="signin-form">
                {whenClicked && <div className="tokenMove mb-4"></div>}
                <div className="d-flex justify-content-center">
                    <Logo />
                </div>
                {forgotSomethingCheck && <div className="form py-1" style={{ background: "#f7c9ab" }}>
                    <p className="text-center" style={{ color: "white" }}>{checkMessage}</p>
                </div>}
                <div className="message">
                    <p>Welcome, log in to continue</p>
                </div>
                <div className="inputform-box">
                    <span>School Email</span>
                    <div>
                        <span><GiMailbox style={{ color: "#ff6400" }} /></span>  <input type="text" onChange={(e) => setSchoolEmail(e.target.value)} />
                    </div>
                </div>
                <div className="inputform-box">
                    <span >Password</span>
                    <div>
                        <span className="border-right" ><FaLock style={{ color: "#ff6400" }} /></span>  <input type="password" onChange={(e) => setSchoolPass(e.target.value)} />
                    </div>
                </div>

                <div className="inputform-box">
                    <button onClick={() => Login()}>Login</button>
                </div>
                <div className="d-flex justify-content-center noacc">
                    <span>Don't have an account <Link to="/signup" className="link">Signup</Link></span>
                </div>


            </div>
        </div >
    )
}

export default Login