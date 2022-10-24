import "../styles/modal.css"
import { FaTimes } from "react-icons/fa"
import { setDetailContext } from "./SetDetails"
import { useContext } from "react"
const FeeList = () => {
    const { setListModal, setListDescription, setListAmount, addList } = useContext(setDetailContext)
    return (
        <div className="w-100 d-flex justify-content-center align-items-center h-100 position-fixed top-0" style={{ background: "#0000006b" }}>
            <div className="setlistFee">
                <div>
                    <button onClick={() => setListModal(false)} className="btn">
                        <FaTimes />
                    </button>
                </div>
                <div className="w-75 mx-auto">
                    <label htmlFor="" className="form-label my-3">Description</label>
                    <input type="text" className="form-control" onChange={(e) => setListDescription(e.target.value)} />
                </div>
                <div className="w-75 mx-auto">
                    <label htmlFor="" className="form-label my-3">Amount</label>
                    <input type="number" className="form-control" onChange={(e) => setListAmount(e.target.value)} />
                </div>
                <div className="d-flex justify-content-center">
                    <div className="w-75 my-5 mx-auto btn btn-dark">
                        <button onClick={() => addList()} className="btn  text-light">Add</button>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default FeeList