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
export const schoolSetDetailContext = createContext(null)

const SetDetails = () => {

    const navigate = useNavigate()
    const { showSideBar, showBack, setUrl, setDeleteLogicNumb, delModalStatus, setDelModalStatus } = useContext(appContext)
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
                    setSetInfo(result.data.currentSet)
                    setSchoolSetId(result.data.currentSet._id)
                    console.log(result.data.currentSet.firstTerm)
                    setFirstTerm(result.data.currentSet.firstTerm)
                    setSecondTerm(result.data.currentSet.secondTerm)
                    setThirdTerm(result.data.currentSet.thirdTerm)

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
                    schoolSetId
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
                                <div className="w-75 mx-auto d-flex justify-content-between">
                                    <button className="btn">
                                        <AiOutlineArrowLeft />
                                    </button>
                                    <button onClick={() => showSideBar()} className="btn" >
                                        <AiOutlineMenu />
                                    </button>
                                </div>
                                <div className="d-flex w-75 mx-auto">
                                    <buttton onClick={() => btn1()} className="btn">First Term</buttton>
                                    <buttton onClick={() => btn2()} className="btn">Second Term</buttton>
                                    <buttton onClick={() => btn3()} className="btn">Third Term</buttton>
                                </div>
                                <div className="setinfo w-75">
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