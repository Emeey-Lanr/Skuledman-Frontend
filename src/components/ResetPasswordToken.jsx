import Logo from "./Logo"
import { useEffect, useState, useRef, useContext } from "react"
import "../styles/login.css"
import axios from "axios"
import { appContext } from "../App"
import { useNavigate } from "react-router-dom"
const ResetPasswordToken = () => {
    let navigate = useNavigate()
    const { schoolUrl } = useContext(appContext)
    const [userEmail, setUserEmail] = useState("")
    useEffect(() => {
        setUserEmail(localStorage.resetEmail)
    }, [])
    let user = useRef()
    let tp1 = useRef()
    const [e, sete] = useState(false)
    const [forgotSomethingCheck, setForgotSomethingCheck] = useState(false)

    const [checkMessage, setCheckMessage] = useState("")
    const [otp1, setotp1] = useState("")
    const [otp2, setotp2] = useState("")
    const [otp3, setotp3] = useState("")
    const [otp4, setotp4] = useState("")
    const [otp5, setotp5] = useState("")
    const [otp6, setotp6] = useState("")
    const verifyOtpEndPoint = `${schoolUrl}/verifyresetotp`
    const [ifMoving, setIfMoving] = useState(false)
    const [d, setD] = useState(0)
    const verify = () => {
        if (otp1 === "" || otp2 === "" || otp3 === "" || otp4 === "" || otp5 === "" || otp6 === "") {
            setForgotSomethingCheck(true)
            setCheckMessage("Looks like you forgot something")
        } else {
            setD(1)
            setIfMoving(true)
            const verifySchema = {
                otp1: otp1,
                otp2: otp2,
                otp3: otp3,
                otp4: otp4,
                otp5: otp5,
                otp6: otp6,
                otp: localStorage.rst,
            }
            axios.post(verifyOtpEndPoint, verifySchema).then((result) => {
                if (result.data.status) {
                    navigate("/newpassword")
                } else {
                    setForgotSomethingCheck(true)
                    setCheckMessage(result.data.message)
                    setIfMoving(false)
                    setD(0)

                }
            })
        }

    }
    const resendOtp = () => {

    }


    return (
        <div className="w-100 h-100 d-flex position-fixed justify-content-center align-items-center bg-light">
            < div className="token" >
                {ifMoving && <div className="tokenMove mb-4"></div>}
                <div>
                    <Logo />
                </div>
                {
                    !forgotSomethingCheck && <div>
                        <p style={{ textAlign: "center", color: "#ff6400", fontSize: "0.9rem" }}>An Otp code has been sent to {userEmail} and it expires in 5hrs</p>
                    </div>
                }
                {
                    forgotSomethingCheck && <div className="form py-1 my-3 mx-auto" style={{ background: "#f7c9ab", width: "90%" }}>
                        <p className="text-center" style={{ color: "white" }}>{checkMessage}</p>
                    </div>
                }
                <div className="resetPasswordTokenInput">
                    <input type="text" onChange={(e) => setotp1(e.target.value)} />
                    <input type="text" onChange={(e) => setotp2(e.target.value)} />
                    <input type="text" onChange={(e) => setotp3(e.target.value)} />
                    <input type="text" onChange={(e) => setotp4(e.target.value)} />
                    <input type="text" onChange={(e) => setotp5(e.target.value)} />
                    <input type="text" onChange={(e) => setotp6(e.target.value)} />
                </div>
                <div className="tokenBtn">
                    <button disabled={d === 1} onClick={() => verify()}>Verify</button>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <p style={{ color: "#424242" }}>Didn't get an otp code ? <button onClick={() => resendOtp()} style={{ color: "#ff6400", border: "none", background: "none", borderBottom: "1px solid #ff6400" }}>Resend</button></p>
                </div>
            </div >
        </div>

    )
}

export default ResetPasswordToken