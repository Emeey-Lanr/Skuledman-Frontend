import { useContext, useState } from "react"
import { studentBoardContext } from "./Studentboard"
import { appContext } from "../App"
import { FaSpinner } from "react-icons/fa"
import axios from "axios"

const DeactivateStudentModal = () => {
    const studentClass = localStorage.setId.split(",")
    const { getStudent, setdeactivateStatus, studentId } = useContext(studentBoardContext)
    const { studentUrl } = useContext(appContext)
    const deactivateEndPoint = `${studentUrl}/deactivate`
    const deactivateSchema = {
        studentId: studentId,
        currentClass: studentClass[3]
    }
    const [spinnerStatus, setSpinnerStatus] = useState(false)
    const [message, setMessage] = useState("Are you sure ?")
    const doAfter = (n) => {
        setMessage(n)
        setTimeout(() => {
            setdeactivateStatus(false)
        }, 1500)
    }
    const deactivate = () => {
        setSpinnerStatus(true)
        axios.patch(deactivateEndPoint, deactivateSchema).then((result) => {
            if (result.data.status) {
                getStudent()
               doAfter(result.data.message)
            } else {
               doAfter(result.data.message)

            }

        })
    }
    return (
        <>
            <div className="w-100 h-100 position-fixed top-0" style={{ background: "#0000006b" }}>
                <div className="deactivateModal">
                    <p className="textCenter">{message}</p>
                    <div>
                        <button onClick={() => deactivate()}>Deactivate{spinnerStatus && <FaSpinner />}</button>
                        <button onClick={() => setdeactivateStatus(false)}>Cancel</button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default DeactivateStudentModal 
