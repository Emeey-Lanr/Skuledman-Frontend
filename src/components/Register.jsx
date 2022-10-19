
import Logo from "./Logo"
import "../styles/login.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
const Register = () => {
    const [style, setStyle] = useState({
        border: "1px solid #ff0000"
    })
    const [beforeStyle, setBStyle] = useState({
        border: "1px solid #ddd4ce",
    })
    const [schoolEmail, setSchoolEmail] = useState("")
    const [mailCheckNumb, setMailCheckNumb] = useState(0)
    const [schoolName, setSchoolName] = useState("")
    const [schoolPhoneNumber, setSchoolPhoneNumber] = useState("")
    const [schoolAddress, setSchoolAddress] = useState("")
    const [schoolPassword, setSchoolPassword] = useState("")

    const MailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const [emailCheck, setEmailCheck] = useState(false)
    const [x, setx] = useState(0)
    const [s, sets] = useState(1)
    const checkMail = (e) => {
        if (MailRegex.test(e.target.value)) {
            console.log('yess')
            setSchoolEmail(e.target.value)
            setMailCheckNumb(0)
            setEmailCheck(false)
            setx(3)
        } else {
            setEmailCheck(true)
            setMailCheckNumb(3)
            setx(0)
        }
    }
    const [passCheck, setPassCheck] = useState(false)
    const [checkPassw, setCheckPass] = useState(0)

    const checkPass = (e) => {
        if (e.target.value.trim().length < 6) {
            setCheckPass(3)
            setPassCheck(true)

            sets(1)
        } else {
            setCheckPass(0)
            setPassCheck(false)
            setSchoolPassword(e.target.value)
            sets(3)
        }
    }
    const [forgotSomethingCheck, setforgotSomethingCheck] = useState(false)
    const [checkif, setif] = useState(!MailRegex.test(schoolEmail))
    const signUp = () => {
        if (

            schoolAddress === "" ||
            schoolName === "" ||
            schoolPhoneNumber === ""
        ) {
            console.log(1)
            setforgotSomethingCheck(true)
        } else {
            console.log(2)
            setforgotSomethingCheck(false)
            // axios.post().then((result) => {

            // })
        }
    }

    return (
        <div className="signup bg-light">
            <div className="signupForm">
                <div className="d-flex justify-content-center w-100">
                    <Logo />
                </div>
                <div className="signupformInput w-100 px-3">
                    {forgotSomethingCheck && <div className="form py-1" style={{ background: "#f7c9ab" }}>
                        <p className="text-center" style={{ color: "white" }}>Looks like you forgot something</p>
                    </div>}
                    <div className="form" >
                        <span>SCHOOL EMAIL</span>
                        <div style={mailCheckNumb !== 0 ? style : beforeStyle}>
                            <input type="text" onChange={(e) => checkMail(e)} />
                        </div>

                    </div>
                    {emailCheck && <p className="form" style={{ fontSize: "0.9rem", color: "#ff0000" }}>Invalid Email</p>}
                    <div className="form">
                        <span>SCHOOL NAME</span>
                        <div>
                            <input type="text" onChange={(e) => setSchoolName(e.target.value)} />
                        </div>

                    </div>
                    <div className="form">
                        <span>SCHOOL ADDRESS</span>
                        <div>
                            <input type="text" placeholder="Enter school addres" onChange={(e) => setSchoolAddress(e.target.value)} />
                        </div>

                    </div>
                    <div className="form">
                        <span>SCHOOL PHONENUMBER</span>
                        <div>
                            <input type="number" onChange={(e) => setSchoolPhoneNumber(e.target.value)} />
                        </div>

                    </div>
                    <div className="form">
                        <span>PASSWORD</span>
                        <div style={checkPassw === 3 ? style : beforeStyle}>
                            <input type="paswword" onChange={(e) => checkPass(e)} />
                        </div>

                    </div>
                    {passCheck && <p className="form" style={{ fontSize: "0.9rem", color: "#ff0000" }}>Password must be at least 6 characters</p>}

                </div>
                <div className="signupbtn">
                    <button disabled={x !== s} onClick={() => signUp()}>Signup</button>
                </div>
                <div className="d-flex justify-content-center align-items-center gotAnAccount">
                    <p>Got an account already?</p> <p><Link to="/signin" className="link">Login</Link></p>
                </div>


            </div>

        </div>
    )
}

export default Register