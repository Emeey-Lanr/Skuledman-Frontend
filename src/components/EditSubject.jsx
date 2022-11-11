import "../styles/modal.css"
import { FaTimes, FaSpinner } from "react-icons/fa"
import { studenTermDetailContext } from "./StudentTermDetails"
import { useContext, useState } from "react"
import { appContext } from "../App"
import axios from "axios"
const EditSubject = () => {
    const setId = localStorage.setId.split(",")
    const userId = localStorage.cs
    const { studentUrl } = useContext(appContext)
    const {
        getCurrentUser,
        first,
        setchangeSubject,
        formerSubject,
        parentChild, valueId } = useContext(studenTermDetailContext)
    const [newSubject, setNewSubject] = useState("")

    const editSubjectEndPoint = `${studentUrl}/editsubject`
    const editSubjectSchema = {
        studentId: userId,
        studentClass: setId[3],
        term: first,
        subject: formerSubject,
        newSubject: newSubject,
        id: valueId,

    }
    const [spinCondition, setSpinCondition] = useState(false)
    const editSubjectFunc = () => {
        setSpinCondition(true)
        console.log(editSubjectSchema)
        axios.patch(editSubjectEndPoint, editSubjectSchema).then((result) => {
            if (result.data.status) {
                console.log(result.data)
                getCurrentUser()
                setSpinCondition(false)
                setchangeSubject(false)
            }
        })

    }

    const editValueNameEndPoint = `${studentUrl}/editvaluePointName`
    const editValueNameFunc = () => {
        setSpinCondition(true)
        axios.patch(editValueNameEndPoint, editSubjectSchema).then((result) => {
            if (result.data.status) {
                getCurrentUser()
                setSpinCondition(false)
                setchangeSubject(false)
            }
        })

    }
    const saveChanges = () => {
        if (parentChild === 0) {
            editSubjectFunc()
        } else if (parentChild === 1) {
            editValueNameFunc()
        }

    }
    return (
        <div className="w-100 h-100 position-fixed top-0 d-flex justify-content-center align-items-center" style={{ background: "#0000006b" }}>
            <div className="editsubject">
                <div>
                    <button className="btn" onClick={() => setchangeSubject(false)}>
                        <FaTimes />
                    </button>
                </div>

                <p className="text-center">Edit Subject</p>
                <div className="w-75 mx-auto">
                    <input type="text" onChange={(e) => setNewSubject(e.target.value)} className="form-control w-100" />

                </div>
                <div className="w-75 py-3 mx-auto d-flex justify-center-end">
                    <button onClick={() => saveChanges()} className="btn btn-dark">Save Changes{spinCondition && <FaSpinner className="spin" />}</button>
                </div>

            </div>

        </div>

    )
}
export default EditSubject