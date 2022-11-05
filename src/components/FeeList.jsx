import "../styles/modal.css"
import { FaTimes, FaSpinner } from "react-icons/fa"
import { schoolSetDetailContext } from "./SetDetails"
import { useContext } from "react"
const FeeList = () => {
    const { setListModal, setListDescription, setListAmount, addList, inputMessage2, spinner2, setSpinner2, setInputMessage2 } = useContext(schoolSetDetailContext)
    const allNone = () => {
        setListModal(false)
        setSpinner2(false)
        setInputMessage2("")
    }

    return (
        <div className="w-100 d-flex justify-content-center align-items-center h-100 position-fixed top-0" style={{ background: "#0000006b" }}>
            <div className="setlistFee">
                <div>
                    <button onClick={() => allNone()} className="btn">
                        <FaTimes />
                    </button>
                </div>
                {inputMessage2 !== "" && <div className="w-75 mx-auto bg-light">
                    <p className="w-75 mx-auto text-center py-3">{inputMessage2}</p>
                </div>}
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
                        <button onClick={addList} className="btn w-75 text-light">
                            Add {spinner2 && <FaSpinner className="spin" />}
                        </button>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default FeeList