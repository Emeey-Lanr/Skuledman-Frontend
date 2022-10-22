import "../styles/sidebar.css"
import { useContext } from "react"
import { appContext } from "../App"
const Background = () => {
    const { hideSideBar } = useContext(appContext)
    const change = () => {
        hideSideBar()
    }
    return (
        <div onClick={() => change()} className="back w-100 h-100 position-fixed top-0" style={{ background: "#0000006b", cursor: "pointer" }} >

        </div >
    )
}

export default Background