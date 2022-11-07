import { FaSpinner, FaTimes } from "react-icons/fa"
import { studenTermDetailContext } from './StudentTermDetails'
import { useContext, useState } from "react"
import { appContext } from "../App"
import axios from "axios"
const SchoolFeeModal = () => {
    const setId = localStorage.setId.split(",")
    const userId = localStorage.cs
    const { studentUrl } = useContext(appContext)
    const { getCurrentUser, first, setSchoolFeeModal, conditionalOperatorNumber, whatToAdd,
        firstTermSchoolFeesToBePaid,
        secondTermSchoolFeesToBePaid,
        thirdTermSchoolFeesToBePaid,
        firstTermSchoolFees,
        secondTermSchoolFees,
        thirdTermSchoolFees } = useContext(studenTermDetailContext)

    const [fee, setFee] = useState(0)
    const addSchoolFeeEndpoint = `${studentUrl}/addschoolfee`
    const feeSchema = {
        term: first,
        studentId: userId,
        class: setId[3],
        fee: fee,

    }
    const [spinStatus, setspinStatus] = useState(false)
    const [messageToBePassed, setMessageToBePassed] = useState("")
    const addSchoolFee = () => {
        let statusToCheckIfMoreMoneyIsAdded = false
        setspinStatus(true)
        if (first === 1) {
            const amountTOAdded = Number(fee) + Number(firstTermSchoolFees)
            console.log(amountTOAdded)
            if (amountTOAdded > firstTermSchoolFeesToBePaid && amountTOAdded !== firstTermSchoolFeesToBePaid) {
                statusToCheckIfMoreMoneyIsAdded = true


            }
        } else if (first === 2) {
            const amountTOAdded = Number(fee) + Number(secondTermSchoolFees)
            if (amountTOAdded > secondTermSchoolFeesToBePaid && amountTOAdded !== secondTermSchoolFeesToBePaid) {
                statusToCheckIfMoreMoneyIsAdded = true
            }
        } else if (first === 3) {
            const amountTOAdded = Number(fee) + Number(thirdTermSchoolFees)
            if (amountTOAdded > thirdTermSchoolFeesToBePaid && amountTOAdded !== thirdTermSchoolFeesToBePaid) {
                statusToCheckIfMoreMoneyIsAdded = true
            }
        }

        if (statusToCheckIfMoreMoneyIsAdded === true) {
            setMessageToBePassed("You can't add an amount greater then to money to be paid")
        } else {
            axios.patch(addSchoolFeeEndpoint, feeSchema).then((result) => {
                if (result.data.status) {
                    getCurrentUser()
                    setspinStatus(false)
                    setSchoolFeeModal(false)
                }
            })
        }

    }
    const addPtaFeeEndPoint = `${studentUrl}/addptafee`
    const ptaFee = () => {
        setspinStatus(true)
        axios.patch(addPtaFeeEndPoint, feeSchema).then((result) => {
            if (result.data.status) {
                getCurrentUser()
                setspinStatus(false)
                setSchoolFeeModal(false)
            }
        })
    }

    const addFee = () => {
        if (conditionalOperatorNumber === 0) {
            addSchoolFee()
        } else if (conditionalOperatorNumber === 1) {
            ptaFee()
        }

    }

    return (
        <>
            <div className="w-100 position-fixed top-0 h-100 d-flex justify-content-center align-items-center" style={{ background: "#0000006b" }} >
                <div className="schoolFeeModal py-4 px-2">
                    <button className="btn" onClick={() => setSchoolFeeModal(false)}>
                        <FaTimes />
                    </button>
                    <p className="text-center">{whatToAdd}</p>
                    {messageToBePassed !== "" && <div className="w-75 bg-light mx-auto">
                        <p>{messageToBePassed}</p>
                    </div>}
                    <input type="number" className="form-control" onChange={(e) => setFee(e.target.value)} />
                    <div className="d-flex justify-content-end">
                        <button onClick={() => addFee()} className="btn btn-dark my-3">
                            Add Fee {spinStatus && <FaSpinner className="spin" />}
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default SchoolFeeModal