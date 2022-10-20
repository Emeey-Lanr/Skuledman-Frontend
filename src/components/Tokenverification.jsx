import axios from "axios"
import { useEffect, useState } from "react"
import Logo from "../components/Logo"
import { useNavigate } from "react-router-dom"
const Tokenverification = () => {
    let navigate = useNavigate()
    const [forgotSomethingCheck, setforgotSomethingCheck] = useState(false)
    const [checkMessage, setcheckMessage] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [otp1, setotp1] = useState(-1)
    const [otp2, setotp2] = useState(-1)
    const [otp3, setotp3] = useState(-1)
    const [otp4, setotp4] = useState(-1)
    useEffect(() => {
        setUserEmail(localStorage.eduEmail)
    }, [])
    const [whenClicked, setwhenClicked] = useState(false)
    const otpEndPoint = "http://localhost:6463/school/otpVerification"
    const otpSchema = {
        otp: Number(String(otp1) + String(otp2) + String(otp3) + String(otp4)),
        jwtOtp: localStorage.pto,
        schoolEmail: localStorage.eduEmail
    }
    const verify = () => {
        setwhenClicked(true)
        axios.post(otpEndPoint, otpSchema).then((result) => {
            if (result.data.status) {
                navigate("/dashboard")
            } else {
                setwhenClicked(false)
                setforgotSomethingCheck(true)
                setcheckMessage(result.data.message)
            }

        })

    }

    //Incase a 
    const oTp1 = Math.floor(Math.random() * 9)
    const oTp2 = Math.floor(Math.random() * 9)
    const oTp3 = Math.floor(Math.random() * 9)
    const oTp4 = Math.floor(Math.random() * 9)
    const schoolSchema = {
        schoolEmail: localStorage.eduEmail,
        otp: Number(String(oTp1) + String(oTp2) + String(oTp3) + String(oTp4)),

    }

    const resendOtpEndPoint = "http://localhost:6463/school/resendOtp"
    const resendOtp = () => {
        setwhenClicked(true)
        axios.post(resendOtpEndPoint, schoolSchema).then((result) => {
            if (result.data.status) {
                setforgotSomethingCheck(true)
                setcheckMessage(result.data.message)
                setwhenClicked(false)
                localStorage.pto = result.data.pto
                localStorage.eduEmail = result.data.schoolEmail
            } else {
                setwhenClicked(false)
                setforgotSomethingCheck(true)
                setcheckMessage(result.data.message)
            }
        })

    }
    return (
        <div className="w-100 h-100 d-flex position-fixed justify-content-center align-items-center bg-light">
            <div className="token">
                {whenClicked && <div className="tokenMove mb-4"></div>}
                <div>
                    <Logo />
                </div>
                {!forgotSomethingCheck && <div>
                    <p style={{ textAlign: "center", color: "#ff6400", fontSize: "0.9rem" }}>An Otp code has been sent to {userEmail} and it expires in 1hrs</p>
                </div>}
                {
                    forgotSomethingCheck && <div className="form py-1 my-3 mx-auto" style={{ background: "#f7c9ab", width: "90%" }}>
                        <p className="text-center" style={{ color: "white" }}>{checkMessage}</p>
                    </div>
                }
                <div className="inputToken">
                    <input type="text" onChange={(e) => setotp1(e.target.value)} />
                    <input type="text" onChange={(e) => setotp2(e.target.value)} />
                    <input type="text" onChange={(e) => setotp3(e.target.value)} />
                    <input type="text" onChange={(e) => setotp4(e.target.value)} />
                </div>
                <div className="tokenBtn">
                    <button onClick={() => verify()}>Verify</button>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <p style={{ color: "#424242" }}>Didn't get an otp code ? <button onClick={() => resendOtp()} style={{ color: "#ff6400", border: "none", background: "none", borderBottom: "1px solid #ff6400" }}>Resend</button></p>
                </div>


            </div >

        </div >

    )
}

export default Tokenverification