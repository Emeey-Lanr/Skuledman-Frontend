import { useEffect, useState, useContext } from "react"
import "../styles/dashboard.css"
import SideBar from "./SideBar"
import { AiOutlineMenu, AiOutlineArrowLeft, AiFillAccountBook } from "react-icons/ai"
import { appContext } from "../App"
import edu from "../images/edu.webp"
import Background from "./Background"
const Dashboard = () => {
    const { showSideBar, hideSideBar, showBack, getSchoolDetails, schoolDetails, setWhenDashBoard,
        jss1SetDashB,
        jss2SetDashB,
        jss3SetDashB,
        Sss1SetDashB,
        Sss2SetDashB,
        Sss3SetDashB,
    } = useContext(appContext)

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
    useEffect(() => {
        setWhenDashBoard(true)
        hideSideBar()
        getSchoolDetails()

    }, [])

    //It shows the sidebar
    const bringSideBar = () => {
        showSideBar()
    }
    return (
        <>
            <div>
                {showBack && <Background />}
                <SideBar />
                <div className="dashboard ml-auto bg-light">
                    <div>
                        <h2 className="text-center" style={{ color: "#ff6400" }}>{schoolDetails.schoolName}</h2>
                        <div className="navigation d-flex justify-content-between">
                            <button onClick={() => bringSideBar()} className="btn" >
                                <AiOutlineMenu />
                            </button>
                        </div>
                        <div className="banner">
                            <div>
                                <h1 >Welcome</h1>
                                <p>{schoolDetails.schoolEmail}</p>
                                <p>With eduman your school mangement becomes easy</p>
                            </div>
                            <div className="bannerimg">
                                <img src={edu} alt="" />
                            </div>

                        </div>

                    </div>


                    <div className="dash-deatailsSet">
                        {jss1SetDashB !== null &&
                            <div>
                                <p className="fs-3 text-center" style={{ color: "#ff6400" }}>Jss1</p>
                                <p className="fw-bold text-center" style={{ color: "#ff6400" }}>
                                    {jss1SetDashB.set}
                                </p>
                                <div className="d-flex justify-content-center">
                                    <button className="btn mx-2" style={{ background: "#ff6400", color: "white", }}>View Details</button>
                                    <button className="btn mx-2" style={{ background: "#ff6400", color: "white", }}>View Students</button>
                                    <button className="btn mx-2" style={{ background: "#ff6400", color: "white", }}>Delete</button>
                                </div>
                            </div>
                        },
                        {jss2SetDashB !== null &&
                            <div>
                                <p className="fs-3 text-center" style={{ color: "#ff6400" }}>Jss2</p>
                                <p className="fw-bold text-center" style={{ color: "#ff6400" }}>
                                    {jss2SetDashB.set}
                                </p>
                                <div className="d-flex justify-content-center">
                                    <button className="btn mx-2" style={{ background: "#ff6400", color: "white", }}>View Details</button>
                                    <button className="btn mx-2" style={{ background: "#ff6400", color: "white", }}>View Students</button>
                                    <button className="btn mx-2" style={{ background: "#ff6400", color: "white", }}>Delete</button>
                                </div>
                            </div>
                        },  {jss3SetDashB !== null &&
                            <div>
                                <p className="fs-3 text-center" style={{ color: "#ff6400" }}>Jss3</p>
                                <p className="fw-bold text-center" style={{ color: "#ff6400" }}>
                                    {jss3SetDashB.set}
                                </p>
                                <div className="d-flex justify-content-center">
                                    <button className="btn mx-2" style={{ background: "#ff6400", color: "white", }}>View Details</button>
                                    <button className="btn mx-2" style={{ background: "#ff6400", color: "white", }}>View Students</button>
                                    <button className="btn mx-2" style={{ background: "#ff6400", color: "white", }}>Delete</button>
                                </div>
                            </div>
                        }


                    </div>

                </div>
            </div>


        </>

    )
}

export default Dashboard