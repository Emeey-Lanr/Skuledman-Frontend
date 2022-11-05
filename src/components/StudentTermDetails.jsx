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
import DeleteSubjectmodal from "./DeleteSubjectmodal"
export const studenTermDetailContext = createContext(null)
const StudenTermDetails = () => {
    const { studentUrl, setDeleteLogicNumb, delModalStatus, setDelModalStatus } = useContext(appContext)
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
                setFirstTerm(result.data.currentClassInfo.firstTermResult)
                setsecondTerm(result.data.currentClassInfo.secondTermResult)
                setThirdTerm(result.data.currentClassInfo.thirdTermResult)
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
        setDeleteLogicNumb(0)
        getCurrentUser()

    }, [])
    const uploadImgEndPoint = `${studentUrl}/uploadimg`

    const uploadImg = (e) => {

        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            axios.patch(uploadImgEndPoint, { imgUrl: reader.result, userId: userId }).then((result) => {
                if (result.data.status) {

                } else {

                }
            })
        }
    }
    const [detailsNumb, setDetailsNumb] = useState(-1)
    const saveChanges = () => {

    }
    const [first, setFirst] = useState(1)
    const [subjectCondition, setSubjectCondition] = useState(-1)
    const setSubjectCon = () => {
        setSubjectCondition(-1)
    }
    const firstTermBtn = () => {
        setFirst(1)
        setSubjectCon()
    }
    const secondTermBtn = () => {
        setFirst(2)
        setSubjectCon()
    }
    const thirdTermBtn = () => {
        setFirst(3)
        setSubjectCon()
    }
    const activateStatusEndPont = `${studentUrl}/activateStatus`
    const studentActivateStatus = {
        class: setId[3],
        studentId: userId,
        term: first
    }
    ///A fuction running for the style
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
    ///Adding subject
    const [subjectToBeAdded, setSubjectToBeAdded] = useState("")
    const addSubjectSchema = {
        class: setId[3],
        term: first,
        subjectName: subjectToBeAdded,
        studentId: userId,
    }
    const addSubjectEndPoint = `${studentUrl}/addSubject`
    const [updateMessage, setUpdateMessage] = useState("")
    const addSubject = () => {
        if (subjectToBeAdded === "") {
            setSubjectCondition(3)
            setUpdateMessage("Empty Input Fill Something")
        } else {
            setSubjectCondition(2)
            axios.patch(addSubjectEndPoint, addSubjectSchema).then((result) => {
                console.log(result + "yess")
                if (result.data.status) {
                    getCurrentUser()
                    setSubjectCondition(3)
                    setUpdateMessage(result.data.message)
                    setTimeout(() => {
                        setSubjectCondition(-1)
                        setUpdateMessage("")
                    }, 1500)
                } else {
                    setSubjectCondition(3)
                    setUpdateMessage(result.data.message)
                    setTimeout(() => {
                        setSubjectCondition(-1)
                        setUpdateMessage("")
                    }, 1500)

                }
            })
        }

    }

    ///Adding value to subject
    const [valueName, setValueName] = useState("")
    const [valuePoint, setValuePoint] = useState("")
    const addValueEndPoint = `${studentUrl}/addvaluetosubject`
    const addValueToSubject = (subject, id) => {
        console.log(subject, id)
        const addValueToSubjectSchema = {
            userInfo: addSubjectSchema,
            subject: subject,
            subjectInfo: {
                valueName: valueName,
                valuePoint: valuePoint
            }
        }
        axios.patch(addValueEndPoint, addValueToSubjectSchema).then((result) => {
            if (result.data.status) {
                getCurrentUser()
            }
        })

    }

    const [currentSubject, setCurrentSubject] = useState("")
    const [conditionalNumber, setConditionalNumber] = useState(0)
    const deleteSubject = (subject) => {
        setConditionalNumber(1)
        setDelModalStatus(0)
        setCurrentSubject(subject)
    }
    const [valuePointName, setValuePointName] = useState("")
    const [valuePointId, setValuePointId] = useState()
    const deletePoint = (valueName, id, subject) => {
        setConditionalNumber(2)
        setDelModalStatus(0)
        setValuePointName(valueName)
        setValuePointId(id)
        setCurrentSubject(subject)


    }
    return (
        <>
            <studenTermDetailContext.Provider value={{
                getCurrentUser,
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

                ///Adding subject
                setSubjectToBeAdded,
                addSubject,
                subjectCondition,
                updateMessage,
                ////subject added
                firstTerm,
                secondTerm,
                thirdTerm,
                ///Adding value to subject added
                addValueToSubject,
                setValueName,
                setValuePoint,
                //deletingSubject 
                deleteSubject,
                first,
                currentSubject,
                deletePoint,
                conditionalNumber,
                valuePointName,
                valuePointId


            }}>
                <div>

                    <SideBar />
                    <div className="term bg-light">
                        <div className="py-2 w-75 mx-auto">
                            <p></p>
                        </div>

                        <div className="w-75 mx-auto py-2 px-2" style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd", borderRadius: "30px, 30px, 0, 0" }}>
                            <div className="d-flex w-75 mx-auto py-3 align-items-end" >
                                <img src={photo1} alt="" style={{ width: "120px", height: "130px", objectFit: "cover" }} />
                                <label htmlFor="img">
                                    <FaCameraRetro />
                                    <input type="file" id="img" hidden onChange={(e) => uploadImg(e)} />
                                </label>
                            </div>
                            <div className="row justify-content-evenly">
                                <div className="col-lg-5 col-md-5 col-sm-12 mb-2 pb-2" style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd" }}>

                                    <label htmlFor="form-label">First Name</label>

                                    <div className="d-flex border-none-input" >
                                        <input onBlur={() => setDetailsNumb(-1)} disabled={detailsNumb !== 0} type="text" value={studentFirstName} onChange={(e) => setStudentFirstName(e.target.value)} />
                                        <button onClick={() => setDetailsNumb(0)} className="btn"><FaPen /></button>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-12 mb-2 pb-2" style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd" }}>
                                    <label htmlFor="form-label">Surname</label>
                                    <div className="d-flex border-none-input">
                                        <input disabled={detailsNumb !== 1} type="text" value={studentMiddleName} onChange={(e) => setStudentMiddleName(e.target.value)} />
                                        <button onClick={() => setDetailsNumb(1)} className="btn"><FaPen /></button>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-12 mb-2 pb-2" style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd" }}>
                                    <label htmlFor="form-label">Middle Name</label>
                                    <div className="d-flex border-none-input">
                                        <input type="text" disabled={detailsNumb !== 2} value={studentSurName} onChange={(e) => setStudentSurName(e.target.value)} />
                                        <button onClick={() => setDetailsNumb(2)} className="btn"><FaPen /></button>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-12 mb-2 pb-2" style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd" }}>
                                    <label htmlFor="form-label">Uniqued Id</label>
                                    <div className="d-flex border-none-input">
                                        <input type="text" disabled={true} />
                                        <button className="btn"><FaPen /></button>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-12 mb-2 pb-2" style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd" }}>
                                    <label htmlFor="form-label">Parent PhoneNumber</label>
                                    <div className="d-flex border-none-input">
                                        <input type="text" disabled={detailsNumb !== 3} />
                                        <button onClick={() => setDetailsNumb(3)} className="btn"><FaPen /> </button>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-12 mb-2" style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd" }}>
                                    <label htmlFor="form-label">Parent Gmail</label>
                                    <div className="d-flex border-none-input">
                                        <input type="text" />
                                        <button className="btn"><FaPen /> </button>
                                    </div>

                                </div>
                                <div>
                                    <button className="btn" onClick={() => saveChanges()} style={{ background: "#ff6400", color: "white" }}>Save Changes</button>
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
                    {delModalStatus === 0 && <DeleteSubjectmodal />}
                </div>

            </studenTermDetailContext.Provider>


        </>
    )
}

export default StudenTermDetails 