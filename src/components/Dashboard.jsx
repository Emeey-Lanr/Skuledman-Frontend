import { useEffect, useState, useContext } from "react"
import "../styles/dashboard.css"
import SideBar from "./SideBar"
import { AiOutlineMenu, AiOutlineArrowLeft, AiFillAccountBook } from "react-icons/ai"
import { appContext } from "../App"
import edu from "../images/edu.webp"
import Background from "./Background"
const Dashboard = () => {
    const { showSideBar, hideSideBar, showBack, getSchoolDetails, schoolDetails, setWhenDashBoard } = useContext(appContext)

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
                    <div className="dash-details">
                        <div>
                            <p className="text-center"><AiFillAccountBook style={{ color: "#ff6400" }} /></p>
                            <p className="text-center fs-4">Total Number of students</p>
                            <div className="dash-info">
                                <p className="text-center">Jss1</p>
                                <p className="text-center">2020/2022</p>
                                <p className="text-center">
                                    <span>
                                        Total:
                                    </span>
                                    <span>
                                        40
                                    </span>
                                </p>
                            </div>


                        </div>
                        <div>
                            <p className="text-center"><AiFillAccountBook /></p>
                            <p className="text-center">Total Number of Debt</p>
                            <div className="dash-info">
                                <p className="text-center">Jss1</p>
                                <p className="text-center">2020/2022</p>
                                <p className="text-center">
                                    <span>
                                        Total:
                                    </span>
                                    <span>
                                        #60000
                                    </span>
                                </p>

                            </div>



                        </div>

                    </div>

                </div>
            </div>


        </>

    )
}

export default Dashboard