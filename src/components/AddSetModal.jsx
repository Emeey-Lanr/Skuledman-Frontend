import { useContext, useState } from "react"
import { appContext } from "../App"
import { FaTimes } from "react-icons/fa"
import "../styles/modal.css"
import axios from "axios"
const AddSetModal = () => {
    const { addSetModal, setAddSetModal, schoolDetails, classType, getSchoolDetails } = useContext(appContext)
    const [schoolSet, setSchoolSet] = useState("")
    const [whenClicked, setWhenClicked] = useState(false)
    const setSchema = {
        schoolId: schoolDetails._id,
        schoolEmail: schoolDetails.schoolEmail,
        class: classType,
        set: schoolSet,
        firstTerm: [],
        secondTerm: [],
        thirdTerm: [],
        numberOFStudent: "",
        totalDebt: "",
        totalMoneyPaid: "",
    }
    const setEndPoint = "http://localhost:6463/set/newset"
    const createSet = () => {
        setWhenClicked(true)
        axios.post(setEndPoint, setSchema).then((result) => {
            if (result.data.status) {
                setWhenClicked(false)
                setAddSetModal(false)
                getSchoolDetails()
            } else {

            }

        })
    }

    return (
        <>
            {addSetModal && <div className='w-100 h-100 position-fixed top-0 align-items-center  d-flex justify-content-center' style={{ background: "#0000006b" }}>
                <div className='setdetails' style={{ overflowX: "hidden" }}>
                    {whenClicked && <div className="tokenMove mb-4"></div>}
                    <button className="btn" onClick={() => setAddSetModal(false)} style={{ color: "#ff6400" }}> <FaTimes /> </button>
                    <div>
                        <div className="w-75 mx-auto">
                            <label htmlFor="" className="form-label">Set</label>
                            <input type="text" className="form-control" onChange={(e) => setSchoolSet(e.target.value)} />
                        </div>
                        <div className="mt-4 w-75 mx-auto">
                            <button onClick={() => createSet()} className="btn" style={{ background: "#ff6400", color: "white" }}>Create</button>
                        </div>

                    </div>
                </div>
            </div>}

        </>

    )
}

export default AddSetModal