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


const Jss1 = () => {

    const { showSideBar, hideSideBar, showBack, setAddSetModal, setClassType, getSchoolDetails, jss1Set, setDetails, viewStudents, deleteSet, deleteSetModal, setUrl,
        studentUrl, setLastRoute, } = useContext(appContext)
    // useLayoutEffect(() => {

    // }, [])

    useEffect(() => {
        setClassType("Jss1")
        hideSideBar()
        getSchoolDetails()
        setLastRoute("/jss1")

    }, [])

    const ShowModal = () => {
        showSideBar()
    }
    let Navigate = useNavigate()


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
                        <input type="text" className="w-100 h-100 inputjss1" placeholder="Search..." />
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

        </>

    )
}

export default Jss1