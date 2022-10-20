import "../styles/logo.css"
import { appContext } from "../App"
import { useContext, useState } from "react"
const Logo = () => {
    const [j, setj] = useState(2)
    const { logoCenter } = useContext(appContext)
    return (
        <div className="">
            <div className={j === 2 ? `bdy  d-flex ${logoCenter}` : "yes"}>
                <div className="logo1">
                    <div></div>
                    <div></div>
                </div>
                <div className="logo2">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div>
            <p className="eduman text-center">Eduman</p>
        </div>

    )
}

export default Logo