import "../styles/logo.css"
import { appContext } from "../App"
import { useContext, useState } from "react"
const Logo = () => {
    const [j, setj] = useState(2)
    const { logoCenter } = useContext(appContext)
    return (
        <div className="">
            <div className={j === 2 ? `bdy  d-flex ${logoCenter}` : "yes"}>
                <div className="logo11" >
                    <div></div>
                    <div></div>
                </div>
                <div className="logo22">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div>
            <p className="eduman text-center">Skuledman</p>
        </div>

    )
}

export default Logo