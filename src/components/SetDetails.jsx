import Logo from "./Logo"
import "../styles/jss1.css"
import SideBar from "./SideBar"
import { AiOutlineMenu, AiOutlineArrowLeft, } from "react-icons/ai"
import { FaPenAlt, FaTrashAlt } from "react-icons/fa"
import { useState, useEffect, useContext, createContext } from "react"
import { appContext } from "../App"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import SetFirstTerm from "./SetFirstTerm"
import SetSecondTerm from "./SetSecondTerm"
import SetThirdTerm from "./SetThirdTerm"
import Background from "./Background"
export const setDetailContext = createContext(null)
const SetDetails = () => {
    const navigate = useNavigate()
    const { showSideBar, showBack, setUrl } = useContext(appContext)
    const [setInfo, setSetInfo] = useState({})
    ///For terms
    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    ///For details about each terms
    const [firstTerm, setFirstTerm] = useState([])
    const [secondTerm, setSecondTerm] = useState([])
    const [thirdTerm, setThirdTerm] = useState([])

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
    useEffect(() => {
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
                    setFirstTerm(result.data.currentSet.firstTerm)
                    setSecondTerm(result.data.currentSet.secondTerm)
                    setThirdTerm(result.data.currentSet.thirdTerm)

                } else {

                }

            })

        }

        if (localStorage.term === "setFirst") {
            firstTermPage()

        } else if (localStorage.term === "setSecond") {
            secondTermPage()

        } else if (localStorage.term === "setThird") {
            thirdTermPage()
        } else {
            firstTermPage()
        }



    }, [])

    ///Buttons handling the switch between pages
    const btn1 = () => {
        localStorage.term = "setFirst"
        firstTermPage()
    }
    const btn2 = () => {
        localStorage.term = "setSecond"
        secondTermPage()
    }
    const btn3 = () => {
        localStorage.term = "setThird"
        thirdTermPage()
    }

    const addFee = () => {

    }
    return (
        <>
            <setDetailContext.Provider value={{ setInfo, firstTerm, secondTerm, thirdTerm }}>
                <div>
                    {showBack && <Background />}
                    <SideBar />
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
                                    <p>{setInfo.class}</p>
                                    <p>{setInfo.set}</p>
                                </div>

                            </div>
                            {first && <SetFirstTerm />}
                            {second && <SetSecondTerm />}
                            {third && <SetThirdTerm />}

                        </div>

                    </div>
                </div>


            </setDetailContext.Provider>

        </>
    )
}

export default SetDetails