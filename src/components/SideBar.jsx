import "../styles/sidebar.css"
import { FiUsers, FiLogOut } from "react-icons/fi"
import { FaWarehouse } from "react-icons/fa"
import { MdAdminPanelSettings } from "react-icons/md"
import Logo from "./Logo"
import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import { appContext } from "../App"


const SideBar = () => {
    const { sidebarNone, setSidebarNone, dashboardStyleNumber,
        setDashboardStyleNumber
    } = useContext(appContext)
    const [forNav, setForNav] = useState(1)
    const [sideBarStyle, setSideBarStyle] = useState({
        borderRight: "2px solid #ff660080",
    })
    const [sideBarStyle2, setSideBarStyle2] = useState({
        borderRight: "none",
    })
    return (
        <div className={forNav === 1 ? `sidebar ${sidebarNone}` : "mm"}>
            <div className="px-3 py-2 position-sticky top-0 bg-white">
                <Logo />
            </div>
            <div>
                <div className="w-100" >
                    <Link to="/dashboard" className="dash-link w-100 dash-link-dashboard" style={dashboardStyleNumber === 0 ? sideBarStyle : sideBarStyle2}>
                        <p>
                            <FaWarehouse />
                        </p>
                        <p >Dashboard</p>

                    </Link>
                </div>
                <div className="w-100">
                    <Link to="/" className="dash-link" style={dashboardStyleNumber === 1 ? sideBarStyle : sideBarStyle2}>
                        <MdAdminPanelSettings />
                        <p>Admin</p>

                    </Link>

                </div>
                <div className="headinglog">
                    <p>Junior Secondary School</p>
                </div>
                <div className="jss">
                    <Link to="/jss1" className="dash-link" style={dashboardStyleNumber === 2 ? sideBarStyle : sideBarStyle2}>
                        <FiUsers />
                        <p>Jss1</p>
                    </Link>
                </div>
                <div className="jss">
                    <Link to="/jss2" className="dash-link" style={dashboardStyleNumber === 3 ? sideBarStyle : sideBarStyle2}>
                        <FiUsers />
                        <p>Jss2</p>

                    </Link>
                </div>
                <div className="jss">
                    <Link to="/jss3" className="dash-link" style={dashboardStyleNumber === 4 ? sideBarStyle : sideBarStyle2}>
                        <FiUsers />
                        <p>Jss3</p>

                    </Link>
                </div>
                <div className="headinglog">
                    <p>Senoir Secondary School</p>
                </div>
                <div className="sss">
                    <Link to="/SsS1" className="dash-link" style={dashboardStyleNumber === 5 ? sideBarStyle : sideBarStyle2}>
                        <FiUsers />
                        <p>Sss1</p>

                    </Link>
                </div>
                <div className="sss">
                    <Link to="/ssS2" className="dash-link" style={dashboardStyleNumber === 6 ? sideBarStyle : sideBarStyle2}>
                        <FiUsers />
                        <p>Sss2</p>

                    </Link>
                </div>
                <div className="sss">
                    <Link to="/ssS3" className="dash-link" style={dashboardStyleNumber === 7 ? sideBarStyle : sideBarStyle2}>
                        <FiUsers />
                        <p>Sss3</p>

                    </Link>
                </div>
                <div className="logoutbtn">
                    <button >
                        <FiLogOut />
                        LogOut
                    </button>
                </div>
            </div>



        </div>
    )
}

export default SideBar