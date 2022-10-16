import { useState } from "react"
import "../styles/dashboard.css"
import SideBar from "./SideBar"
const Dashboard = () => {

    const [style, setStyle] = useState(
        {
            backgroundColor: "#ff660080",
            padding: "0px 0",
            color: "ffffff",
            borderRadius: "0px",
            paddingLeft: "0px",
            marginBottom: "0px",
            alignItems: "enter",
        }
    )
    return (
        <>
            <div>
                <SideBar  />
                <div className="dashboard ml-auto bg-light">
                    <div>

                    </div>

                </div>
            </div>

        </>

    )
}

export default Dashboard