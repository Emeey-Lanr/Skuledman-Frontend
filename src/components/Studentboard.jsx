import "../styles/studentboard.css"
import SideBar from "./SideBar"
import { Link } from "react-router-dom"
import { FaArrowLeft, FaPlus, FaSpinner } from "react-icons/fa"
import { AiOutlineMenu } from "react-icons/ai"
import photo1 from "../images/photo1.jpg"
import AddStudentModal from "./AddStudentModal"
import Background from "./Background"
import { createContext, useState, useContext, useEffect } from "react"
import { appContext, } from "../App"
import axios from "axios"
import DeactivateStudentModal from "./DeactivateStudentModal"
export const studentBoardContext = createContext(null)
const Studentboard = () => {
    const [studentModal, setStudentModal] = useState(false)
    const { showBack, setShowBack, setSidebarNone, viewStudentPersonalDetails, studentUrl, thelastRoute } = useContext(appContext)
    const setId = localStorage.setId.split(",")
    const [studentsFound, setStudentsFound] = useState([])
    const [statusMessage, setStatusMessage] = useState("")
    const showSidBar = () => {
        setSidebarNone("")
        setShowBack(true)

    }
    const getStudentEndPoint = `${studentUrl}/getStudent`
    const [spinStatus, setSpinStatus] = useState(false)
    const getStudent = () => {
        setSpinStatus(true)
        axios.get(getStudentEndPoint, {
            headers: {
                "Authorization": `${setId[3]},${setId[4]},${setId[2]},${setId[0]}`,
                "Content-Type": "apllication/json"
            }
        }).then((result) => {
            if (result.data.status) {
                setStudentsFound(result.data.result)
                setStatusMessage("")
                setSpinStatus(false)
            } else {
                setStatusMessage(result.data.message)
                setSpinStatus(false)
            }

        })
    }
    useEffect(() => {
        getStudent()

    }, [])

    const [deactivateStatus, setdeactivateStatus] = useState(false)
    const [studentId, setStudentId] = useState("")

    const deactivateStudent = (id) => {
        setdeactivateStatus(true)
        setStudentId(id)

    }
  

    return (
        <>
            <studentBoardContext.Provider value={{ studentModal, setStudentModal, getStudent, setdeactivateStatus, studentId }}>
                <div>
                    {showBack && <Background />}
                    <SideBar />
                    <div className="studentBoard bg-light">
                        <div>
                            <div className="w-75 pt-3 mx-auto d-flex justify-content-between">
                                <Link to={thelastRoute} className="link">
                                    <FaArrowLeft />
                                </Link>

                                <span className="outlineNone" onClick={() => showSidBar()}>
                                    <AiOutlineMenu />
                                </span>

                            </div>
                            <div className="w-75 my-4 mx-auto d-flex justify-content-between align-items-center py-2 searchInfo">

                                <div className="w-75 border border-1 border-radius-2">
                                    <input type="text" className="text" style={{ width: "100%", height: "33px" }} />
                                </div>
                                <div>
                                    <button className="btn" onClick={() => setStudentModal(true)}><FaPlus /> Add Student</button>
                                </div>

                            </div>
                            <div>
                                <p className="text-center fs-4" style={{ color: "#ff6400" }}><span>{setId[3]}</span>-<span>{setId[2]}</span></p>
                            </div>

                        </div>
                        {spinStatus && <div className="d-flex justify-content-center py-2">
                            <FaSpinner className="spin" />
                        </div>}
                        {statusMessage !== "" && < div className="w-75 py-2 mx-auto bg-light">
                            <p className="txet-center">{statusMessage}</p>
                        </div>}
                        <div className="rowStudentCard">
                            {studentsFound.map((student, id) => (
                                < div className="studentCard">

                                    <div className=" border-none">
                                        <div className="d-flex justify-content-center">
                                            <div style={{ width: "60px", hheadereight: "60px" }}>
                                                <img src={student.imgUrl === "" ? photo1 : student.imgUrl} alt="" style={{ width: "60px", height: "60px", objectFit: "cover" }} className="rounded-circle" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="studentInfo">
                                        <div>
                                            <span>FirstName</span>
                                            <p>{student.firstName}</p>
                                        </div>
                                        <div>
                                            <span>Surname</span>
                                            <p>{student.surName}</p>
                                        </div>
                                        <div>
                                            <span>MiddleName</span>
                                            <p>{student.middleName}</p>
                                        </div>
                                        <div>
                                            <span>UniqueId</span>
                                            <p>{student.schoolUniqueId}</p>
                                        </div>
                                        <div className="rowCardBtn">
                                            <button onClick={() => viewStudentPersonalDetails(student._id)}>View Profile</button>
                                            <button onClick={() => deactivateStudent(student._id)}>Deactivate</button>
                                        </div>
                                    </div>
                                </div>

                            ))}

                        </div>

                    </div>

                </div>

                {studentModal && <AddStudentModal />}
                {deactivateStatus && <DeactivateStudentModal />}

            </studentBoardContext.Provider>


        </>
    )
}

export default Studentboard