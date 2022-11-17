import "../styles/modal.css"
import { FaTrashAlt, FaSpinner } from "react-icons/fa"
import { appContext } from "../App"
import { useContext, useState } from "react"
import { schoolSetDetailContext } from "./SetDetails"
import axios from "axios"
const DeletePriceModal = () => {
    const {
        setUrl,
        deleteLogicNumber,
        setDelModalStatus

    } = useContext(appContext)
    ///Price list creation delete
    const [spinnerStatus, setSpinnerStatus] = useState(false)
    const deletePriceListEndPoint = `${setUrl}/deletePriceList`
    const { getSetInfo, schoolSetId, currentTerm, listDescriptionName } = useContext(schoolSetDetailContext)
    const delPriceListSet = () => {

        const delPriceListSchema = {
            setId: schoolSetId,
            term: currentTerm,
            priceListName: listDescriptionName,
        }
        axios.patch(deletePriceListEndPoint, delPriceListSchema).then((result) => {
            if (result.data.status) {
                getSetInfo()
            } else {

            }
        })

    }
    const deleteIt = () => {
        delPriceListSet()
    }
    return (
        <div className="w-100 h-100 position-fixed top-0 d-flex justify-content-center align-items-center" style={{ background: "#0000006b" }} >
            <div className="bg-white py-2 delsubjectmodal px-3">
                <div className="d-flex justify-content-center align-items-center">
                    <p>Are you sure you want to delete</p><p className="delmodaltrash px-2"><FaTrashAlt /></p>
                </div>
                <div className="d-flex justify-content-end align-items-center py-1">
                    <button className="btn btn-light mx-1" onClick={() => setDelModalStatus(-1)}>Cancel</button>
                    <button className="btn btn-dark mx-1" onClick={() => deleteIt()}>Delete {spinnerStatus && <FaSpinner className="spin" />} </button>
                </div>
            </div>

        </div>
    )
}

export default DeletePriceModal