import React, { useContext } from 'react'
import { FaPlus, FaSearch, FaSpinner, FaPen } from "react-icons/fa"
import { studenTermDetailContext } from './StudentTermDetails'
const StudentSecondTerm = () => {
    const { empty, first, activateSetStatus, secondTermActivationMessage, secondTerMActivationStyle, openModalForSchoolFee,
        openModalForPtaFee, secondTermSchoolFeesToBePaid, secondTermPtaFeesToBePaid, secondTermSchoolFees, secondTermPtaFees, setSubjectToBeAdded, addSubject,
        addValueSpinner, subjectCondition,
        updateMessage, setsecondTerm, secondTerm, secondTerm2, addValueToSubject, setValueName, setValuePoint, deleteSubject, deletePoint, secondTermStatusForDebt,
        editName, editValueName, changeValuePoint,
        setValuePointt, spinValueChangeCondition
    } = useContext(studenTermDetailContext)
    const searchSubject = (e) => {
        setsecondTerm(
            secondTerm2.filter((subject, id) => {
                if (subject["subject"].toUpperCase().indexOf(e.target.value.toUpperCase()) > -1) {
                    return subject
                }
            })
        )


    }
    return (
        <>

            <div className='px-2' style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd", marginBottom: "20px" }}>
                <div className='d-flex justify-content-center my-2'>
                    <button style={{ width: "100%" }} onClick={activateSetStatus} className={secondTerMActivationStyle}>{secondTermActivationMessage}</button>
                </div>
                <div>
                    <div className='' >
                        <div className='w-100 border-bottom py-3' >
                            <span className='fw-bold fs-6'>Second Term School Fees:</span><span>₦{Number(secondTermSchoolFeesToBePaid).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span>
                        </div>
                        <div className="w-100 py-3 border-bottom">
                            <span className='fw-bold fs-6'>Second Pta Fees:</span><span>₦{Number(secondTermPtaFeesToBePaid).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span>
                        </div>
                    </div>
                    <div className='row justify-content-between py-6'>
                        <div className='col-lg-5 border-bottom my-3-'>
                            <p className='fw-bold'>Second Term School Fees Debt</p>
                            <p>₦{secondTermStatusForDebt === true ? (Number(secondTermSchoolFeesToBePaid) - Number(secondTermSchoolFees)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : `0`}</p>
                        </div>
                        <div className='col-lg-5 border-bottom'>
                            <p className='fw-bold'>Second Term PTA Fee Debt</p>
                            <p>₦ {secondTermStatusForDebt === true ? (Number(secondTermPtaFeesToBePaid) - Number(secondTermPtaFees)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : `0`}</p>
                        </div>
                    </div>
                    <div className='row justify-content-between'>
                        <div className='col-lg-5 border-bottom d-flex justify-content-between py-3  align-items-center my-3'>
                            <div>
                                <span className='fw-bold'>SchoolFees:</span><span>₦{Number(secondTermSchoolFees).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span>
                            </div>
                            <div>
                                <button disabled={secondTermStatusForDebt === false} className="btn" onClick={openModalForSchoolFee}>
                                    <FaPen />
                                </button>
                            </div>

                        </div>
                        <div className='col-lg-5 border-bottom d-flex justify-content-between align-items-center py-3  my-3'>
                            <div>
                                <span className='fw-bold'>PtaFee:</span><span>₦{Number(secondTermPtaFees).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span>
                            </div>
                            <div>
                                <button disabled={secondTermStatusForDebt === false} className="btn" onClick={openModalForPtaFee}>
                                    <FaPen />
                                </button>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
            <div className='w-100 px-2' style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd" }}>
                <div>
                    <p>Result</p>
                    {subjectCondition === 3 && <div className='w-75 mx-auto my-2 bg-white py-3'>
                        <p className='text-center'>{updateMessage}</p>
                    </div>}
                    <button onClick={addSubject} className="btn" style={{ color: "#ff6400" }}>
                        {subjectCondition === 2 ?
                            <>
                                <FaSpinner className="spin" /> Adding Subject
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
                    <button className="btn"><FaSearch /></button>  <input onChange={(e) => searchSubject(e)} type="text" placeholder="Search..." className="w-75 search" />
                </div>
                <div className="w-100 mx-auto mt-4 border-bottom"></div>

                {secondTerm.map((student, id) => (
                    < div className="w-100 mx-auto mt-4 border-top py-3">
                        <div className="d-flex justify-content-between">
                            <p className="fs-5" style={{ color: "#ff6400" }}>{student.subject}</p>
                            <div>
                                <button onClick={() => deleteSubject(student.subject)} className="btn btn-dark">Delete</button>
                                <button onClick={() => editName(student.subject)} className="btn btn-light">Edit</button>
                            </div>
                        </div>
                        <div className="w-25 mx-auto bg-white py-3" style={{ background: "white", boxShadow: "1px 2px 5px #bdbdbd", marginBottom: "20px" }}>
                            <p className="text-center fw-bold">Total Score</p>
                            <p className="text-center">
                                {student.totalScore}
                            </p>
                        </div>
                        <div>
                            <p className="text-center">Add a description and a score</p>
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
                            < div className="bg-light mb-3 py-2 px-1">
                                <p className="fw-bold text-center">
                                    {`${student.subject} -- ${info.valueName}`}
                                </p>
                                <div className="py- d-flex justify-content-center">
                                    <button className='btn btn-light' onClick={() => editValueName(student.subject, sid)}>Edit Value Name</button>
                                </div>

                                <div className="px-2">
                                    <div className="w-100 my-2">
                                        <input type="text" placeholder={info.valuePoint} onChange={(e) => setValuePointt(e.target.value)} className="form-control w-100" />
                                    </div>
                                    <div className="d-flex justify-content-center py-2 bg-light w-100">
                                        <button className="btn btn-dark " onClick={() => deletePoint(info.valueName, sid, student.subject)}>Delete</button>
                                        <button className="btn btn-white" onClick={() => changeValuePoint(info.valueName, sid, student.subject)}>Save Changes {spinValueChangeCondition === sid + first && <FaSpinner className="spin" />}</button>
                                    </div>

                                </div>
                                <div className="w-100 mx-auto mt-4 border-bottom"></div>
                            </div>

                        ))}


                    </div>
                )
                )}
            </div>

        </>
    )
}

export default StudentSecondTerm