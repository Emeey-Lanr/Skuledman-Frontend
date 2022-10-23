import Logo from "./Logo"
import "../styles/jss1.css"
import SideBar from "./SideBar"
import { AiOutlineMenu, AiOutlineArrowLeft, } from "react-icons/ai"
import { FaPenAlt, FaTrashAlt } from "react-icons/fa"
import { setDetailContext } from "./SetDetails"
import { useContext } from "react"

const SetFirstTerm = () => {
    const { } = useContext(setDetailContext)
    const addFee = () => {

    }
    return (
        <>
            <div className="w-75 py-2 mx-auto" style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd" }}>
                <p className="text-center" style={{ color: "#ff6400", }}>First Term</p>
            </div>
            <div className="firstT w-75 mx-auto border-top mt-3 mb-2 py-3" style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd" }}>
                <p className="text-center">Add the amount to be paid for this term</p>

                <div className="w-75 mx-auto">
                    <label htmlFor="" >School Fees</label>
                </div>
                <input type="text" className="form-control w-75 mx-auto" />
                <div className=" w-75 mx-auto">
                    <label htmlFor="" >PTA</label>
                </div>
                <input type="number" className="form-control w-75 mx-auto" />
                <div className="d-flex justify-content-end w-75 mx-auto">

                    <button onClick={() => addFee()} className="btn btn-dark my-4">
                        Add
                    </button>
                </div>
                <div className="w-100 border-bottom">

                </div>
                <p className="text-center fw-bold fs-3">Fees</p>
                <div className="w-75 mx-auto" style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd" }} >
                    <div>
                        <p className="fs-4  px-2">School Fees</p>
                        <span className="fw-bold px-2">Amount:</span><span>#00:00</span>
                    </div>
                    <div>
                        <button className="btn border">
                            <FaPenAlt />
                        </button>
                        <button className="btn border">
                            <FaTrashAlt />
                        </button>
                    </div>


                </div>
                <div className="w-75 mt-3 mx-auto" style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd" }} >
                    <div>
                        <p className="fs-4  px-2">PTA Fees</p>
                        <span className="fw-bold px-2">Amount:</span><span>#00:00</span>
                    </div>
                    <div>
                        <button className="btn border">
                            <FaPenAlt />
                        </button>
                        <button className="btn border">
                            <FaTrashAlt />
                        </button>
                    </div>


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




        </>
    )
}

export default SetFirstTerm