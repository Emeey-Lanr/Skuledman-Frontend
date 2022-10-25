import "../styles/studentboard.css"
import SideBar from "./SideBar"
import { Link } from "react-router-dom"
import { FaArrowLeft, FaPlus } from "react-icons/fa"
import { AiOutlineMenu } from "react-icons/ai"
import photo1 from "../images/photo1.jpg"
import AddStudentModal from "./AddStudentModal"
import Background from "./Background"
import { createContext, useState, useContext } from "react"
import { appContext } from "../App"
export const studentBoardContext = createContext(null)
const Studentboard = () => {
    const [studentModal, setStudentModal] = useState(false)
    const { showBack, setShowBack, setSidebarNone, viewStudentPersonalDetails } = useContext(appContext)
    const setId = localStorage.setId.split(",")
    const showSidBar = () => {
        setSidebarNone("")
        setShowBack(true)

    }
    return (
        <>
            <studentBoardContext.Provider value={{ studentModal, setStudentModal }}>
                <div>
                    {showBack && <Background />}
                    <SideBar />
                    <div className="studentBoard bg-light">
                        <div>
                            <div className="w-75 pt-3 mx-auto d-flex justify-content-between">
                                <Link to="/" className="link">
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
                        <div className="row w-75 mx-auto">
                            <div className="col-lg-4 col-md-5 col-sm-10 mb-5 studentCard">
                                <div className="d-flex justify-content-end">
                                    <button onClick={viewStudentPersonalDetails}>View Profile</button>
                                </div>
                                <div className=" border-none">
                                    <div className="d-flex justify-content-center">
                                        <div style={{ width: "60px", hheadereight: "60px" }}>
                                            <img src={photo1} alt="" style={{ width: "60px", height: "60px", objectFit: "cover" }} className="rounded-circle" />
                                        </div>
                                    </div>
                                </div>
                                <div className="studentInfo">
                                    <div>
                                        <span>FirstName</span>
                                        <p>Oyelowo</p>
                                    </div>
                                    <div>
                                        <span>Surname</span>
                                        <p>Emmanuel</p>
                                    </div>
                                    <div>
                                        <span>MiddleName</span><p></p>
                                    </div>
                                    <div>
                                        <span>UniqueId</span><p></p>
                                    </div>
                                    <div>
                                        <span>FirstTerm</span><p></p>
                                    </div>
                                    <div>
                                        <span>SecondTerm</span><p></p>
                                    </div>
                                    <div>
                                        <span>LastTerm</span><p></p>
                                    </div>
                                    <div>
                                        <span>Total Debt</span><p></p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                {studentModal && <AddStudentModal />}

            </studentBoardContext.Provider>


        </>
    )
}

export default Studentboard