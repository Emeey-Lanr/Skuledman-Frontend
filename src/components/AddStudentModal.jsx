import { studentBoardContext } from "./Studentboard"
import { useContext, useState } from "react"
import { FaTimes, FaSearch } from "react-icons/fa"
import mage from "../images/photo1.jpg"
const AddStudentModal = () => {
    const [userAlreadyExist, setUserAlreadyExist] = useState(false)
    const [userDoesntExist, setUserDoesntExist] = useState(true)
    const { studentModal, setStudentModal } = useContext(studentBoardContext)
    const getUser = () => {
        setUserDoesntExist(false)
        setUserAlreadyExist(true)
    }
    return (
        <>

            <div className="w-100 h-100 d-flex justify-content-center  align-items-center position-fixed top-0" style={{ background: "#0000006b" }} >
                <div className="addstudentModal">
                    <div>
                        <button className="btn" onClick={() => setStudentModal(false)}><FaTimes /></button>
                    </div>
                    <div className="d-flex justify-content-center">
                        <p className="fw-bold py-2">If user already exist in your space, you can just search user to the current set</p>
                    </div>
                    <div className="my-2">
                        <div className="form-control w-75 mx-auto d-flex">
                            <input type="text" className="form-control" />
                            <button onClick={() => getUser()} className="btn"><FaSearch /> </button>
                        </div>
                    </div>

                    {userDoesntExist && <>

                        <div className="d-flex justify-content-center align-items-center mx-auto" style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "100px", border: "1px solid #ff6400" }}>
                            <img src={mage} alt="" width="90px" height="90px" style={{ objectFit: "cover", borderRadius: "100px" }} />
                            <label htmlFor="m">
                                <input type="files" hidden id="m" />
                            </label>

                        </div>
                        <div className="w-75 mx-auto">
                            <label htmlFor="" className="form-label">First Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="w-75 mx-auto">
                            <label htmlFor="" className="form-label">Surname</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="w-75 mx-auto">
                            <label htmlFor="" className="form-label">Middle Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="d-flex justify-content-center w-75 my-3 mx-auto btn btn-dark">
                            <button className="btn text-light">Add</button>
                        </div>
                    </>}
                    {userAlreadyExist && <div className="w-75 h-75 mx-auto" style={{ overflowY: "scroll" }}>
                        <div className="form-control">
                            <img src={mage} alt="" width="40px" height="40px" style={{ borderRadius: "40px", objectFit: "cover" }} />
                            <p><span className="fw-bold"> First Name:</span><span></span>  </p>
                            <p><span className="fw-bold">Surname:</span><span></span>  </p>
                            <p><span className="fw-bold">Last Name:</span><span></span> </p>
                            <div className="w-100 d-flex justify-content-center btn btn-dark">
                                <button className="btn text-light">Add</button>
                            </div>
                        </div>
                    </div>}



                </div>
            </div>

        </>


    )

}

export default AddStudentModal