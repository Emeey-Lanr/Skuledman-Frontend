import Logo from "./Logo"
import "../styles/jss1.css"
import SideBar from "./SideBar"
import { AiOutlineMenu, AiOutlineArrowLeft } from "react-icons/ai"
const SetDetails = () => {
    return (
        <>
            <div>
                <SideBar />
                <div className="setDetails bg-light">
                    <div>
                        <div className="w-100 mx-auto">
                            <div className="w-75 mx-auto d-flex justify-content-between">
                                <button className="btn">
                                    <AiOutlineArrowLeft />
                                </button>
                                <button className="btn" >
                                    <AiOutlineMenu />
                                </button>
                            </div>
                            <div className="d-flex w-75 mx-auto">
                                <buttton className="btn">First Term</buttton>
                                <buttton className="btn">Second Term</buttton>
                                <buttton className="btn">Third Term</buttton>
                            </div>
                            <div className="setinfo w-75">
                                <p>Jss</p>
                                <p>2022/2023</p>
                            </div>

                            <div className="firstT w-75 mx-auto border-top mt-3 mb-2 py-3" style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd" }}>
                                <p className="text-center">Add the amount to be paid for this term</p>
                                <input type="text" className="form-control w-75 mx-auto" />
                                <div className="d-flex justify-content-end w-75 mx-auto">
                                    <button className="btn btn-dark my-4">
                                        Add
                                    </button>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <span className="fw-bold">Amount:</span><span>40000</span>
                                </div>
                            </div>
                            <div className="row w-75 mx-auto" style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd" }}>
                                <div className="col-lg-6 mt-5 mb-4">
                                    <p>Number of students</p>
                                    <div className="border-bottom mt-5">

                                    </div>
                                </div>
                                <div className="col-lg-6 mt-5  mb-4">
                                    <p>Amount To Be Paid</p>
                                    <div className="border-bottom mt-5">

                                    </div>
                                </div>
                                <div className="col-lg-6 mt-5  mb-4">
                                    <p>Total Owned</p>
                                    <div className="border-bottom mt-5">

                                    </div>
                                </div>
                                <div className="col-lg-6 mt-5  mb-4">
                                    <p>Total Paid</p>
                                    <div className="border-bottom mt-5">

                                    </div>
                                </div>
                                <div className="col-lg-6 mt-5  mb-4">
                                    <p>Best Student</p>
                                    <div className="border-bottom mt-5">

                                    </div>
                                </div>
                                <div className="col-lg-6 mt-5  mb-4">
                                    <p>Worst Student</p>
                                    <div className="border-bottom mt-5">

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

export default SetDetails