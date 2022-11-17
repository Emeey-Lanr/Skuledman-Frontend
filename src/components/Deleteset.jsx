import "../styles/modal.css"
import { useContext, useState } from "react"
import { appContext } from "../App"
import axios from "axios"
import { FaSpinner } from "react-icons/fa"
const Deleteset = () => {
    const { getSchoolDetails, setDeleteSetModal, deleteSetInfo, setUrl } = useContext(appContext)
    const deleteEndPoint = `${setUrl}/deleteset`
    const [spinStatus, setSpinStatus] = useState(false)
    const deleteSet = () => {
        setSpinStatus(true)
        axios.patch(deleteEndPoint, { info: deleteSetInfo }).then((result) => {
            if (result.data.status) {
                getSchoolDetails()
                setSpinStatus(false)
                setDeleteSetModal(false)
            } else {

            }

        })

    }
    return (
        <div className="deletesex">
            <div className="deletesexModal">
                <p>Are you sure you sure delete?</p>
                <div className="py-2 d-flex justify-content-end">
                    <button onClick={() => setDeleteSetModal(false)} className=" btn btn-light">Cancel</button><button onClick={() => deleteSet()} className="btn btn-dark">Delete {spinStatus && <FaSpinner className="spin" />}</button>
                </div>

            </div>

        </div>
    )
}

export default Deleteset