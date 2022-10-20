import { useContext } from "react"
import { appContext } from "../App"
import { FaTimes } from "react-icons/fa"
import "../styles/modal.css"
const AddSetModal = () => {
    const { addSetModal, setAddSetModal } = useContext(appContext)
    return (
        <>
            {addSetModal && <div className='w-100 h-100 position-fixed top-0 align-items-center  d-flex justify-content-center' style={{ background: "#0000006b" }}>
                <div className='setdetails'>
                    <button className="btn" onClick={() => setAddSetModal(false)} style={{ color: "#ff6400" }}> <FaTimes /> </button>
                    <div>
                        <div className="w-75 mx-auto">
                            <label htmlFor="" className="form-label">Set</label>
                            <input type="text" className="form-control" />
                            <label htmlFor="" className="form-label">Class</label>
                            <input type="text" className="form-control" />

                        </div>
                        <div className="mt-4 w-75 mx-auto">
                            <button className="btn" style={{ background: "#ff6400", color: "white" }}>Create</button>
                        </div>


                    </div>
                </div>
            </div>}

        </>

    )
}

export default AddSetModal