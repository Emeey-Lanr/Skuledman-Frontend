import SideBar from "./SideBar"
import "../styles/jss1.css"
import { FaSearch, FaPlus } from "react-icons/fa"
import { AiOutlineMenu } from "react-icons/ai"
import AddSetModal from "./AddSetModal"
import Background from "./Background"
import { useState, useContext, useEffect, useLayoutEffect } from "react"
import { appContext } from "../App"
import { Navigate, useNavigate } from "react-router-dom"
import axios from "axios"
import Deleteset from "./Deleteset"
import Mail from "./Mail"


const Jss1 = () => {


    const { showSideBar, hideSideBar, showBack, setAddSetModal, setClassType, getSchoolDetails, setJss1, jss1Set, jss1Set2, setDetails, viewStudents, deleteSet, deleteSetModal, setUrl,
        studentUrl, setLastRoute, setDashboardStyleNumber, mailStatus, setMailStatus, sendMail } = useContext(appContext)

    useEffect(() => {
        setClassType("Jss1")
        hideSideBar()
        getSchoolDetails()
        setLastRoute("/jss1")
        setDashboardStyleNumber(2)
        setMailStatus(false)

    }, [])

    const ShowModal = () => {
        showSideBar()
    }
    let Navigate = useNavigate()

    const searchSet = (e) => {
        setJss1(
            jss1Set2.filter((info) => {
                if (info.set.toUpperCase().indexOf(e.target.value.toUpperCase()) > - 1) {
                    return info
                }
            })
        )
    }
    return (
        <>
            <div>
                {showBack && <Background />}
                <SideBar />
                <div className="jss1 bg-light">
                    <h2 className="h2 py-2 px-2 w-75 mx-auto">JSS1</h2>
                    <div className="w-75 mx-auto d-flex border  form-control">
                        <span className="outlineNone" onClick={() => ShowModal()}>
                            <AiOutlineMenu />
                        </span>
                        {/* <span>
                            <FaSearch />
                        </span> */}
                        <input type="text" onClick={(e) => searchSet(e)} className="w-100 h-100 inputjss1" placeholder="Search..." />
                    </div>

                    <div className="d-flex justify-content-flex-end w-75 mx-auto my-3">
                        <button onClick={() => setAddSetModal(true)} className="btn btn-rounded" style={{ background: "#ff6400", color: "white" }}>
                            <FaPlus />Add Set
                        </button>
                    </div>
                    <div className="w-100 mx-auto border-bottom"> </div>
                    {jss1Set.length > 0 ? jss1Set.map((set, id) => (
                        <div className="set my-4" style={{ cursor: "pointer" }}>
                            <p className="fs-5">{set.set}</p>
                            <div className="setBtn">
                                <button onClick={() => viewStudents(set._id, set.schoolEmail, set.schoolId, set.set, set.class)}>View Student</button>
                                <button onClick={() => setDetails(set._id, set.schoolEmail, set.schoolId, set.set, set.class)}> View Details</button>
                                <button onClick={() => sendMail(set._id, set.schoolEmail, set.schoolId, set.set, set.class)}>Send Mail</button>
                                <button onClick={() => deleteSet(set._id, set.schoolEmail, set.schoolId, set.set, set.class)}>Delete</button>
                            </div>
                        </div>
                    )) :
                        <div className="d-flex justify-content-center align-items-center">
                            <p>No set created</p>
                        </div>
                    }
                </div>

            </div>
            <AddSetModal />
            {deleteSetModal && <Deleteset />}
            {mailStatus && <Mail />}

        </>

    )
}

export default Jss1