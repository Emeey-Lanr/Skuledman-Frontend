
import Logo from "./Logo"
import "../styles/login.css"
import { Link, useNavigate } from "react-router-dom"
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
    const [mailMessage, setmailMessage] = useState("")
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
            setmailMessage("Invalid Email")
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
    const schoolSignupEndPoint = "http://localhost:6463/school/signup"
    const [forgotSomethingCheck, setforgotSomethingCheck] = useState(false)
    const [checkif, setif] = useState(!MailRegex.test(schoolEmail))
    const otp1 = Math.floor(Math.random() * 9)
    const otp2 = Math.floor(Math.random() * 9)
    const otp3 = Math.floor(Math.random() * 9)
    const otp4 = Math.floor(Math.random() * 9)
    const schoolSchema = {
        schoolEmail: schoolEmail,
        schoolName: schoolName,
        schoolAddress: schoolAddress,
        schoolPhoneNumber: schoolPhoneNumber,
        schoolPassword: schoolPassword,
        otp: Number(String(otp1) + String(otp2) + String(otp3) + String(otp4)),
        otpStatus: false,

    }

    let navigate = useNavigate()
    const [checkMessage, setcheckMessage] = useState("")
    const [whenClicked, setwhenClicked] = useState(false)
    const signUp = () => {
        setwhenClicked(true)
        if (
            schoolAddress === "" ||
            schoolName === "" ||
            schoolPhoneNumber === ""
        ) {
            console.log(1)
            setforgotSomethingCheck(true)
            setcheckMessage("Looks like you forgot something")
            setwhenClicked(false)
        } else {
            setwhenClicked(true)
            setforgotSomethingCheck(false)
            axios.post(schoolSignupEndPoint, schoolSchema).then((result) => {
                if (result.data.status) {
                    localStorage.pto = result.data.pto
                    localStorage.eduEmail = result.data.schoolEmail
                    navigate("/token")
                } else {
                    setforgotSomethingCheck(true)
                    setcheckMessage(result.data.message)
                    setwhenClicked(false)

                }


            })
        }
    }

    return (
        <div className="signup bg-light">
            <div className="signupForm">
                {whenClicked && <div className="tokenMove mb-4"></div>}
                <div className="d-flex justify-content-center w-100 pt-3">
                    <Logo />
                </div>
                <div className="signupformInput w-100 px-3">
                    {forgotSomethingCheck && <div className="form py-1" style={{ background: "#f7c9ab" }}>
                        <p className="text-center" style={{ color: "white" }}>{checkMessage}</p>
                    </div>}
                    <div className="form" >
                        <span>SCHOOL EMAIL</span>
                        <div style={mailCheckNumb !== 0 ? style : beforeStyle}>
                            <input type="text" onChange={(e) => checkMail(e)} />
                        </div>

                    </div>
                    {emailCheck && <p className="form" style={{ fontSize: "0.9rem", color: "#ff0000" }}>{mailMessage}</p>}
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