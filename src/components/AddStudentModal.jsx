import { studentBoardContext } from "./Studentboard"
import { useContext } from "react"
import { FaTimes } from "react-icons/fa"
const AddStudentModal = () => {
    const { studentModal, setStudentModal } = useContext(studentBoardContext)
    return (
        <>

            <div className="w-100 h-100 d-flex justify-content-center align-items-center position-fixed top-0" style={{ background: "#0000006b" }} >
                <div className="addstudentModal">
                    <div>
                        <button className="btn" onClick={() => setStudentModal(false)}><FaTimes /></button>
                    </div>
                    <div className="d-flex justify-content-center" style={{ border: "2px solid #645fff" }}>
                        <img src="" alt="" width="100px" height="100px" style={{ objectFit: "cover", borderRadius: "100px" }} />
                        <label htmlFor="m">
                            <input type="text" hidden id="m" />
                        </label>

                    </div>

                </div>
            </div>

        </>


    )

}

export default AddStudentModal