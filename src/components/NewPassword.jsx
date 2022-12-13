import "../styles/login.css"
import Logo from "./Logo"
import { useState, useContext } from "react"
import { appContext } from "../App"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const NewPassword = () => {
    let Navigate = useNavigate()
    const { schoolUrl } = useContext(appContext)
    const [m, setM] = useState(0)
    const [status, setStatus] = useState(false)
    const [response, setResponse] = useState("")
    const [pass, setPass] = useState("")
    const resetVerifyPassEndPoint = `${schoolUrl}/resetpassword`
    const verifyPass = () => {
        if (pass !== "") {
            setM(2)
            setStatus(true)
            axios.post(resetVerifyPassEndPoint, { newPassword: pass, otp: localStorage.rst }).then((result) => {
                if (result.data.status) {
                    Navigate("/signin")
                    localStorage.removeItem("rst")

                } else {
                    setResponse(result.data.message)
                    setM(0)
                }
            })
        } else {
            setResponse("looks like forgot something")
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
                    <p className="text-center">Enter Your New Password</p>
                    {response !== "" && <div className="response">
                        <p>{response}</p>
                    </div>}

                    <div>
                        <input type="text" onChange={(e) => setPass(e.target.value)}></input>
                    </div>
                    <div>
                        <button disabled={m === 2} onClick={() => verifyPass()}>Proceed</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default NewPassword