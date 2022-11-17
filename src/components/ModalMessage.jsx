import "../styles/modal.css"
import { studenTermDetailContext } from "./StudentTermDetails"
import { useContext } from "react"

const ModalMessage = () => {
    const { modalMessage } = useContext(studenTermDetailContext)
    return (
        <div className="w-100 h-100 position-fixed top-0" style={{ background: "#0000006b" }} >
            <div className="modalmessageforStudent">
                <div className="w-75 mx-auto bg-light">

                    <p className="text-center">{modalMessage}</p>
                </div>
            </div>

        </div>
    )
}

export default ModalMessage