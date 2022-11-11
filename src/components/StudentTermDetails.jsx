import SideBar from "./SideBar"
import "../styles/term.css"
import photo1 from "../images/photo1.jpg"
import { FaCameraRetro, FaPen, FaPlus, FaSearch, FaSpinner } from "react-icons/fa"
import { AiOutlineMenu } from "react-icons/ai"
import { useEffect, useState, useContext, createContext, useRef } from "react"
import { Link } from "react-router-dom"
import StudentFirstTerm from "./StudentFirstTerm"
import StudentSecondTerm from "./StudentSecondTerm"
import StudentThirdTerm from "./StudentThirdTerm"
import axios from "axios"
import { appContext } from "../App"
import SchoolFeeModal from "./SchoolFeeModal"
import DeleteSubjectmodal from "./DeleteSubjectmodal"
import Background from "./Background"
import EditSubject from "./EditSubject"
export const studenTermDetailContext = createContext(null)

const StudenTermDetails = () => {
    ///Making input empty
    const empty = useRef()
    const { showSideBar, showBack, studentUrl, setDeleteLogicNumb, delModalStatus, setDelModalStatus } = useContext(appContext)
    const [schoolFeeModal, setSchoolFeeModal] = useState(false)
    const setId = localStorage.setId.split(",")
    const userId = localStorage.cs
    const getStudentEndPoint = `${studentUrl}/currentStudent`
    const [studentImgUrl, setStudentImgUrl] = useState("")
    const [studentFirstName, setStudentFirstName] = useState("")
    const [studentMiddleName, setStudentMiddleName] = useState("")
    const [studentSurName, setStudentSurName] = useState("")
    const [studentId, setStudentId] = useState("")
    const [parentGmail, setParentGmail] = useState("")
    const [parentPhoneNumber, setParentPhoneNumber] = useState("")
    const [firstTerm, setFirstTerm] = useState([])
    const [secondTerm, setsecondTerm] = useState([])
    const [thirdTerm, setThirdTerm] = useState([])
    const [firstTerm2, setFirstTerm2] = useState([])
    const [secondTerm2, setSecondTerm2] = useState([])
    const [thirdTerm2, setThirdTerm2] = useState([])
    ///Amount to be paid
    const [firstTermSchoolFeesToBePaid, setfirstTermSchoolFeesToBePaid] = useState("")
    const [secondTermSchoolFeesToBePaid, setsecondTermSchoolFeesToBePaid] = useState("")
    const [thirdTermSchoolFeesToBePaid, setthirdTermSchoolFeesToBePaid] = useState("")

    const [firstTermPtaFeesToBePaid, setfirstTermPtaFeesToBePaid] = useState("")
    const [secondTermPtaFeesToBePaid, setsecondTermPtaFeesToBePaid] = useState("")
    const [thirdTermPtaFeesToBePaid, setthirdTermPtaFeesToBePaid] = useState("")


    //student Payment
    const [firstTermSchoolFees, setfirstTermSchoolFees] = useState("")
    const [secondTermSchoolFees, setsecondTermSchoolFees] = useState("")
    const [thirdTermSchoolFees, setThirdSchoolFees] = useState("")
    const [firstTermPtaFees, setfirstTermPtaFees] = useState("")
    const [secondTermPtaFees, setsecondTermPtaFees] = useState("")
    const [thirdTermPtaFees, setThirdPtaFees] = useState("")

    const [firstTermActivationMessage, setfirstTermActivationMessage] = useState("")
    const [firstTerMActivationStyle, setFirstTermActivtaionStyle] = useState("")
    const [secondTermActivationMessage, setsecondTermActivationMessage] = useState("")
    const [secondTerMActivationStyle, setsecondTermActivtaionStyle] = useState("")
    const [thirdTermActivationMessage, setthirdTermActivationMessage] = useState("")
    const [thirdTerMActivationStyle, setFthirdTermActivtaionStyle] = useState("")

    ///Status for the term
    const [firstermStatusForDebt, setFirstTermStatusForDebt] = useState(false)
    const [secondTermStatusForDebt, setSecondTermStatusForDebt] = useState(false)
    const [thirdTermStatusForDebt, setThirdTermStatusForDebt] = useState(false)
    const getCurrentUser = () => {
        axios.get(getStudentEndPoint, {
            headers: {
                "Authorization": `${setId[0]},${userId},${setId[3]}`,
                "Content-Type": "application/json"

            }
        }).then((result) => {
            if (result.data.status) {
                console.log(result)
                setStudentImgUrl(result.data.totalInfo.imgUrl)
                setStudentFirstName(result.data.totalInfo.firstName)
                setStudentMiddleName(result.data.totalInfo.middleName)
                setStudentSurName(result.data.totalInfo.surName)
                setStudentId(result.data.totalInfo.schoolUniqueId)
                setParentGmail(result.data.totalInfo.parentGmail)
                setParentPhoneNumber(result.data.totalInfo.parentPhoneNumber)
                //Result
                setFirstTerm(result.data.currentClassInfo.firstTermResult.reverse())
                setsecondTerm(result.data.currentClassInfo.secondTermResult.reverse())
                setThirdTerm(result.data.currentClassInfo.thirdTermResult.reverse())
                //for search
                setFirstTerm2(result.data.currentClassInfo.firstTermResult.reverse())
                setSecondTerm2(result.data.currentClassInfo.secondTermResult.reverse())
                setThirdTerm2(result.data.currentClassInfo.thirdTermResult.reverse())
                ///Amount to be paid
                //school
                setfirstTermSchoolFeesToBePaid(result.data.setfirstTermSchoolFees)
                setsecondTermSchoolFeesToBePaid(result.data.setSecondTermSchoolFees)
                setthirdTermSchoolFeesToBePaid(result.data.setThirdTermSchoolFees)

                //pta
                setfirstTermPtaFeesToBePaid(result.data.setFirstTermPtaFee)
                setsecondTermPtaFeesToBePaid(result.data.setSecondTermPtaFee)
                setthirdTermPtaFeesToBePaid(result.data.setThirdTermPtaFee)

                /////Student Payment
                ///School Fees
                setfirstTermSchoolFees(result.data.currentClassInfo.firstTermSchoolFees)
                setsecondTermSchoolFees(result.data.currentClassInfo.secondTermSchoolFees)
                setThirdSchoolFees(result.data.currentClassInfo.thirdTermSchoolFees)

                ///Pta Fee
                setfirstTermPtaFees(result.data.currentClassInfo.firstTermPtaFees)
                setsecondTermPtaFees(result.data.currentClassInfo.secondTermPtaFees)
                setThirdPtaFees(result.data.currentClassInfo.thirdTermPtaFees)

                ///Status ForDebt
                setFirstTermStatusForDebt(result.data.currentClassInfo.firstTermStatus)
                setSecondTermStatusForDebt(result.data.currentClassInfo.secondTermStatus)
                setThirdTermStatusForDebt(result.data.currentClassInfo.thirdTermStatus)

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
    const [spinStyle, setSpinStyle] = useState("")
    const uploadImg = (e) => {

        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {

            setSpinStyle("spin")
            axios.patch(uploadImgEndPoint, { imgUrl: reader.result, userId: userId }).then((result) => {
                if (result.data.status) {
                    console.log(result.data)
                    getCurrentUser()
                    setSpinStyle("")
                } else {

                }
            })
        }
    }
    const [detailsNumb, setDetailsNumb] = useState(-1)

    ///Svae changes
    const [saveChangesStatusSpin, setsaveChangesStatusSpin] = useState(false)
    const [changesMessage, setchangesMessage] = useState("")
    const saveChangesEndPoint = `${studentUrl}/savechanges`
    const saveChangesSchema = {
        studentId: userId,
        firstName: studentFirstName,
        middleName: studentMiddleName,
        surName: studentSurName,
        parentGmail: parentGmail,
        parentPhoneNumber: parentPhoneNumber,

    }
    const parentGmailRegex = /^[\w]+\@[\w]{5,7}\.[\w]{3,6}$/
    const saveChanges = () => {
        if (parentGmailRegex.test(parentGmail)) {
            setsaveChangesStatusSpin(true)
            axios.patch(saveChangesEndPoint, saveChangesSchema).then((result) => {
                if (result.data.status) {
                    getCurrentUser()
                    setchangesMessage(result.data.message)
                    setTimeout(() => {
                        setchangesMessage("")
                        setsaveChangesStatusSpin(false)
                    }, 1500)
                } else {
                    setchangesMessage(result.data.message)
                    setTimeout(() => {
                        setchangesMessage("")
                        setsaveChangesStatusSpin(false)
                    }, 1500)
                }
            })
        } else {
            setchangesMessage("Invalid Email")
            setTimeout(() => {
                setchangesMessage("")
            }, 1500)
        }

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
    const [conditionalOperatorNumber, setConditionalOperatorNumber] = useState(-1)
    const [whatToAdd, setWhatToAdd] = useState("")
    const openModalForSchoolFee = () => {
        setSchoolFeeModal(true)
        setConditionalOperatorNumber(0)
        setWhatToAdd("Add Student School Fee")
    }
    const openModalForPtaFee = () => {
        setSchoolFeeModal(true)
        setConditionalOperatorNumber(1)
        setWhatToAdd("Add Student Pta Fee")
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
                        empty.value = ""
                    }, 1500)
                } else {
                    setSubjectCondition(3)
                    setUpdateMessage(result.data.message)
                    setTimeout(() => {
                        setSubjectCondition(-1)
                        setUpdateMessage("")
                        empty.value = ""
                    }, 1500)

                }
            })
        }

    }

    ///Adding value to subject
    const [addValueSpinner, setaddValueSpinner] = useState(-1)
    const [valueName, setValueName] = useState("")
    const [valuePoint, setValuePoint] = useState("")
    const addValueEndPoint = `${studentUrl}/addvaluetosubject`
    const addValueToSubject = (subject, id) => {
        setaddValueSpinner(id + first)
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
                setaddValueSpinner(-1)
                empty.value = ""
            } else {
                setaddValueSpinner(-1)
                empty.value = ""
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

    ////Edting 
    const [changeSubject, setchangeSubject] = useState(false)
    const [formerSubject, setFormerSubject] = useState("")
    const [parentChild, setParentChild] = useState(-1)
    const [valueId, setvalueId] = useState(-1)
    const editName = (formerSubject) => {
        setchangeSubject(true)
        setFormerSubject(formerSubject)
        setParentChild(0)

    }
    const editValueName = (subject, id) => {
        setchangeSubject(true)
        setFormerSubject(subject)
        setvalueId(id)
        setParentChild(1)


    }
    const [valuePointt, setValuePointt] = useState("")

    const changeValuePointValue = `${studentUrl}/editvaluepoint`
    const changeValuePoint = (valueName, id, subjecthosting) => {
        const editSubjectSchema = {
            studentId: userId,
            studentClass: setId[3],
            term: first,
            subject: subjecthosting,
            newValuePoint: valuePointt,
            id: id,
        }
        axios.patch(changeValuePointValue, editSubjectSchema).then((result) => {
            if (result.data.status) {
                getCurrentUser()
            }

        })

    }
    return (
        <>
            <studenTermDetailContext.Provider value={{
                ///Empty Input 
                empty,
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
                //Sxhoolfee modal
                conditionalOperatorNumber,
                openModalForSchoolFee,
                openModalForPtaFee,
                whatToAdd,
                //amount to be paid
                firstTermSchoolFeesToBePaid,
                secondTermSchoolFeesToBePaid,
                thirdTermSchoolFeesToBePaid,
                firstTermPtaFeesToBePaid,
                secondTermPtaFeesToBePaid,
                thirdTermPtaFeesToBePaid,
                ///Fees
                firstTermSchoolFees,
                secondTermSchoolFees,
                thirdTermSchoolFees,
                firstTermPtaFees,
                secondTermPtaFees,
                thirdTermPtaFees,




                ///Adding subject
                setSubjectToBeAdded,
                addSubject,
                addValueSpinner,
                subjectCondition,
                updateMessage,
                ////subject added
                setFirstTerm,
                setsecondTerm,
                setThirdTerm,
                firstTerm,
                secondTerm,
                thirdTerm,
                firstTerm2,
                secondTerm2,
                thirdTerm2,
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
                valuePointId,

                ///Status for debt
                firstermStatusForDebt,
                secondTermStatusForDebt,
                thirdTermStatusForDebt,

                ///editname
                editName,
                setchangeSubject,
                setFormerSubject,
                formerSubject,
                parentChild,
                editValueName,
                valueId,
                changeValuePoint,
                setValuePointt,



            }}>
                <div>
                    {showBack && <Background />}
                    <SideBar />
                    <div className="term bg-light">
                        <div className="py-2 w-75 mx-auto">
                            <p></p>
                        </div>
                        <div className="harmrbugerMenu py-2  d-flex justify-content-end" style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd" }}>
                            <button onClick={showSideBar} className="btn"><AiOutlineMenu /> </button>
                        </div>

                        <div className="mx-auto py-2 px-2 termdetailsphone" style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd" }}>
                            {changesMessage !== "" && <div className="bg-light py-2 w-75 mx-auto">
                                <p className="text-center">{changesMessage}</p>
                            </div>}
                            <div className="d-flex w-75 mx-auto py-3 align-items-end" >
                                <img src={studentImgUrl === "" ? photo1 : studentImgUrl} alt="" style={{ width: "120px", height: "130px", objectFit: "cover" }} />
                                <label htmlFor="img">
                                    <FaCameraRetro className={spinStyle} />
                                    <input type="file" id="img" hidden onChange={(e) => uploadImg(e)} />
                                </label>
                            </div>
                            <div className="row w-100 mx-auto justify-content-evenly px-3 py-2" style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd", borderRadius: "30px 30px 0 0" }}>
                                <div className="col-lg-5 col-md-5 col-sm-12 mb-2 pb-2">

                                    <label htmlFor="form-label">First Name</label>

                                    <div className="d-flex border-none-input" >
                                        <input onBlur={() => setDetailsNumb(-1)} disabled={detailsNumb !== 0} type="text" value={studentFirstName} onChange={(e) => setStudentFirstName(e.target.value)} />
                                        <button onClick={() => setDetailsNumb(0)} className="btn"><FaPen /></button>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-12 mb-2 pb-2" >
                                    <label htmlFor="form-label">Surname</label>
                                    <div className="d-flex border-none-input">
                                        <input disabled={detailsNumb !== 1} type="text" value={studentMiddleName} onChange={(e) => setStudentMiddleName(e.target.value)} />
                                        <button onClick={() => setDetailsNumb(1)} className="btn"><FaPen /></button>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-12 mb-2 pb-2" >
                                    <label htmlFor="form-label">Middle Name</label>
                                    <div className="d-flex border-none-input">
                                        <input type="text" disabled={detailsNumb !== 2} value={studentSurName} onChange={(e) => setStudentSurName(e.target.value)} />
                                        <button onClick={() => setDetailsNumb(2)} className="btn"><FaPen /></button>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-12 mb-2 pb-2" >
                                    <label htmlFor="form-label">Uniqued Id</label>
                                    <div className="d-flex border-none-input">
                                        <input type="text" disabled={true} value={studentId} />
                                        <button className="btn"><FaPen /></button>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-12 mb-2 pb-2" >
                                    <label htmlFor="form-label">Parent PhoneNumber</label>
                                    <div className="d-flex border-none-input">
                                        <input type="text" disabled={detailsNumb !== 3} value={parentPhoneNumber} onChange={(e) => setParentPhoneNumber(e.target.value)} />
                                        <button onClick={() => setDetailsNumb(3)} className="btn"><FaPen /> </button>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-12 mb-2" >
                                    <label htmlFor="form-label">Parent Gmail</label>
                                    <div className="d-flex border-none-input">
                                        <input type="text" value={parentGmail} onChange={(e) => setParentGmail(e.target.value)} />
                                        <button className="btn"><FaPen /> </button>
                                    </div>

                                </div>
                                <div>
                                    <button style={{ width: "100%" }} className="btn btn-dark" onClick={() => saveChanges()}>Save Changes {saveChangesStatusSpin && <FaSpinner className="spin" />}</button>
                                </div>

                            </div>
                            <div className="w-100 mx-auto mt-4 border-bottom">

                            </div>
                            <div>
                                <div className="termdescription">
                                    <button onClick={() => firstTermBtn()}>FirstTerm</button><button onClick={() => secondTermBtn()}>SecondTerm</button><button onClick={() => thirdTermBtn()}>ThirdTerm</button>
                                </div>
                            </div>
                            {first === 1 && <StudentFirstTerm />}
                            {first === 2 && <StudentSecondTerm />}
                            {first === 3 && <StudentThirdTerm />}

                        </div>

                    </div>
                    {schoolFeeModal && <SchoolFeeModal />}
                    {delModalStatus === 0 && <DeleteSubjectmodal />}
                    {changeSubject && <EditSubject />}
                </div>

            </studenTermDetailContext.Provider>


        </>
    )
}

export default StudenTermDetails 