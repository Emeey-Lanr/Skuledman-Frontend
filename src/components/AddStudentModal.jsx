import { studentBoardContext } from "./Studentboard"
import { useContext, useState } from "react"
import { FaTimes, FaSearch, FaSpinner } from "react-icons/fa"
import mage from "../images/photo1.jpg"
import { appContext } from "../App"
import axios from "axios"
const AddStudentModal = () => {
    const [userAlreadyExist, setUserAlreadyExist] = useState(false)
    const [userDoesntExist, setUserDoesntExist] = useState(true)
    const { studentModal, setStudentModal, getStudent } = useContext(studentBoardContext)
    const { studentUrl } = useContext(appContext)
    const [firstName, setFirstName] = useState("")
    const [surname, setSurName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const setId = localStorage.setId.split(",")
    const studentSchema = {
        firstName: firstName,
        middleName: middleName,
        surName: surname,
        schoolId: setId[1],
        schoolEmail: setId[4],
        imgUrl: "",
        schoolUniqueId: 1,
        currentClass: setId[3],
        jss1Id: "",
        jss2Id: "",
        jss3Id: "",
        sss1Id: "",
        sss2Id: "",
        sss3Id: "",
        jss1: {
            set: "",
            setId: "",
            firstTermResult: [],
            secondTermResult: [],
            thirdTermResult: [],
            firstTermSchoolFees: 0,
            secondTermSchoolFees: 0,
            thirdTermSchoolFees: 0,
            firstTermPtaFees: 0,
            secondTermPtaFees: 0,
            thirdTermPtaFees: 0,
            firstTermStatus: false,
            secondTermStatus: false,
            thirdTermStatus: false
        },
        jss2: {
            set: "",
            setId: "",
            firstTermResult: [],
            secondTermResult: [],
            thirdTermResult: [],
            firstTermSchoolFees: 0,
            secondTermSchoolFees: 0,
            thirdTermSchoolFees: 0,
            firstTermPtaFees: "",
            secondTermPtaFees: "",
            thirdTermPtaFees: "",
            firstTermStatus: false,
            secondTermStatus: false,
            thirdTermStatus: false
        },
        jss3: {
            set: "",
            setId: "",
            firstTermResult: [],
            secondTermResult: [],
            thirdTermResult: [],
            firstTermSchoolFees: 0,
            secondTermSchoolFees: 0,
            thirdTermSchoolFees: 0,
            firstTermPtaFees: 0,
            secondTermPtaFees: 0,
            thirdTermPtaFees: 0,
            firstTermStatus: false,
            secondTermStatus: false,
            thirdTermStatus: false
        },
        sss1: {
            set: "",
            setId: "",
            firstTermResult: [],
            secondTermResult: [],
            thirdTermResult: [],
            firstTermSchoolFees: 0,
            secondTermSchoolFees: 0,
            thirdTermSchoolFees: 0,
            firstTermPtaFees: 0,
            secondTermPtaFees: 0,
            thirdTermPtaFees: 0,
            firstTermStatus: false,
            secondTermStatus: false,
            thirdTermStatus: false
        },
        sss2: {
            set: "",
            setId: "",
            firstTermResult: [],
            secondTermResult: [],
            thirdTermResult: [],
            firstTermSchoolFees: 0,
            secondTermSchoolFees: 0,
            thirdTermSchoolFees: 0,
            firstTermPtaFees: 0,
            secondTermPtaFees: 0,
            thirdTermPtaFees: 0,
            firstTermStatus: false,
            secondTermStatus: false,
            thirdTermStatus: false
        },
        sss3: {
            set: "",
            setId: "",
            firstTermResult: [],
            secondTermResult: [],
            thirdTermResult: [],
            firstTermSchoolFees: 0,
            secondTermSchoolFees: 0,
            thirdTermSchoolFees: 0,
            firstTermPtaFees: 0,
            secondTermPtaFees: 0,
            thirdTermPtaFees: 0,
            firstTermStatus: false,
            secondTermStatus: false,
            thirdTermStatus: false
        },
    }

    if (setId[3] === "Jss1") {
        studentSchema.jss1Id = setId[0]
        studentSchema.jss1.set = setId[2]
        studentSchema.jss1.setId = setId[0]

    } else if (setId[3] === "Jss2") {
        studentSchema.jss2Id = setId[0]
        studentSchema.jss2.set = setId[2]
        studentSchema.jss2.setId = setId[0]
    } else if (setId[3] === "Jss3") {
        studentSchema.jss3Id = setId[0]
        studentSchema.jss3.set = setId[2]
        studentSchema.jss3.setId = setId[0]
    } else if (setId[3] === "Sss1") {
        studentSchema.sss1Id = setId[0]

        studentSchema.sss1.set = setId[2]
        studentSchema.sss1.setId = setId[0]
    } else if (setId[3] === "Sss2") {
        studentSchema.sss2Id = setId[0]

        studentSchema.sss2.set = setId[2]
        studentSchema.sss2.setId = setId[0]

    } else if (setId[3] === "Sss3") {
        studentSchema.sss3Id = setId[0]
        studentSchema.sss3.set = setId[2]
        studentSchema.sss3.setId = setId[0]
    }
    const [statusMessage, setStatusMessage] = useState("")
    const [statusSpin, setStatusSpin] = useState(false)
    const [whenGogtten, setwhenGogtten] = useState(false)
    const searchStudentEndPoint = `${studentUrl}/searchStudentToAdd`
    const [userFound, setUserFound] = useState([])
    const [collectUserInfo, setCollectUserInfo] = useState("")
    // const searchSchema = {
    //     searchWords: collectUserInfo,
    //     schoolEmail: setId[4],
    // }
    const getUser = () => {
        setUserDoesntExist(false)
        setwhenGogtten(true)
        axios.get(searchStudentEndPoint, {
            headers: {
                "Authorization": `bearer ${collectUserInfo},${setId[4]}`,
                "Content-Type": "application/json"
            }
        }).then((result) => {
            if (result.data.status) {
                setUserFound(result.data.result)
                setUserAlreadyExist(true)
                setwhenGogtten(false)
            } else {

            }

        })

    }
    const afterResult = () => {
        setStatusMessage("")
        setStudentModal(false)
        setStatusSpin(false)
    }

    const registerStudentEndPoint = `${studentUrl}/registerStudent`
    const addStudent = () => {
        console.log(studentSchema)
        setStatusSpin(true)
        axios.post(registerStudentEndPoint, studentSchema).then((result) => {
            if (result.data.status) {
                setStatusMessage(result.data.message)
                getStudent()
                setTimeout(() => {
                    afterResult()
                }, 2000)
            } else {
                setStatusMessage(result.data.message)
                setTimeout(() => {
                    afterResult()
                }, 2000)
            }

        })
    }
    const [currentId, setCurrentId] = useState(-1)
    const addStudentToNeWEndPoint = `${studentUrl}/addStudentToNewSet`
    const addStudentToSet = (id, studentId) => {
        setCurrentId(studentId)
        const addStudentToSetSchema = {
            studentId: id,
            currentClass: setId[3],
            setId: setId[0],
            set: setId[2],
        }
        axios.patch(addStudentToNeWEndPoint, addStudentToSetSchema).then((result) => {
            if (result.data.status) {
                setStatusMessage(result.data.message)
                getStudent()
                setTimeout(() => {
                    afterResult()
                    setCurrentId(-1)
                }, 1050)
            } else {
                setStatusMessage(result.data.message)
                setTimeout(() => {
                    afterResult()
                    setCurrentId(-1)
                }, 1050)
            }

        })

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
                            <input type="text" className="form-control" onChange={(e) => setCollectUserInfo(e.target.value)} />
                            <button onClick={() => getUser()} className="btn"><FaSearch /> </button>
                        </div>
                    </div>
                    {whenGogtten && <div className="d-flex justify-content-center">
                        <FaSpinner className="spin" />
                    </div>}
                    {userDoesntExist && <>
                        {statusMessage !== "" && <div className="w-75 mx-auto bg-light">
                            <p className="text-center">{statusMessage}</p>
                        </div>}
                        <div className="w-75 mx-auto">
                            <label htmlFor="" className="form-label">First Name</label>
                            <input type="text" className="form-control" onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="w-75 mx-auto">
                            <label htmlFor="" className="form-label">Surname</label>
                            <input type="text" className="form-control" onChange={(e) => setSurName(e.target.value)} />
                        </div>
                        <div className="w-75 mx-auto">
                            <label htmlFor="" className="form-label">Middle Name</label>
                            <input type="text" className="form-control" onChange={(e) => setMiddleName(e.target.value)} />
                        </div>
                        <div className="d-flex justify-content-center w-75 my-3 mx-auto btn btn-dark">
                            <button onClick={() => addStudent()} className="w-75 btn text-light">
                                Add {statusSpin && <FaSpinner className="spin" />}
                            </button>
                        </div>
                    </>}
                    {userAlreadyExist &&
                        <div className="w-100">
                            {
                                userFound.length > 0 ? < div className="w-75  mx-auto" style={{ overflowY: "scroll", height: "350px" }}>
                                    {userFound.map((user, id) => (
                                        < div className="form-control" key={id}>
                                            <img src={mage} alt="" width="40px" height="40px" style={{ borderRadius: "40px", objectFit: "cover" }} />
                                            <p><span className="fw-bold"> First Name:</span><span>{user.firstName}</span>  </p>
                                            <p><span className="fw-bold">Surname:</span><span>{user.surName}</span>  </p>
                                            <p><span className="fw-bold">Last Name:</span><span>{user.middleName}</span> </p>
                                            <p><span className="fw-bold">Cuurent Class:</span><span>{user.currentClass}</span> </p>
                                            <div className="w-100 d-flex justify-content-center btn btn-dark">
                                                <button onClick={() => addStudentToSet(user._id, id)} className="btn w-75 text-light">
                                                    Add {currentId === id && <FaSpinner className="spin" />}
                                                </button>
                                            </div>
                                        </div>

                                    ))}
                                </div> :
                                    <div className="bg-white py-2 my-2 w-75 mx-auto">
                                        <p className="text-center">No student Found</p>
                                    </div>
                            }
                        </div>

                    }



                </div>
            </div>

        </>


    )

}

export default AddStudentModal