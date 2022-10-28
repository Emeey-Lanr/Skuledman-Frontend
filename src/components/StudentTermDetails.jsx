import SideBar from "./SideBar"
import "../styles/term.css"
import photo1 from "../images/photo1.jpg"
import { FaCameraRetro, FaPen, FaPlus, FaSearch } from "react-icons/fa"
import { AiOutlineMenu } from "react-icons/ai"
import { useEffect, useState, useContext, createContext } from "react"
import { Link } from "react-router-dom"
import StudentFirstTerm from "./StudentFirstTerm"
import StudentSecondTerm from "./StudentSecondTerm"
import StudentThirdTerm from "./StudentThirdTerm"
import axios from "axios"
import { appContext } from "../App"
import SchoolFeeModal from "./SchoolFeeModal"
export const studenTermDetailContext = createContext(null)
const StudenTermDetails = () => {
    const { studentUrl } = useContext(appContext)
    const [schoolFeeModal, setSchoolFeeModal] = useState(false)
    const setId = localStorage.setId.split(",")
    const userId = localStorage.cs
    const getStudentEndPoint = `${studentUrl}/currentStudent`
    const [studentFirstName, setStudentFirstName] = useState("")
    const [studentMiddleName, setStudentMiddleName] = useState("")
    const [studentSurName, setStudentSurName] = useState("")
    const [firstTerm, setFirstTerm] = useState([])
    const [secondTerm, setsecondTerm] = useState([])
    const [thirdTerm, setThirdTerm] = useState([])
    const [firstTermActivationMessage, setfirstTermActivationMessage] = useState("")
    const [firstTerMActivationStyle, setFirstTermActivtaionStyle] = useState("")
    const [secondTermActivationMessage, setsecondTermActivationMessage] = useState("")
    const [secondTerMActivationStyle, setsecondTermActivtaionStyle] = useState("")
    const [thirdTermActivationMessage, setthirdTermActivationMessage] = useState("")
    const [thirdTerMActivationStyle, setFthirdTermActivtaionStyle] = useState("")
    const getCurrentUser = () => {
        axios.get(getStudentEndPoint, {
            headers: {
                "Authorization": `${setId[0]},${userId},${setId[3]}`,
                "Content-Type": "application/json"

            }
        }).then((result) => {
            if (result.data.status) {
                console.log(result)
                setStudentFirstName(result.data.totalInfo.firstName)
                setStudentMiddleName(result.data.totalInfo.middleName)
                setStudentSurName(result.data.totalInfo.surName)
                if (result.data.currentClassInfo.firstTermStatus) {
                    setfirstTermActivationMessage("First-Term Activated")
                    setFirstTermActivtaionStyle("btn btn-success")
                } else {
                    setfirstTermActivationMessage("Activate First Term")
                    setFirstTermActivtaionStyle("btn btn-dark")
                }
                if (result.data.currentClassInfo.secondTermStatus) {
                    setsecondTermActivationMessage("Second-Term Activated")
                    setsecondTermActivtaionStyle("btn btn-success")
                } else {
                    setsecondTermActivationMessage("Activate Second Term")
                    setsecondTermActivtaionStyle("btn btn-dark")
                }
                if (result.data.currentClassInfo.thirdTermStatus) {
                    setthirdTermActivationMessage("Third-Term Activated")
                    setFthirdTermActivtaionStyle("btn btn-success")
                } else {
                    setthirdTermActivationMessage("Activate Third Term")
                    setFthirdTermActivtaionStyle("btn btn-dark")
                }


            }

        })
    }

    useEffect(() => {
        getCurrentUser()

    }, [])

    const [first, setFirst] = useState(1)
    const firstTermBtn = () => {
        setFirst(1)
    }
    const secondTermBtn = () => {
        setFirst(2)
    }
    const thirdTermBtn = () => {
        setFirst(3)

    }
    const activateStatusEndPont = `${studentUrl}/activateStatus`
    const studentActivateStatus = {
        class: setId[3],
        studentId: userId,
        term: first

    }
    const run = (n) => {
        if (first === 1) {
            setfirstTermActivationMessage(n)
        } else if (first === 2) {
            setfirstTermActivationMessage(n)
        } else if (first === 3) {
            setthirdTermActivationMessage(n)
        }
    }
    const activateSetStatus = () => {
        run("activating")

        axios.patch(activateStatusEndPont, studentActivateStatus).then((result) => {
            if (result.data.status) {
                getCurrentUser()
            } else {
                run("unable to activate")

            }

        })
    }
    const [subjectToBeAdded, setSubjectToBeAdded] = useState("")
    const addSubjectSchema = {
        class: setId[3],
        term: first,
        subjectName: subjectToBeAdded,
        studentId: userId,
    }
    const addSubjectEndPoint
    const addSubject = () => {
        axios.patch()

    }
    return (
        <>
            <studenTermDetailContext.Provider value={{
                first,
                activateSetStatus,
                setSchoolFeeModal,
                ///Term Activation
                firstTermActivationMessage,
                firstTerMActivationStyle,
                secondTermActivationMessage,
                secondTerMActivationStyle,
                thirdTermActivationMessage,
                thirdTerMActivationStyle,
                setSubjectToBeAdded,

            }}>
                <div>

                    <SideBar />
                    <div className="term bg-light">
                        <div className="py-2 w-75 mx-auto">
                            <p></p>
                        </div>

                        <div className="w-75 mx-auto">
                            <div className="d-flex align-items-end" >
                                <img src={photo1} alt="" style={{ width: "120px", height: "130px", objectFit: "cover" }} />
                                <button className="btn"> <FaCameraRetro /> </button>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 ">

                                    <label htmlFor="form-label">First Name</label>

                                    <div className="d-flex">
                                        <input type="text" value={studentFirstName} onChange={(e) => setStudentFirstName(e.target.value)} className="border-none-input" />
                                        <button className="btn"><FaPen /></button>
                                    </div>



                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                                    <label htmlFor="form-label">Surname</label>
                                    <div></div>
                                    <input type="text" value={studentMiddleName} onChange={(e) => setStudentMiddleName(e.target.value)} className="border-none-input" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                                    <label htmlFor="form-label">Middle Name</label>
                                    <div></div>
                                    <input type="text" value={studentSurName} onChange={(e) => setStudentSurName(e.target.value)} className="border-none-input" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                                    <label htmlFor="form-label">Uniqued Id</label>
                                    <div></div>
                                    <input type="text" className="border-none-input" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                                    <label htmlFor="form-label">Parent PhoneNumber</label>
                                    <input type="text" className="border-none-input" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                                    <label htmlFor="form-label">Parent Gmail</label>
                                    <input type="text" className="border-none-input" />
                                </div>
                                <div>
                                    <button className="btn " style={{ background: "#ff6400", color: "white" }}>Save Changes</button>
                                </div>

                            </div>
                            <div className="w-100 mx-auto mt-4 border-bottom">

                            </div>
                            <div>
                                <div className="termdescription">
                                    <button onClick={() => firstTermBtn()}>FirstTerm</button><button onClick={() => secondTermBtn()}>SecondTerm</button><button onClick={() => thirdTermBtn()}>ThirdTerm</button><button className="termdescriptionBtnNone">    <AiOutlineMenu /></button>
                                </div>
                            </div>
                            {first === 1 && <StudentFirstTerm />}
                            {first === 2 && <StudentSecondTerm />}
                            {first === 3 && <StudentThirdTerm />}

                        </div>

                    </div>
                    {schoolFeeModal && <SchoolFeeModal />}
                </div>

            </studenTermDetailContext.Provider>


        </>
    )
}

export default StudenTermDetails 