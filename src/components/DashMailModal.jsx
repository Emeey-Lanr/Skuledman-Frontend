import "../styles/modal.css"
import { FaTimes, FaSpinner } from "react-icons/fa"
import { dashboardContext } from "./Dashboard"
import { useContext, useState } from "react"
import axios from "axios"
import { appContext } from "../App"
const DashMailModal = () => {
    const { schoolCurrentId, schoolCurrentSet, setGeneralMailStatus } = useContext(dashboardContext)
    const { schoolUrl, lastestSet,
        schoolIdentification } = useContext(appContext)
    const [message, setMessage] = useState("")
    const [subject, setSubject] = useState("")
    const MailSchema = {
        subject: subject,
        message: message,
        lastestSet: lastestSet,
        schoolId: schoolIdentification,
    }
    const sendGeneralMailEndPoint = `${schoolUrl}/sendgeneralmail`
    const [errorMessage, setErrorMessage] = useState("")
    const [spinnerStatus, setSpinnerStatus] = useState(false)
    const sendGeneralMail = () => {
        if (message === "" || subject === "") {
            setErrorMessage("Looks like you forgot something")
            setTimeout(() => {
                setErrorMessage("")
            }, 1500)
        } else {
            setSpinnerStatus(true)
            axios.post(sendGeneralMailEndPoint, MailSchema).then((result) => {
                if (result.data.status) {
                    setErrorMessage(result.data.message)
                    setTimeout(() => {
                        setErrorMessage("")
                        setMessage("")
                        setSpinnerStatus(false)
                    }, 1500)
                } else {
                    setErrorMessage(result.data.message)
                    setTimeout(() => {
                        setErrorMessage("")
                        setMessage("")
                        setSpinnerStatus(false)
                    }, 1500)
                }

            })
        }

    }
    return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center position-fixed top-0" style={{ background: "#0000006b" }} >
            <div className="dashmail">
                <div>
                    <button onClick={() => setGeneralMailStatus(false)} className="btn">
                        <FaTimes />
                    </button>
                </div>
                <div className="dashmailSubject">
                    {errorMessage !== "" && <div className="bg-light py-2">
                        <p className="text-center">{errorMessage}</p>
                    </div>}
                    <p>Subject</p>
                    <textarea onChange={(e) => setSubject(e.target.value)}></textarea>
                </div>
                <div className="dashmailMessage">
                    <p>Message</p>
                    <textarea onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <div className="dashmailButton">
                    <button onClick={() => sendGeneralMail()}>Send  {spinnerStatus && <FaSpinner className="spin" />}</button>
                </div>
            </div>
        </div>
    )
}

export default DashMailModal