import "../styles/modal.css"
import { useState, useContext } from "react"
import { dashboardContext } from "./Dashboard"
import { FaTimes, FaSpinner } from "react-icons/fa"
import DashFirstTerm from "./DashFirstTerm"
import DashSecondTerm from "./DashSecondTerm"
import DashThirdTerm from "./DashThirdTerm"
const DashSetDetails = () => {
    const { setDashSetCondition, untillSetIsGotten } = useContext(dashboardContext)
    const [borderBottom, setBorderBottom] = useState({
        borderBottom: "2px solid black"
    })
    const [borderBottomNone, setBorderBottomNone] = useState({
        borderBottom: "none"
    })
    const [styleIf, setStyleIf] = useState(0)
    const firstTermBtn = () => {
        setStyleIf(0)
    }
    const secondTermBtn = () => {
        setStyleIf(1)
    }
    const thirdTermBtn = () => {
        setStyleIf(2)
    }

    return (
        <>
            <div className="w-100 h-100 position-fixed top-0 d-flex justify-content-center" style={{ background: "#0000006b" }}>
                <div className="dashsetDetails">
                    <div>
                        <button onClick={() => setDashSetCondition(false)} className="btn">
                            <FaTimes />
                        </button>
                    </div>

                    <div className="dashSetDetailsHeader">
                        <p>Jss1</p>
                        <p>2023/2024 set</p>
                    </div>
                    <div className="dashSetDetailsTermContainer">
                        <div className="dashSetDetailsTerm" style={styleIf === 0 ? borderBottom : borderBottomNone}>
                            <button onClick={() => firstTermBtn()}>First Term</button>
                        </div>
                        <div className="dashSetDetailsTerm" style={styleIf === 1 ? borderBottom : borderBottomNone}>
                            <button onClick={() => secondTermBtn()}>Second Term</button>
                        </div>
                        <div className="dashSetDetailsTerm" style={styleIf === 2 ? borderBottom : borderBottomNone}>
                            <button onClick={() => thirdTermBtn()}>Third Term</button>
                        </div>
                    </div>
                    <div>
                        {!untillSetIsGotten && <div className="d-flex justify-content-center pt-3">
                            <FaSpinner className="spin" />
                        </div>}
                        {untillSetIsGotten && <div>
                            {styleIf === 0 && <DashFirstTerm />}
                            {styleIf === 1 && <DashSecondTerm />}
                            {styleIf === 2 && <DashThirdTerm />}
                        </div>}
                    </div>


                </div>

            </div>

        </>
    )

}
export default DashSetDetails