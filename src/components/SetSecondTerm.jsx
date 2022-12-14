import Logo from "./Logo"
import "../styles/jss1.css"
import SideBar from "./SideBar"
import { AiOutlineMenu, AiOutlineArrowLeft, } from "react-icons/ai"
import { FaPenAlt, FaTrashAlt, FaSpinner } from "react-icons/fa"
import { schoolSetDetailContext } from "./SetDetails"
import { useContext } from "react"
const SetSecondTerm = () => {
    const { schoolsetInfo, secondTerm, setCollectSchoolFees, setCollectPtaFees, updateFee, openEditModal, inputMessage, spinner,
        inputEmpty, brindDelModal, secondTermTotalNumberOfStudent, totalAmountToBePaidSchoolFeeSecondTerm, secondTermDebtOwned, studentSSecondTermPaid,
        totalAmountToBePaidPtaFeeSecondTerm, secondTermDebtOwnedPta, listgmail, spinGmail, sendListAsGmail, secondTermPaidPta, editList

    } = useContext(schoolSetDetailContext)

    return (
        <>
            <div className="setTerm py-2 mx-auto" style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd" }}>
                <p className="text-center" style={{ color: "#ff6400", }}>Second Term</p>
            </div>
            <div className="firstT setTerm mx-auto border-top mt-3 mb-2 py-3" style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd" }}>
                <p className="text-center">Add the amount to be paid for this term</p>
                {inputMessage !== "" && <div className="w-75 mx-auto bg-light">
                    <p className="w-75 mx-auto text-center py-3">{inputMessage}</p>
                </div>}
                <div className="w-75 mx-auto">
                    <label htmlFor="" >School Fees</label>
                </div>
                <input type="number" ref={inputEmpty} className="form-control w-75 mx-auto" onChange={(e) => setCollectSchoolFees(e.target.value)} />
                <div className=" w-75 mx-auto">
                    <label htmlFor="" >PTA</label>
                </div>
                <input type="number" ref={inputEmpty} className="form-control w-75 mx-auto" onChange={(e) => setCollectPtaFees(e.target.value)} />
                <div className="d-flex justify-content-end w-75 mx-auto">

                    <button onClick={updateFee} addFee className="btn btn-dark my-4">
                        Add {spinner && <FaSpinner className="spin" />}
                    </button>
                </div>
                <div className="w-100 border-bottom">

                </div>

                <div className="w-75 mx-auto" style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd" }} >
                    <div>
                        <p className="fs-4  px-2">School Fees</p>
                        <span className="fw-bold px-2">Amount:</span><span>{secondTerm.schoolFees === "" ? `00:00` : <><span>???</span>{secondTerm.schoolFees}</>}</span>
                    </div>



                </div>
                <div className="w-75 mt-3 mx-auto" style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd" }} >
                    <div>
                        <p className="fs-4  px-2">PTA Fees</p>
                        <span className="fw-bold px-2">Amount:</span><span>{secondTerm.ptaFees === "" ? `00:00` : <><span>???</span>{secondTerm.ptaFees}</>}</span>
                    </div>

                </div>
                <div className="border-bottom mt-5">

                </div>
                <div className="w-75 mx-auto">
                    <p className="text-center fs-2 fw-bold">Other Fees</p>
                </div>
                {listgmail !== "" && <div className="w-75 py-2  mx-auto bg-light">
                    <p className="text-center">{listgmail}</p>
                </div>}
                <div>
                    <div className="w-75 d-flex justify-content-end my-2 mx-auto">
                        <button onClick={openEditModal} className="btn btn-dark">Create List</button>
                    </div>
                </div>
                <div className="w-75 d-flex justify-content-end my-2 mx-auto">
                    <button onClick={sendListAsGmail} className="btn w-100 btn-dark">Send List As Mail {spinGmail === 2 && < FaSpinner className="spin" />} </button>
                </div>
                {secondTerm.otherFee.map((items, id) => (
                    <div className="w-75 mt-3 mx-auto" style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd" }} >
                        <div>
                            <p className="fs-4  px-2">{items.description}</p>
                            <span className="fw-bold px-2">Amount:</span><span><span>???</span>{items.amount}</span>
                        </div>
                        <div>
                            <button onClick={() => editList(id)} className="btn border">
                                <FaPenAlt />
                            </button>
                            <button onClick={() => brindDelModal(items.description)} className="btn border">
                                <FaTrashAlt />
                            </button>
                        </div>
                    </div>
                )
                )}
            </div>
            <div className="row setTerm mx-auto" style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd" }}>
                <div className="col-lg-6 mt-5 mb-4">
                    <p>Number of students</p>
                    <div className="border-bottom mt-5">
                        {secondTermTotalNumberOfStudent}
                    </div>
                </div>
                <div className="col-lg-6 mt-5  mb-4">
                    <p>Total Amount To Be Paid</p>
                    <div className="border-bottom mt-5">
                        ??? {(Number(totalAmountToBePaidSchoolFeeSecondTerm) + Number(totalAmountToBePaidPtaFeeSecondTerm)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                    </div>
                </div>
                <div className="col-lg-6 mt-5  mb-4">
                    <p>Total Amount Owned</p>
                    <div className="border-bottom mt-5">
                        ???  {(Number(secondTermDebtOwned) + Number(secondTermDebtOwnedPta)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                    </div>
                </div>
                <div className="col-lg-6 mt-5  mb-4">
                    <p>Total School Fee To Be Paid</p>
                    <div className="border-bottom mt-5">
                        ??? {Number(totalAmountToBePaidSchoolFeeSecondTerm).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                    </div>
                </div>
                <div className="col-lg-6 mt-5  mb-4">
                    <p>Total PTA To Be Fees Paid</p>
                    <div className="border-bottom mt-5">
                        ??? {Number(totalAmountToBePaidPtaFeeSecondTerm).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                    </div>
                </div>
                <div className="col-lg-6 mt-5  mb-4">
                    <p>Total School Fees Paid</p>
                    <div className="border-bottom mt-5">
                        ???  {Number(studentSSecondTermPaid).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                    </div>
                </div>
                <div className="col-lg-6 mt-5  mb-4">
                    <p>Total PTA Fees Paid</p>
                    <div className="border-bottom mt-5">
                        ???  {Number(secondTermPaidPta).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                    </div>
                </div>



            </div>


        </>
    )
}

export default SetSecondTerm