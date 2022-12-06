import Logo from "./Logo"
import "../styles/jss1.css"
import SideBar from "./SideBar"
import { AiOutlineMenu, AiOutlineArrowLeft, } from "react-icons/ai"
import { FaPenAlt, FaTrashAlt, } from "react-icons/fa"
import { useState, useEffect, useContext, createContext, useRef } from "react"
import { appContext } from "../App"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import SetFirstTerm from "./SetFirstTerm"
import SetSecondTerm from "./SetSecondTerm"
import SetThirdTerm from "./SetThirdTerm"
import Background from "./Background"
import FeeList from "./FeeList"
import DeletePriceModal from "./DeletePriceModal"
import { Link } from "react-router-dom"
export const schoolSetDetailContext = createContext(null)

const SetDetails = () => {

    const navigate = useNavigate()
    const { showSideBar, showBack, setUrl, setDeleteLogicNumb, delModalStatus, setDelModalStatus, thelastRoute, setLastRoute } = useContext(appContext)
    const [schoolsetInfo, setSetInfo] = useState({})
    const [schoolSetId, setSchoolSetId] = useState("")
    ///For sterms
    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    ///For details about each terms
    const [firstTerm, setFirstTerm] = useState({
        otherFee: []
    })
    const [secondTerm, setSecondTerm] = useState({
        otherFee: []
    })
    const [thirdTerm, setThirdTerm] = useState({
        otherFee: []
    })

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


    ///School Fees

    ///Functions to handle the term condition for each page
    const firstTermPage = () => {
        setFirst(true)
        setSecond(false)
        setThird(false)
    }
    const secondTermPage = () => {
        setFirst(false)
        setSecond(true)
        setThird(false)
    }
    const thirdTermPage = () => {
        setFirst(false)
        setSecond(false)
        setThird(true)

    }

    ///a state that tell which term wants to be updated
    const [currentTerm, setCurrentTerm] = useState("")
    const getSetInfo = () => {
        const currentSetId = localStorage.setId.split(",")
        console.log(currentSetId)
        const currentSetEndPoint = `${setUrl}/currentSet`
        if (currentSetId === []) {
            navigate(`/${currentSetId[currentSetId.length - 1]}`)
        } else {
            axios.get(currentSetEndPoint, {
                headers: {
                    "authorization": `bearer ${currentSetId[0]}`,
                    "Content-Type": "application/json"
                }
            }).then((result) => {
                if (result.data.status) {
                    console.log(result.data, "========")
                    setSetInfo(result.data.currentSet)
                    setSchoolSetId(result.data.currentSet._id)
                    setFirstTerm(result.data.currentSet.firstTerm)
                    setSecondTerm(result.data.currentSet.secondTerm)
                    setThirdTerm(result.data.currentSet.thirdTerm)

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


                    if (result.data.currentSet.class === "Jss1") {
                        setLastRoute('/jss1')
                    } else if (result.data.currentSet.class === "Jss2") {
                        setLastRoute('/jss2')
                    } else if (result.data.currentSet.class === "Jss3") {
                        setLastRoute('/jss3')
                    } else if (result.data.currentSet.class === "Sss1") {
                        setLastRoute('/sss1')
                    } else if (result.data.currentSet.class === "Sss2") {
                        setLastRoute('/sss2')
                    } else if (result.data.currentSet.class === "Sss3") {
                        setLastRoute('/sss3')
                    }
                } else {

                }

            })

        }

        if (localStorage.term === "setFirst") {
            firstTermPage()
            setCurrentTerm("firstTerm")

        } else if (localStorage.term === "setSecond") {
            secondTermPage()
            setCurrentTerm("secondTerm")

        } else if (localStorage.term === "setThird") {
            thirdTermPage()
            setCurrentTerm("thirdTerm")
        } else {
            firstTermPage()
            setCurrentTerm("firstTerm")
        }

    }
    useEffect(() => {
        getSetInfo()
        setDeleteLogicNumb(1)
    }, [])

    const navigateTo = () => {
        if (localStorage.navigation) {
            if (localStorage.navigation === 1) {
                navigate("/jss1")
            } else if (localStorage.navigation === 2) {

            } else if (localStorage.navigation === 3) {

            } else if (localStorage.navigation === 4) {

            } else if (localStorage.navigation === 5) {

            } else if (localStorage.navigation === 6) {

            }

        }
    }
    //Condition handling spin
    const [spinner, setSpinner] = useState(false)
    const [spinner2, setSpinner2] = useState(false)
    ///Buttons handling the switch between pages
    const btn1 = () => {
        localStorage.term = "setFirst"
        firstTermPage()
        setCurrentTerm("firstTerm")
        setSpinner(false)
    }
    const btn2 = () => {
        localStorage.term = "setSecond"
        secondTermPage()
        setCurrentTerm("secondTerm")
        setSpinner(false)
    }
    const btn3 = () => {
        localStorage.term = "setThird"
        thirdTermPage()
        setCurrentTerm("thirdTerm")
        setSpinner(false)
    }


    ///List Modal
    const [listModal, setListModal] = useState(false)
    const [listDescription, setListDescription] = useState("")
    const [listAmount, setListAmount] = useState("")


    const [collectSchoolFees, setCollectSchoolFees] = useState("")
    const [collectPtaFees, setCollectPtaFees] = useState("")
    const updateFeesEndPoint = `${setUrl}/updateFees`
    const fees = {
        setId: schoolsetInfo._id,
        schoolFees: collectSchoolFees,
        ptaFees: collectPtaFees,
        term: currentTerm,
    }
    const [inputMessage, setInputMessge] = useState("")
    const inputEmpty = useRef()
    const feeUpdateFunction = () => {
        setSpinner(true)
        axios.patch(updateFeesEndPoint, fees).then((result) => {
            if (result.data.status) {
                inputEmpty.value = ""
                getSetInfo()
                setInputMessge(result.data.message)
                setTimeout(() => {
                    setSpinner(false)
                    setInputMessge("")
                }, 2000);


            } else {
                setInputMessge(result.data.message)
                setTimeout(() => {
                    setSpinner(false)
                    setInputMessge("")
                }, 2000);

            }

        })
    }

    const updateFee = () => {
        console.log(collectPtaFees, collectSchoolFees)
        if (collectSchoolFees === "" && collectPtaFees !== "") {
            feeUpdateFunction()
        } else if (collectSchoolFees !== "" && collectPtaFees === "") {
            feeUpdateFunction()
        } else if (collectSchoolFees !== "" && collectPtaFees !== "") {
            feeUpdateFunction()
        } else if (collectSchoolFees === "" && collectPtaFees === "") {
            setInputMessge("Aleast fill in one input")
        }

    }

    const list = {
        setInfo: {
            setid: schoolsetInfo._id,
            currentTerm: currentTerm,
        },
        morelist: {
            description: listDescription,
            amount: listAmount,
        }
    }
    const [inputMessage2, setInputMessage2] = useState("")
    const addListEndPoint = `${setUrl}/createList`
    const addList = () => {
        if (listDescription === "" || listAmount === "") {
            setInputMessage2("Looks like you forgot something")
        } else {
            setSpinner2(true)
            axios.patch(addListEndPoint, list).then((result) => {
                if (result.data.status) {
                    getSetInfo()
                    setInputMessage2(result.data.message)
                    setTimeout(() => {
                        setSpinner2(false)
                        setListModal(false)
                        setInputMessage2("")
                    }, 2000)

                } else {
                    setInputMessage2(result.data.message)
                    setTimeout(() => {
                        setSpinner2(false)
                        setListModal(false)
                        setInputMessage2("")
                    }, 2000)
                }

            })
        }
    }

    const sendListAsEmailAsEndPoint = `${setUrl}/sendlist`
    const [listgmail, setlistgmail] = useState("")
    const [spinGmail, setSpinGmail] = useState(-1)
    const doAfter = (n) => {
        setlistgmail(n)
        setTimeout(() => {
            setlistgmail("")
            setSpinGmail(-1)
        }, 1500)

    }
    const sendListAsGmail = () => {
        if (currentTerm === "firstTerm") {
            setSpinGmail(1)
        } else if (currentTerm === "secondTerm") {
            setSpinGmail(2)
        } else if (currentTerm === "thirdTerm") {
            setSpinGmail(3)
        }
        const sendListSchema = {
            setId: schoolSetId,
            term: currentTerm
        }
        axios.post(sendListAsEmailAsEndPoint, sendListSchema).then((result) => {
            if (result.data.status) {

                doAfter(result.data.message)

            } else {
                doAfter(result.data.message)
            }

        })

    }

    ///bring deleteModal 
    ///Price List
    const [listDescriptionName, setListDescriptionName] = useState("")

    const brindDelModal = (listDescription) => {
        setListDescriptionName(listDescription)
        setDelModalStatus(1)

    }
    return (
        <>
            <schoolSetDetailContext.Provider
                value={{
                    getSetInfo,
                    schoolsetInfo, firstTerm, secondTerm, thirdTerm,
                    setCollectSchoolFees, setCollectPtaFees, updateFee, setListModal, setListDescription, setListAmount, inputMessage,
                    spinner, addList, spinner2, inputMessage2, setSpinner2, setInputMessage2, inputEmpty, currentTerm, brindDelModal, listDescriptionName,
                    schoolSetId,

                    firstTermTotalNumberOfStudent,
                    secondTermTotalNumberOfStudent,
                    thirdTermTotalNumberOfStudent,

                    /////SCHOOL FEE
                    ///Total Amount to be paid  school fee
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
                    listgmail,
                    spinGmail,
                    sendListAsGmail,
                    firstTermPaidPta,
                    secondTermPaidPta,
                    thirdTermPaidPta




                }}
            >
                <div>

                    {showBack && <Background />}
                    <SideBar />
                    {listModal && <FeeList />}
                    {delModalStatus === 1 && <DeletePriceModal />}
                    <div className="setDetails bg-light">
                        <div>
                            <div className="w-100 mx-auto">
                                <div className="setTerm mx-auto d-flex justify-content-between">
                                    <button className="btn">
                                        <Link to={thelastRoute}>
                                            <AiOutlineArrowLeft />
                                        </Link>
                                    </button>
                                    <button onClick={() => showSideBar()} className="btn" >
                                        <AiOutlineMenu />
                                    </button>
                                </div>
                                <div className="setTerm d-flex  mx-auto">
                                    <buttton onClick={() => btn1()} className="btn">First Term</buttton>
                                    <buttton onClick={() => btn2()} className="btn">Second Term</buttton>
                                    <buttton onClick={() => btn3()} className="btn">Third Term</buttton>
                                </div>
                                <div className="setinfo setTerm">
                                    <p>{schoolsetInfo.class}</p>
                                    <p>{schoolsetInfo.set}</p>
                                </div>

                            </div>

                            {first && <SetFirstTerm />}
                            {second && <SetSecondTerm />}
                            {third && <SetThirdTerm />}


                        </div>

                    </div>
                </div>


            </schoolSetDetailContext.Provider>

        </>
    )
}

export default SetDetails