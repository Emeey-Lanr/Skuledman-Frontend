
import { useContext } from "react"
import { FaPlus, FaSearch, FaSpinner, FaPen } from "react-icons/fa"
import { studenTermDetailContext } from "./StudentTermDetails"
const StudentThirdTerm = () => {
    const { empty, first, activateSetStatus, thirdTermActivationMessage, thirdTerMActivationStyle, openModalForSchoolFee,
        openModalForPtaFee, thirdTermSchoolFeesToBePaid, thirdTermPtaFeesToBePaid, thirdTermSchoolFees, thirdTermPtaFees, setSubjectToBeAdded, addSubject, addValueSpinner, subjectCondition,
        updateMessage, setThirdTerm, thirdTerm, thirdTerm2, addValueToSubject, setValueName, setValuePoint, deleteSubject, deletePoint, thirdTermStatusForDebt,
        editName, editValueName
    } = useContext(studenTermDetailContext)

    const searchFor = (e) => {

    }
    return (
        <>

            <div className='px-2 ' style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd", marginBottom: "20px" }}>
                <div className='d-flex justify-content-center my-2'>
                    <button style={{ width: "100%" }} onClick={activateSetStatus} className={thirdTerMActivationStyle}>{thirdTermActivationMessage}</button>
                </div>
                <div>
                    <div className='' >
                        <div className='w-100 border-bottom py-3' >
                            <span className='fw-bold fs-6'>Third Term School Fees:</span><span>₦{thirdTermSchoolFeesToBePaid}</span>
                        </div>
                        <div className="w-100 py-3 border-bottom">
                            <span className='fw-bold fs-6'>Third Pta Fees:</span><span>₦{thirdTermPtaFeesToBePaid}</span>
                        </div>
                    </div>
                    <div className='row justify-content-between py-6'>
                        <div className='col-lg-5 border-bottom my-3-'>
                            <p>Third Term School Fees Debt</p>
                            <p>₦{thirdTermStatusForDebt === true ? Number(thirdTermSchoolFeesToBePaid) - Number(thirdTermSchoolFees) : `0`}</p>
                        </div>
                        <div className='col-lg-5 border-bottom'>
                            <p>Third Term PTA Fee Debt</p>
                            <p>₦{thirdTermStatusForDebt === true ? Number(thirdTermPtaFeesToBePaid) - Number(thirdTermPtaFees) : `0`}</p>
                        </div>
                    </div>
                    <div className='row justify-content-between'>
                        <div className='col-lg-5 border-bottom d-flex justify-content-between py-3  align-items-center my-3'>
                            <div>
                                <span className='fw-bold'>SchoolFees:</span><span>₦{thirdTermSchoolFees}</span>
                            </div>
                            <div>
                                <button disabled={thirdTermStatusForDebt === false} className="btn" onClick={openModalForSchoolFee}>
                                    <FaPen />
                                </button>
                            </div>

                        </div>
                        <div className='col-lg-5 border-bottom d-flex justify-content-between align-items-center py-3  my-3'>
                            <div>
                                <span className='fw-bold'>PtaFee:</span><span>₦{thirdTermPtaFees}</span>
                            </div>
                            <div>
                                <button disabled={thirdTermStatusForDebt === false} className="btn" onClick={openModalForPtaFee}>
                                    <FaPen />
                                </button>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
            <div>
                <p>Result</p>
                {subjectCondition === 3 && <div className='w-75 mx-auto my-2 bg-white py-3'>
                    <p className='text-center'>{updateMessage}</p>
                </div>}
                <button onClick={addSubject} className="btn" style={{ color: "#ff6400" }}>
                    {subjectCondition === 2 ?
                        <>
                            <FaSpinner className="spin" /> Adding
                        </>
                        :
                        <>
                            <FaPlus /> Add Subject
                        </>}
                </button>
            </div>
            <div>
                <label className="from-label fw-bold ">Name :</label>
                <input type="text" ref={empty} className="w-100 form-control" onChange={(e) => setSubjectToBeAdded(e.target.value)} />
            </div>

            <div className="w-100 mx-auto mt-4 border-bottom"></div>
            <div className="form-control mt-4">
                <button className="btn"><FaSearch /></button>  <input type="text" onChange={(e) => searchFor(e)} placeholder="Search..." className="w-75 search" />
            </div>
            <div className="w-100 mx-auto mt-4 border-bottom"></div>

            {thirdTerm.map((student, id) => (
                < div className="w-100 mx-auto mt-4 border-top py-3">
                    <div className="d-flex justify-content-between">
                        <p className="fs-5" style={{ color: "#ff6400" }}>{student.subject}</p>
                        <div>
                            <button onClick={() => deleteSubject(student.subject)} className="btn btn-dark">Delete</button>
                            <button onClick={() => editName(student.subject)} className="btn btn-light">Edit</button>
                        </div>
                    </div>
                    <div>
                        <p className="text-center">Add a description to the value associated with the description</p>
                    </div>
                    <div>
                        <label htmlFor="" className="form-label">Description</label>
                        <input type="text" ref={empty} className="form-control" onChange={(e) => setValueName(e.target.value)} />

                        <label htmlFor="" className="form-label">Value</label>
                        <input type="text" ref={empty} className="form-control" onChange={(e) => setValuePoint(e.target.value)} />
                        <div className="my-4">
                            <button onClick={() => addValueToSubject(student.subject, id)} className="btn btn-success">Add Value {addValueSpinner === first + id && <FaSpinner className='spin' />} </button>
                        </div>

                    </div>

                    {student.resultNameXResultScore.map((info, sid) => (
                        < div >
                            <p>
                                {info.valueName}
                            </p>
                            <button className='btn btn-light' onClick={() => editValueName(student.subject, sid)}>Edit Value Name</button>
                            <div className="row justify-content-between">
                                <div className="col-lg-6 col-sm-12">
                                    <input type="text" className="form-control w-100" />
                                </div>

                                <div className="col-lg-6 col-sm-12 d-flex justify-content-end py-2">
                                    <button className="btn" onClick={() => deletePoint(info.valueName, sid)}>Delete</button>
                                    <button className="btn ">Save Changes</button>
                                </div>

                            </div>

                        </div>

                    ))}


                </div>
            )
            )}
        </>
    )
}

export default StudentThirdTerm