import SideBar from "./SideBar"
import "../styles/term.css"
import photo1 from "../images/photo1.jpg"
import { FaCameraRetro, FaPlus, FaSearch } from "react-icons/fa"
import { AiOutlineMenu } from "react-icons/ai"
import { useState } from "react"
import { Link } from "react-router-dom"
const FirstTerm = () => {

    return (
        <>
            <div>
                <SideBar />
                <div className="term bg-light">
                    <div>
                        <div className="termdescription">
                            <button >FirstTerm</button><button >SecondTerm</button><button >ThirdTerm</button><button className="termdescriptionBtnNone">    <AiOutlineMenu /></button>
                        </div>
                    </div>
                    <div className="w-75 mx-auto">
                        <div className="my-5 d-flex align-items-end" >
                            <img src={photo1} alt="" style={{ width: "120px", height: "130px", objectFit: "cover" }} />
                            <button className="btn"> <FaCameraRetro /> </button>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                                <label htmlFor="form-label">First Name</label>
                                <input type="text" className="form-control border-none" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                                <label htmlFor="form-label">Surname</label>
                                <input type="text" className="form-control border-none" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                                <label htmlFor="form-label">Middle Name</label>
                                <input type="text" className="form-control border-none" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                                <label htmlFor="form-label">Uniqued Id</label>
                                <input type="text" className="form-control border-none" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                                <label htmlFor="form-label">Parent PhoneNumber</label>
                                <input type="text" className="form-control border-none" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                                <label htmlFor="form-label">Parent Gmail</label>
                                <input type="text" className="form-control border-none" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                                <label htmlFor="form-label">School Fees</label>
                                <input type="text" className="form-control border-none" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                                <label htmlFor="form-label">Amount Paid</label>
                                <input type="text" className="form-control border-none" />
                            </div>
                            <div>
                                <button className="btn " style={{ background: "#ff6400", color: "white" }}>Save Changes</button>
                            </div>

                        </div>
                        <div className="w-100 mx-auto mt-4 border-bottom">

                        </div>
                        <div>
                            <p>Result</p>
                            <button className="btn" style={{ color: "#ff6400" }}><FaPlus /> Add Subject</button>
                        </div>
                        <div>
                            <label className="from-label fw-bold ">Name :</label>
                            <input type="text" className="w-100 form-control" />
                        </div>

                        <div className="w-100 mx-auto mt-4 border-bottom"></div>
                        <div className="form-control mt-4">
                            <button className="btn"><FaSearch /></button>  <input type="text" placeholder="Search..." className="w-75 search" />
                        </div>
                        <div className="w-100 mx-auto mt-4 border-bottom"></div>

                        <div className="w-100 mx-auto mt-4 border-top py-3">
                            <div className="d-flex justify-content-between">
                                <p className="fs-5" style={{ color: "#ff6400" }}>English</p>
                                <div>
                                    <button className="btn btn-dark">Delete</button>
                                </div>
                            </div>
                            <div>
                                <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, sunt.</p>
                            </div>
                            <div>
                                <label htmlFor="" className="form-label">Description</label>
                                <input type="text" className="form-control" />

                                <label htmlFor="" className="form-label">Value</label>
                                <input type="text" className="form-control" />
                                <div className="my-4">
                                    <button className="btn btn-success">Add Value</button>
                                </div>

                            </div>
                            <div>
                                <p>
                                    First Ca
                                </p>
                                <div className="row justify-content-between">
                                    <div className="col-lg-6 col-sm-12">
                                        <input type="text" value="100" className="form-control w-100" />
                                    </div>

                                    <div className="col-lg-6 col-sm-12 d-flex justify-content-end py-2">
                                        <button className="btn">Delete</button>
                                        <button className="btn ">Save Changes</button>
                                    </div>

                                </div>

                            </div>
                            <div>
                                <p>
                                    First Ca
                                </p>
                                <div className="row justify-content-between">
                                    <div className="col-lg-6 col-sm-12">
                                        <input type="text" value="100" className="form-control w-100" />
                                    </div>

                                    <div className="col-lg-6 col-sm-12 d-flex justify-content-end py-2">
                                        <button className="btn">Delete</button>
                                        <button className="btn ">Save Changes</button>
                                    </div>

                                </div>


                            </div>




                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default FirstTerm