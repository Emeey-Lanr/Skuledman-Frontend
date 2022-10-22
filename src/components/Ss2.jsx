import SideBar from "./SideBar"
import "../styles/jss1.css"
import { FaSearch, FaPlus } from "react-icons/fa"
import { AiOutlineMenu } from "react-icons/ai"
import AddSetModal from "./AddSetModal"
import Background from "./Background"
import { useState, useContext, useEffect, useLayoutEffect } from "react"
import { appContext } from "../App"
import { Navigate, useNavigate } from "react-router-dom"


const Ss2 = () => {

    const { showSideBar, hideSideBar, showBack, setAddSetModal, setClassType, getSchoolDetails, Sss2Set } = useContext(appContext)
    useLayoutEffect(() => {
        getSchoolDetails()
    }, [])

    useEffect(() => {
        setClassType("Sss2")
        hideSideBar()
    }, [])

    const ShowModal = () => {
        showSideBar()
    }
    let Navigate = useNavigate()
    const showDetails = () => {
        Navigate("/studentSet")
    }


    return (
        <>
            <div>
                {showBack && <Background />}
                <SideBar />
                <div className="jss1 bg-light">
                    <h2 className="h2 py-2 px-2 w-75 mx-auto">SSS2</h2>
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
                    {Sss2Set.length > 0 ? Sss2Set.map(() => (
                        <div className="set my-4" style={{ cursor: "pointer" }}>
                            <p className="fs-5">2020/2004 <span>Set</span></p>
                            <div className="setBtn">
                                <button>View Student</button>
                                <button>View Details</button>
                            </div>
                        </div>
                    )) :
                        <div>
                            <p>No set created</p>
                        </div>
                    }
                </div>

            </div>
            <AddSetModal />

        </>

    )
}

export default Ss2