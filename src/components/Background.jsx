import "../styles/sidebar.css"
import { useContext } from "react"
import { appContext } from "../App"
const Background = () => {
    const { sidebarNone, setSidebarNone, showBack, setShowBack } = useContext(appContext)
    const change = () => {
        setSidebarNone("sidebarNone")
        setShowBack(false)
    }
    return (
        <div onClick={() => change()} className="back w-100 h-100 position-fixed top-0" style={{ background: "#0000006b", cursor: "pointer" }} >

        </div >
    )
}

export default Background