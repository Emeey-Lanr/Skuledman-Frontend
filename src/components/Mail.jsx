import { useContext, useState } from "react"
import "../styles/modal.css"
import { appContext } from "../App"
import { FaTimes, FaSpinner } from "react-icons/fa"
import axios from "axios"
const Mail = () => {
    const [mailStatusMessage, setMailStatusMessage] = useState("")
    const { classType, setUrl, mailStatus, setMailStatus, mailInfo } = useContext(appContext)
    const setEndMailEndPoint = `${setUrl}/sendmail`
    const [message, setMessage] = useState("")
    const [subject, setSubject] = useState("")
    const [paddingBottom, setPaddingBottom] = useState("")
    const [spinning, setSpinning] = useState(false)
    const doAfter = (n) => {
        setMailStatusMessage(n)
        setTimeout(() => {
            setMailStatusMessage("")
            setSpinning(false)
            setMailStatus(false)
        }, 1500)

    }
    const sendmail = () => {
        setSpinning(true)
        axios.post(setEndMailEndPoint, { info: mailInfo, message: message, subject: subject, class: classType }).then((result) => {
            if (result.data.status) {
                console.log(result.data)
                doAfter(result.data.message)
                setPaddingBottom("20px")
            } else {

                doAfter(result.data.message)
                setPaddingBottom("20px")
            }

        })
    }
    return (
        <>
            <div className='w-100 h-100 position-fixed top-0 d-flex justify-content-center' style={{ background: "#0000006b", paddingBottom: paddingBottom }}>
                <div className='mail-modal'>
                    <div >
                        <button className="btn" onClick={() => setMailStatus(false)}>
                            <FaTimes />
                        </button>
                    </div>
                    {mailStatusMessage !== "" && <div className="w-75 mx-auto py-3 bg-light">
                        <p>{mailStatusMessage}</p>
                    </div>
                    }

                    <div className="w-75 mx-auto">
                        <label htmlFor="label-control">Subject</label>
                        <input onChange={(e) => setSubject(e.target.value)} type="text" className="label-form" />
                    </div>
                    <div className="w-75 mx-auto">
                        <p className="text-center">Type Your Message</p>
                    </div>
                    <div className="w-75 mx-auto">
                        <textarea onChange={(e) => setMessage(e.target.value)}>

                        </textarea>
                    </div>

                    <div className="mail-modal-btn w-75 mx-auto">
                        <button className="btn btn-dark" onClick={() => sendmail()}>Send {spinning && <FaSpinner />}</button>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Mail