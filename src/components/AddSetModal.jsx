import { useContext, useState } from "react"
import { appContext } from "../App"
import { FaTimes, FaSpinner } from "react-icons/fa"
import "../styles/modal.css"
import axios from "axios"
const AddSetModal = () => {
    const { addSetModal, setAddSetModal, schoolDetails, classType, getSchoolDetails } = useContext(appContext)
    const [messageInfo, setMessageInfo] = useState("")
    const [massageCondition, setMessageCondition] = useState(false)
    const [schoolSet, setSchoolSet] = useState("")
    const [whenClicked, setWhenClicked] = useState(false)
    const setSchema = {
        schoolId: schoolDetails._id,
        schoolEmail: schoolDetails.schoolEmail,
        class: classType,
        set: schoolSet,
        firstTerm: {
            schoolFees: "",
            ptaFees: "",
            totalPaid: "",
            totalOwned: "",
            bestStudent: "",
            worstStudent: "",
            totalNumberOfStudent: "",
            otherFee: []
        }
        ,
        secondTerm:
        {
            schoolFees: "",
            ptaFees: "",
            totalPaid: "",
            totalOwned: "",
            bestStudent: "",
            worstStudent: "",
            totalNumberOfStudent: "",
            otherFee: []
        },
        thirdTerm: {
            schoolFees: "",
            ptaFees: "",
            totalPaid: "",
            totalOwned: "",
            bestStudent: "",
            worstStudent: "",
            totalNumberOfStudent: "",
            otherFee: []
        },
        numberOFStudent: "",
        totalDebt: "",
        totalMoneyPaid: "",
    }


    const setEndPoint = "http://localhost:6463/set/newset"
    const closeModal = () => {
        setWhenClicked(false)
        setAddSetModal(false)
    }
    const close = () => {
        closeModal()
        setMessageInfo("")
    }
    const createSet = () => {
        if (schoolSet !== "") {
            setWhenClicked(true)
            axios.post(setEndPoint, setSchema).then((result) => {
                if (result.data.status) {
                    closeModal()
                    getSchoolDetails()
                    setMessageInfo(result.data.message)
                } else {
                    setMessageInfo(result.data.message)
                    setMessageCondition(true)
                    setWhenClicked(false)
                }

            })
        } else {
            setMessageInfo("Fill in input")
            setTimeout(() => {
                setMessageInfo("")
            }, 1500)

        }
    }

    return (
        <>
            {addSetModal && <div className='w-100 h-100 position-fixed top-0 align-items-center  d-flex justify-content-center' style={{ background: "#0000006b" }}>
                <div className='setdetails' style={{ overflowX: "hidden" }}>

                    <button className="btn" onClick={() => close()} > <FaTimes /> </button>
                    <div>
                        {massageCondition && <div className="w-75 mx-auto">{messageInfo}</div>}
                        <div className="w-75 mx-auto">
                            <label htmlFor="" className="form-label">Set</label>
                            <input type="text" className="form-control" onChange={(e) => setSchoolSet(e.target.value)} />
                        </div>
                        <div className="mt-4 w-75 mx-auto">
                            <button onClick={() => createSet()} className="btn btn-dark" style={{ width: "100%" }}>Create
                                {whenClicked && <FaSpinner className="spin" />}
                            </button>
                        </div>

                    </div>
                </div>
            </div>}

        </>

    )
}

export default AddSetModal