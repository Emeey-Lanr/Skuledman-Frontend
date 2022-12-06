import { dashboardContext } from "./Dashboard"
import { useContext, useState } from "react"
import ChartSchoolFees from "./ChartSchoolFees"
import ChartPtaFees from "./ChartPtaFees"
import { FaTimes, FaSpinner } from "react-icons/fa"
import "../styles/modal.css"
const DetailsModal = () => {
    const { infographical, setShowState, setForIt, classForIt, untillInfo, messageInfo } = useContext(dashboardContext)
    const [schoolFeesStatus, setSchoolFeesStatus] = useState(true)
    const [styleWhenClicked, setStyleWhenClicked] = useState({
        borderBottom: "2px solid black",

    })
    const [whenNotClicked, setWhenNotClicked] = useState({
        borderBottom: "none"
    })
    const [styleNumber, setStyleNumber] = useState(3)
    const openSchoolFees = () => {
        setStyleNumber(3)
        setSchoolFeesStatus(true)
    }
    const openPtaFees = () => {
        setStyleNumber(4)
        setSchoolFeesStatus(false)

    }
    const [schoolfeesData, setSchoolFeesData] = useState({
        labels: infographical.map((info, id) => info.term),
        datasets: [{
            label: "StudentSchoolFees Payment",
            data: infographical.map((info) => info.firstNumber)
        }]
    })
    return (
        <div className="w-100 h-100 position-fixed d-flex justify-content-center top-0" style={{ background: "#0000006b" }} >
            <div className="board">
                <div>
                    <button onClick={() => setShowState(false)} className="btn">
                        <FaTimes />
                    </button>
                </div>
                <div className="boardbtnSpace">
                    <button onClick={() => openSchoolFees()} style={styleNumber === 3 ? styleWhenClicked : whenNotClicked}>School Fees</button>
                    <button onClick={() => openPtaFees()} style={styleNumber === 4 ? styleWhenClicked : whenNotClicked}>Pta Fees</button>
                </div>
                <div>
                    <p className="text-center">{setForIt} set</p>
                    <p className="text-center">{classForIt}</p>
                </div>
                <div>
                    {untillInfo === 0 && <div className="d-flex justify-content-center">
                        <FaSpinner className="spin" />
                    </div>}
                    {untillInfo === 0 && <div className="d-flex justify-content-b center align-items-center">
                        <p className="fs-3">{messageInfo}</p>
                    </div>}
                    {untillInfo === 1 && <div>
                        {schoolFeesStatus && <ChartSchoolFees schoolFeesData={schoolfeesData} />}
                        {!schoolFeesStatus && <ChartPtaFees />}
                    </div>}

                </div>

            </div>

        </div>
    )

}
export default DetailsModal