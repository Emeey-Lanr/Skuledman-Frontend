import "../styles/sidebar.css"
import { FiUsers, FiLogOut } from "react-icons/fi"
import { FaWarehouse } from "react-icons/fa"
import { MdAdminPanelSettings } from "react-icons/md"
import Logo from "./Logo"
import { Link } from "react-router-dom"
const SideBar = ({ dashsign }) => {
    return (
        <div className="sidebar">
            <div className="px-3 py-2 position-sticky top-0 bg-white">
                <Logo />
            </div>
            <div>
                <div className="w-100">
                    <Link to="/" className="dash-link w-100 dash-link-dashboard">
                        <p>
                            <FaWarehouse />
                        </p>
                        <p >Dashboard</p>

                    </Link>
                </div>
                <div className="w-100">
                    <Link to="/" className="dash-link">
                        <MdAdminPanelSettings />
                        <p>Admin</p>

                    </Link>

                </div>
                <div className="headinglog">
                    <p>Junior Secondary School</p>
                </div>
                <div className="jss">
                    <Link to="/" className="dash-link">
                        <FiUsers />
                        <p>Jss1</p>

                    </Link>
                </div>
                <div className="jss">
                    <Link to="/" className="dash-link">
                        <FiUsers />
                        <p>Jss2</p>

                    </Link>
                </div>
                <div className="jss">
                    <Link to="/" className="dash-link">
                        <FiUsers />
                        <p>Jss3</p>

                    </Link>
                </div>
                <div className="headinglog">
                    <p>Senoir Secondary School</p>
                </div>
                <div className="sss">
                    <Link to="/" className="dash-link">
                        <FiUsers />
                        <p>Sss1</p>

                    </Link>
                </div>
                <div className="sss">
                    <Link to="/" className="dash-link">
                        <FiUsers />
                        <p>Sss2</p>

                    </Link>
                </div>
                <div className="sss">
                    <Link to="/" className="dash-link">
                        <FiUsers />
                        <p>Sss3</p>

                    </Link>
                </div>
                <div className="logoutbtn">
                    <button>
                        <FiLogOut />
                        LogOut
                    </button>

                </div>
            </div>



        </div>
    )
}

export default SideBar