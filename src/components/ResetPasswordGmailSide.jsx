import "../styles/login.css"
import Logo from "./Logo"
import { useState, useContext } from "react"
import { appContext } from "../App"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const ResetPasswordGmailSide = () => {
    let Navigate = useNavigate()
    const { schoolUrl } = useContext(appContext)
    const [otp1, setotp1] = useState(Math.floor(Math.random() * 9))
    const [otp2, setotp2] = useState(Math.floor(Math.random() * 9))
    const [otp3, setotp3] = useState(Math.floor(Math.random() * 9))
    const [otp4, setotp4] = useState(Math.floor(Math.random() * 9))
    const [otp5, setotp5] = useState(Math.floor(Math.random() * 9))
    const [otp6, setotp6] = useState(Math.floor(Math.random() * 9))
    const [userEmail, setuserEmail] = useState("")
    const [response, setResponse] = useState("")
    const [status, setStatus] = useState(false)

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const resetPassEndPoint = `${schoolUrl}/resetotp`
    const [m, setM] = useState(0)
    const sendOtp = () => {

        if (emailRegex.test(userEmail)) {
            setStatus(true)
            setM(2)
            setuserEmail("")
            setStatus(true)
            const resetSchema = {
                otp1: otp1,
                otp2: otp2,
                otp3: otp3,
                otp3: otp3,
                otp4: otp4,
                otp5: otp5,
                otp6: otp6,
                userEmail: userEmail,
            }
            console.log(resetSchema, Math.floor(Math.random() * 9))
            axios.post(resetPassEndPoint, resetSchema).then((result) => {
                if (result.data.status) {
                    localStorage.rst = result.data.otpCode
                    localStorage.resetEmail = result.data.userEmail
                    Navigate("/passwordotp")

                } else {
                    setResponse(result.data.message)
                    setM(0)
                    setStatus(false)
                }

            })

        } else {
            setResponse("Invalid Email Address")


        }

    }
    return (
        <div className="resetBackGmail bg-light">
            <div className="resetGmailEntering">
                {status && <div className="tokenMove mb-4"></div>}
                <div>
                    <Logo />
                </div>
                <div>
                    <p className="text-center">Enter your email address to reset pasword</p>
                    {response !== "" && <div className="response">
                        <p>{response}</p>
                    </div>}

                    <div>
                        <input type="text" onChange={(e) => setuserEmail(e.target.value)}></input>
                    </div>
                    <div>
                        <button disabled={m === 2} onClick={() => sendOtp()}>Proceed</button>
                    </div>

                </div>
            </div>

        </div>
    )

}

export default ResetPasswordGmailSide