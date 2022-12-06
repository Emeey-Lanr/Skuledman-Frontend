import { useEffect, useState, useContext, createContext } from "react"
import "../styles/dashboard.css"
import SideBar from "./SideBar"
import { AiOutlineMenu, AiOutlineArrowLeft, AiFillAccountBook } from "react-icons/ai"
import { appContext } from "../App"
import edu from "../images/edu.webp"
import Background from "./Background"
import DetailsModal from "./DetailsModal"
import DashSetDetails from "./DashSetDetails"
import axios from "axios"
import DashMailModal from "./DashMailModal"

export const dashboardContext = createContext(null)
const Dashboard = () => {
    const { showSideBar, hideSideBar, showBack, getSchoolDetails, schoolDetails, setWhenDashBoard,
        jss1SetDashB,
        jss2SetDashB,
        jss3SetDashB,
        Sss1SetDashB,
        Sss2SetDashB,
        Sss3SetDashB,
        schoolUrl,
        setUrl,
        studentUrl,
        setDashboardStyleNumber
    } = useContext(appContext)

    const [style, setStyle] = useState(
        {
            backgroundColor: "#ff660080",
            padding: "0px 0",
            color: "ffffff",
            borderRadius: "0px",
            paddingLeft: "0px",
            marginBottom: "0px",
            alignItems: "enter",
        }
    )
    const [schoolCurrentId, setSchoolCurrentId] = useState("")
    const [schoolCurrentSet, setSchoolCurrentSet] = useState("")

    useEffect(() => {
        setWhenDashBoard(true)
        hideSideBar()
        getSchoolDetails()
        setDashboardStyleNumber(0)
        if (jss1SetDashB.set !== "") {
            setSchoolCurrentId(jss1SetDashB.schoolId)
            setSchoolCurrentSet(jss1SetDashB.set)
        }

    }, [])

    //It shows the sidebar
    const bringSideBar = () => {
        showSideBar()
    }
    const graphicalPoint = `${schoolUrl}/graph`
    const [untillInfo, setUntillInfo] = useState(0)
    const [showState, setShowState] = useState(false)
    const [setForIt, setSetForIt] = useState("")
    const [classForIt, setClassForIt] = useState("")
    const [infographical, setInfoGraphical] = useState([])
    const [messageInfo, setMessageInfo] = useState("")

    const getInfo = (id, studentClass, set) => {
        console.log(id, studentClass, set)
        setShowState(true)
        setSetForIt(set)
        setClassForIt(studentClass)
        setMessageInfo("Getting Info, Wait!")
        axios.get(graphicalPoint, {
            headers: {
                "Authorization": `bearers ${id}`,
                "Content-Type": "application/json"
            }
        })
            .then((result) => {
                if (result.data.status) {

                    setInfoGraphical(result.data.info)


                    setTimeout(() => {
                        setUntillInfo(1)
                    }, 1500)



                } else {
                    setUntillInfo(0)
                    setMessageInfo(result.data.message)
                }
            })
    }
    /////////////////////////////////////////
    const [firstTermTotalNumberOfStudent, setfirstTermTotalNumberOfStudent] = useState(0)
    const [secondTermTotalNumberOfStudent, setsecondTermTotalNumberOfStudent] = useState(0)
    const [thirdTermTotalNumberOfStudent, setthirdTermTotalNumberOfStudent] = useState(0)

    /////SCHOOL FEE
    ///Total Amount to be paid  school fee
    const [totalAmountToBePaidSchoolFeeFirstTerm, settotalAmountToBePaidSchoolFeeFirstTerm] = useState()
    const [totalAmountToBePaidSchoolFeeSecondTerm, settotalAmountToBePaidSchoolFeeSecondTerm] = useState()
    const [totalAmountToBePaidSchoolFeeThirsTerm, settotalAmountToBePaidSchoolFeeThirsTerm] = useState()

    ///school debt fee
    const [firsTermDebtOwned, setfirsTermDebtOwned] = useState()
    const [secondTermDebtOwned, setsecondTermDebtOwned] = useState()
    const [thirdTermDebt, setthirdTermDebt] = useState()

    ///SchoolFees Amount already paid
    const [studentSFirstTermPaid, setstudentSFirstTermPaid] = useState()
    const [studentSSecondTermPaid, setstudentSSecondTermPaid] = useState()
    const [studentSThirdTermPaid, setstudentSThirdTermPaid] = useState()

    ///PTA
    ///Total Amount to be paid pta fee
    const [totalAmountToBePaidPtaFeeFirstTerm, settotalAmountToBePaidPtaFeeFirstTerm] = useState()
    const [totalAmountToBePaidPtaFeeSecondTerm, settotalAmountToBePaidPtaFeeSecondTerm] = useState()
    const [totalAmountToBePaidPtaFeeThirdTerm, settotalAmountToBePaidPtaFeeThirdTerm] = useState()
    ///

    ///Pta Fees debt owned
    const [firstTermDebtOwnedPta, setfirstTermDebtOwnedPta] = useState()
    const [secondTermDebtOwnedPta, setsecondTermDebtOwnedPta] = useState()
    const [thirdTermDebtOwnedPta, setthirdTermDebtOwnedPta] = useState()

    //pta fee already paid

    const [firstTermPaidPta, setfirstTermPaidPta] = useState()
    const [secondTermPaidPta, setsecondTermPaidPta] = useState()
    const [thirdTermPaidPta, setthirdTermPaidPta] = useState()


    const [dashSetCondition, setDashSetCondition] = useState(false)
    const [untillSetIsGotten, setUntillSetInfoIsGotten] = useState(false)
    const getTotalInfoEndPoint = `${setUrl}/currentSet`
    const getTotalDetails = (id, studentClass, set) => {
        setDashSetCondition(true)
        axios.get(getTotalInfoEndPoint, {
            headers: {
                "Authorization": `bearers ${id}`,
                "Content-Type": "application/json"
            }
        }).then((result) => {
            if (result.data.status) {
                console.log(result.data)
                setUntillSetInfoIsGotten(true)
                setfirstTermTotalNumberOfStudent(result.data.firstnumberOfStudent)
                setsecondTermTotalNumberOfStudent(result.data.secondTotalNumberOfStudent)
                setthirdTermTotalNumberOfStudent(result.data.thirdTotalNumberOfStudent)


                /////SCHOOL FEE
                ///Total Amount to be paid  school fee
                settotalAmountToBePaidSchoolFeeFirstTerm(result.data.totalAmountToBePaidSchoolFeeFirstTerm)
                settotalAmountToBePaidSchoolFeeSecondTerm(result.data.totalAmountToBePaidSchoolFeeSecondTerm)
                settotalAmountToBePaidSchoolFeeThirsTerm(result.data.totalAmountToBePaidSchoolFeeThirsTerm)

                ///school debt fee
                setfirsTermDebtOwned(result.data.firsTermDebtOwned)
                setsecondTermDebtOwned(result.data.secondTermDebtOwned)
                setthirdTermDebt(result.data.thirdTermDebt)

                ///SchoolFees Amount already paid
                setstudentSFirstTermPaid(result.data.studentSFirstTermPaid)
                setstudentSSecondTermPaid(result.data.studentSSecondTermPaid)
                setstudentSThirdTermPaid(result.data.studentSThirdTermPaid)

                ///PTA
                ///Total Amount to be paid pta fee
                settotalAmountToBePaidPtaFeeFirstTerm(result.data.totalAmountToBePaidPtaFeeFirstTerm)
                settotalAmountToBePaidPtaFeeSecondTerm(result.data.totalAmountToBePaidPtaFeeSecondTerm)
                settotalAmountToBePaidPtaFeeThirdTerm(result.data.totalAmountToBePaidPtaFeeThirdTerm)
                ///

                ///Pta Fees debt owned
                setfirstTermDebtOwnedPta(result.data.firstTermDebtOwnedPta)
                setsecondTermDebtOwnedPta(result.data.secondTermDebtOwnedPta)
                setthirdTermDebtOwnedPta(result.data.thirdTermDebtOwnedPta)

                //pta fees already paid
                setfirstTermPaidPta(result.data.studentPFirstTermPaid)
                setsecondTermPaidPta(result.data.studentPSecondTermPaid)
                setthirdTermPaidPta(result.data.studentPThirdTermPaid)

            } else {

            }
        })
    }
    const [generalMailStatus, setGeneralMailStatus] = useState(false)
    const sendGeneralMail = () => {
        setGeneralMailStatus(true)


    }
    return (
        <>
            <dashboardContext.Provider value={{
                schoolCurrentId, schoolCurrentSet, infographical, setShowState, setForIt, classForIt, untillInfo, messageInfo, setDashSetCondition, untillSetIsGotten, setGeneralMailStatus,
                firstTermTotalNumberOfStudent,
                secondTermTotalNumberOfStudent,
                thirdTermTotalNumberOfStudent,
                totalAmountToBePaidSchoolFeeFirstTerm,
                totalAmountToBePaidSchoolFeeSecondTerm,
                totalAmountToBePaidSchoolFeeThirsTerm,

                ///school debt fee
                firsTermDebtOwned,
                secondTermDebtOwned,
                thirdTermDebt,

                ///SchoolFees Amount already paid
                studentSFirstTermPaid,
                studentSSecondTermPaid,
                studentSThirdTermPaid,

                ///PTA
                ///Total Amount to be paid pta fee
                totalAmountToBePaidPtaFeeFirstTerm,
                totalAmountToBePaidPtaFeeSecondTerm,
                totalAmountToBePaidPtaFeeThirdTerm,
                ///

                ///Pta Fees debt owned
                firstTermDebtOwnedPta,
                secondTermDebtOwnedPta,
                thirdTermDebtOwnedPta,

                //pta fee already paid

                firstTermPaidPta,
                secondTermPaidPta,
                thirdTermPaidPta,

            }}>
                <div>
                    {showBack && <Background />}
                    <SideBar />
                    <div className="dashboard  bg-light">
                        <div>
                            <h2 className="text-center" style={{ color: "#ff6400" }}>{schoolDetails.schoolName}</h2>
                            <div className="navigation d-flex justify-content-between">
                                <button onClick={() => bringSideBar()} className="btn" >
                                    <AiOutlineMenu />
                                </button>
                            </div>
                            <div className="banner my-2">
                                <div>
                                    <h1 >Welcome</h1>
                                    <p>{schoolDetails.schoolEmail}</p>
                                    <p>With eduman your school mangement becomes easy</p>
                                </div>
                                <div className="bannerimg">
                                    <img src={edu} alt="" />
                                </div>

                            </div>
                            <div className="generalMail my-2">
                                <button onClick={() => sendGeneralMail()}>Send Mail</button>
                            </div>
                            <div className="jsclass">
                                <div className="class">
                                    <div className="classdeta">
                                        <p className="className">Jss1</p>
                                        <div className="setname">
                                            <p>{jss1SetDashB.set !== "" ? jss1SetDashB.set : "No set created yet"}</p>
                                            {jss1SetDashB.set !== "" ? <div className="setDetailsBtnSide">
                                                <button onClick={() => getInfo(jss1SetDashB._id, jss1SetDashB.class, jss1SetDashB.set)} >View Details</button>
                                                <button onClick={() => getTotalDetails(jss1SetDashB._id, jss1SetDashB.class, jss1SetDashB.set)} >View Details</button>
                                            </div> : <div className="setDetailsBtnSide">
                                                <button>Not available</button>
                                                <button>Not available</button>
                                            </div>
                                            }

                                        </div>
                                    </div>
                                    <div className="classdeta">
                                        <p className="className">Jss2</p>
                                        <div className="setname">
                                            <p>{jss2SetDashB.set !== "" ? jss2SetDashB.set : "No set created yet"}</p>
                                            {jss2SetDashB.set !== "" ? <div className="setDetailsBtnSide">
                                                <button onClick={() => getInfo(jss2SetDashB._id, jss2SetDashB.class, jss2SetDashB.set)} >View Details</button>
                                                <button onClick={() => getTotalDetails(jss2SetDashB._id, jss2SetDashB.class, jss2SetDashB.set)} >View Details</button>
                                            </div> : <div className="setDetailsBtnSide">
                                                <button>Not available</button>
                                                <button >Not available</button>
                                            </div>
                                            }

                                        </div>
                                    </div>
                                    <div className="classdeta">
                                        <p className="className">Jss3</p>
                                        <div className="setname">
                                            <p>{jss3SetDashB.set !== "" ? jss3SetDashB.set : "No set created yet"}</p>
                                            {jss3SetDashB.set !== "" ? <div className="setDetailsBtnSide">
                                                <button onClick={() => getInfo(jss3SetDashB._id, jss3SetDashB.class, jss3SetDashB.set)} >View Details</button>
                                                <button onClick={() => getTotalDetails(jss3SetDashB._id, jss3SetDashB.class, jss3SetDashB.set)}>View Details</button>
                                            </div> : <div className="setDetailsBtnSide">
                                                <button >Not available</button>
                                                <button >Not available</button>
                                            </div>
                                            }

                                        </div>
                                    </div>
                                </div>
                                <div className="class">
                                    <div className="classdeta">
                                        <p className="className">Sss1</p>
                                        <div className="setname">
                                            <p>{Sss1SetDashB.set !== "" ? Sss1SetDashB.set : "No set created yet"}</p>
                                            {Sss1SetDashB.set !== "" ? <div className="setDetailsBtnSide">
                                                <button onClick={() => getInfo(Sss1SetDashB._id, Sss1SetDashB.class, Sss1SetDashB.set)} >View Details</button>
                                                <button onClick={() => getTotalDetails(Sss1SetDashB._id, Sss1SetDashB.class, Sss1SetDashB.set)}>View Details</button>
                                            </div> : <div className="setDetailsBtnSide">
                                                <button >Not available</button>
                                                <button >Not available</button>
                                            </div>
                                            }

                                        </div>
                                    </div>
                                    <div className="classdeta">
                                        <p className="className">Sss2</p>
                                        <div className="setname">
                                            <p>{Sss2SetDashB.set !== "" ? Sss2SetDashB.set : "No set created yet"}</p>
                                            {Sss2SetDashB.set !== "" ? <div className="setDetailsBtnSide">
                                                <button onClick={() => getInfo(Sss2SetDashB._id, Sss2SetDashB.class, Sss2SetDashB.set)} >View Details</button>
                                                <button onClick={() => getTotalDetails(Sss2SetDashB._id, Sss2SetDashB.class, Sss2SetDashB.set)} >View Details</button>
                                            </div> : <div className="setDetailsBtnSide">
                                                <button>Not available</button>
                                                <button >Not available</button>
                                            </div>
                                            }

                                        </div>
                                    </div>
                                    <div className="classdeta">
                                        <p className="className">Sss3</p>
                                        <div className="setname">
                                            <p>{Sss3SetDashB.set !== "" ? Sss3SetDashB.set : "No set created yet"}</p>
                                            {Sss3SetDashB.set !== "" ? <div className="setDetailsBtnSide">
                                                <button onClick={() => getInfo(Sss3SetDashB._id, Sss3SetDashB.class, Sss3SetDashB.set)} >View Details</button>
                                                <button onClick={() => getTotalDetails(Sss3SetDashB._id, Sss3SetDashB.class, Sss3SetDashB.set)}>View Details</button>
                                            </div> : <div className="setDetailsBtnSide">
                                                <button >Not available</button>
                                                <button >Not available</button>
                                            </div>
                                            }

                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>



                    </div>
                </div>

                {showState && <DetailsModal />}
                {dashSetCondition && <DashSetDetails />}
                {generalMailStatus && <DashMailModal />}
            </dashboardContext.Provider>

        </>

    )
}


export default Dashboard