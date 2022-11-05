import "../styles/modal.css"
import { FaTrashAlt, FaSpinner } from "react-icons/fa"
import { appContext } from "../App"
import { useContext, useState } from "react"
import { studenTermDetailContext } from "./StudentTermDetails"
import axios from "axios"

const DeleteSubjectmodal = () => {
    const setId = localStorage.setId.split(",")
    const userId = localStorage.cs
    const {
        setUrl,
        studentUrl,
        deleteLogicNumber,
        setDelModalStatus

    } = useContext(appContext)
    ///price list context


    ////Subject del content
    const [spinnerStatus, setSpinnerStatus] = useState(false)
    const { getCurrentUser, first, currentSubject, conditionalNumber, valuePointName,
        valuePointId
    } = useContext(studenTermDetailContext)
    const subjectDeleteUrlPoint = `${studentUrl}/deleteSubject`
    const subDeleteFunction = () => {
        setSpinnerStatus(true)
        const subjectDeleteSchema = {
            studentId: userId,
            term: first,
            studentCurrentClass: setId[3],
            currentSubject: currentSubject,
        }
        axios.patch(subjectDeleteUrlPoint, subjectDeleteSchema).then((result) => {
            if (result.data.status) {
                getCurrentUser()
                setSpinnerStatus(false)
                setDelModalStatus(-1)
            } else {
                setSpinnerStatus(false)
                setDelModalStatus(-1)
            }
        })
    }
    const deletevaluePoint = `${studentUrl}/deleteValuePoint`
    const deletePointSchema = {
        valuePointId: valuePointId,
        studentId: userId,
        valuePointName: valuePointName,
        currentClass: setId[3],
        currentSubject: currentSubject,
        term: first,
    }
    const deleteValuePoint = () => {
        setSpinnerStatus(false)
        axios.patch(deletevaluePoint, deletePointSchema).then((result) => {
            if (result.data.status) {
                getCurrentUser()
                setSpinnerStatus(false)
                setDelModalStatus(-1)
            } else {
                setSpinnerStatus(false)
                setDelModalStatus(-1)
            }

        })
    }
    const deleteIt = () => {
        if (conditionalNumber === 1) {
            subDeleteFunction()
        } else if (conditionalNumber === 2) {
            deleteValuePoint()
        }

    }
    return (
        <div className="w-100 h-100 position-fixed top-0 d-flex justify-content-center align-items-center" style={{ background: "#0000006b" }} >
            <div className="bg-white py-2 delsubjectmodal px-3">
                <div className="d-flex justify-content-center align-items-center">
                    <p>Are yo sure you want to delete</p><p className="delmodaltrash px-2"><FaTrashAlt /></p>
                </div>
                <div className="d-flex justify-content-end align-items-center py-1">
                    <button className="btn btn-light mx-1" onClick={() => setDelModalStatus(-1)}>Cancel</button>
                    <button className="btn btn-dark mx-1" onClick={() => deleteIt()}>Delete {spinnerStatus && <FaSpinner className="spin" />}</button>
                </div>
            </div>

        </div>
    )
}

export default DeleteSubjectmodal