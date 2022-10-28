import React from 'react'
import { FaPlus, FaSearch, FaPen } from "react-icons/fa"
import { studenTermDetailContext } from './StudentTermDetails'
import { useContext } from 'react'
const StudentFirstTerm = () => {
    const { activateSetStatus, setSchoolFeeModal, firstTermActivationMessage, firstTerMActivationStyle, setSubjectToBeAdded } = useContext(studenTermDetailContext)
    const openSchoolModal = () => {
        setSchoolFeeModal(true)
    }

    return (
        <>
            <div className='d-flex justify-content-center my-2'>
                <button onClick={activateSetStatus} className={firstTerMActivationStyle}>{firstTermActivationMessage}</button>
            </div>
            <div>
                <div className=''>
                    <div>
                        <p className='fs-4 fw-bold btn btn-dark'>First Term School Fees</p>
                        <p className='fw-bold btn btn-danger'>#20000</p>
                    </div>
                    <div>
                        <p className='fs-4 fw-bold btn btn-dark'>First Term Pta Fees</p>
                        <p className='fw-bold btn btn-danger'>#20000</p>
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
                <button className="btn" style={{ color: "#ff6400" }}><FaPlus /> Add Subject</button>
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
                            <input type="text" className="form-control w-100" />
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
                            <input type="text" className="form-control w-100" />
                        </div>

                        <div className="col-lg-6 col-sm-12 d-flex justify-content-end py-2">
                            <button className="btn">Delete</button>
                            <button className="btn ">Save Changes</button>
                        </div>

                    </div>


                </div>




            </div>
        </>
    )
}

export default StudentFirstTerm