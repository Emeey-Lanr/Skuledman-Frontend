import React from 'react'
import { FaPlus, FaSearch, FaPen, FaSpinner } from "react-icons/fa"
import { studenTermDetailContext } from './StudentTermDetails'
import { useContext } from 'react'
const StudentFirstTerm = () => {
    const { activateSetStatus, setSchoolFeeModal, firstTermActivationMessage, firstTerMActivationStyle, setSubjectToBeAdded, addSubject, subjectCondition,
        updateMessage, firstTerm, addValueToSubject, setValueName, setValuePoint,
        deleteSubject, deletePoint
    } = useContext(studenTermDetailContext)
    const openSchoolModal = () => {
        setSchoolFeeModal(true)
    }

    return (
        <>
            <div className='d-flex justify-content-center my-2'>
                <button onClick={activateSetStatus} className={firstTerMActivationStyle}>{firstTermActivationMessage}</button>
            </div>
            <div>
                <div className='' style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd" }}>
                    <div className='w-100' >
                        <div className='w-100 fs-4  bg-light'>First Term School Fees</div>
                        <div className='w-100 bg-light py-2'>#20000</div>
                    </div>
                    <div>
                        <div className='w-100 fs-4  bg-white'>First Term Pta Fees</div>
                        <div className='w-50 bg-white'>#20000</div>
                    </div>
                </div>
                <div className='row justify-content-between'>
                    <div className='col-lg-5 border-bottom my-3-'>
                        <p>First Term School Fees Debt</p>
                        <p>#2000</p>
                    </div>
                    <div className='col-lg-5 border-bottom'>
                        <p>First Term PTA Fee Debt</p>
                        <p>#2000</p>
                    </div>
                </div>
                <div className='row justify-content-between'>
                    <div className='col-lg-5 border-bottom d-flex justify-content-between py-3  align-items-center my-3'>
                        <div>
                            <span className='fw-bold'>SchoolFees:</span><span>0.00</span>
                        </div>
                        <div>
                            <button className="btn" onClick={() => openSchoolModal()}>
                                <FaPen />
                            </button>
                        </div>

                    </div>
                    <div className='col-lg-5 border-bottom d-flex justify-content-between align-items-center py-3  my-3'>
                        <div>
                            <span className='fw-bold'>SchoolFees:</span><span>0.00</span>
                        </div>
                        <div>
                            <button className="btn">
                                <FaPen />
                            </button>
                        </div>
                    </div>

                </div>


            </div>
            <div className='border border-bottom'></div>

            <div>
                <p>Result</p>
                {subjectCondition === 3 && <div className='w-75 mx-auto my-2 bg-white py-3'>
                    <p className='text-center'>{updateMessage}</p>
                </div>}
                <button onClick={addSubject} className="btn" style={{ color: "#ff6400" }}>
                    {subjectCondition === 2 ?
                        <>
                            <FaSpinner /> Adding Subject
                        </>
                        :
                        <>
                            <FaPlus /> Add Subject
                        </>}
                </button>
            </div>
            <div>
                <label className="from-label fw-bold ">Name :</label>
                <input type="text" className="w-100 form-control" onChange={(e) => setSubjectToBeAdded(e.target.value)} />
            </div>

            <div className="w-100 mx-auto mt-4 border-bottom"></div>
            <div className="form-control mt-4">
                <button className="btn"><FaSearch /></button>  <input type="text" placeholder="Search..." className="w-75 search" />
            </div>
            <div className="w-100 mx-auto mt-4 border-bottom"></div>

            {firstTerm.map((student, id) => (
                < div className="w-100 mx-auto mt-4 border-top py-3">
                    <div className="d-flex justify-content-between">
                        <p className="fs-5" style={{ color: "#ff6400" }}>{student.subject}</p>
                        <div>
                            <button onClick={() => deleteSubject(student.subject)} className="btn btn-dark">Delete</button>
                        </div>
                    </div>
                    <div>
                        <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, sunt.</p>
                    </div>
                    <div>
                        <label htmlFor="" className="form-label">Description</label>
                        <input type="text" className="form-control" onChange={(e) => setValueName(e.target.value)} />

                        <label htmlFor="" className="form-label">Value</label>
                        <input type="text" className="form-control" onChange={(e) => setValuePoint(e.target.value)} />
                        <div className="my-4">
                            <button onClick={() => addValueToSubject(student.subject, id)} className="btn btn-success">Add Value</button>
                        </div>

                    </div>

                    {student.resultNameXResultScore.map((info, id) => (
                        < div >
                            <p>
                                {info.valueName}
                            </p>
                            <div className="row justify-content-between">
                                <div className="col-lg-6 col-sm-12">
                                    <input type="text" placeholder={info.valuePoint} className="form-control w-100" />
                                </div>

                                <div className="col-lg-6 col-sm-12 d-flex justify-content-end py-2">
                                    <button className="btn" onClick={() => deletePoint(info.valueName, id, student.subject)}>Delete</button>
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

export default StudentFirstTerm