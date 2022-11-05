
import { useContext } from "react"
import { FaPlus, FaSearch, FaSpinner } from "react-icons/fa"
import { studenTermDetailContext } from "./StudentTermDetails"
const StudentThirdTerm = () => {
    const { first, activateSetStatus, thirdTermActivationMessage, thirdTerMActivationStyle, setSubjectToBeAdded, addSubject, subjectCondition,
        updateMessage, thirdTerm, addValueToSubject, setValueName, setValuePoint, deleteSubject, deletePoint,
    } = useContext(studenTermDetailContext)
    return (
        <>
            <div className='d-flex justify-content-center my-2'>
                <button onClick={activateSetStatus} className={thirdTerMActivationStyle}>{thirdTermActivationMessage}</button>
            </div>
            <div>
                <p>Result</p>
                {subjectCondition === 3 && <div className='w-75 mx-auto my-2 bg-white py-3'>
                    <p className='text-center'>{updateMessage}</p>
                </div>}
                <button onClick={addSubject} className="btn" style={{ color: "#ff6400" }}>
                    {subjectCondition === 2 ?
                        <>
                            <FaSpinner /> Adding
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

            {thirdTerm.map((student, id) => (
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
                                    <input type="text" className="form-control w-100" />
                                </div>

                                <div className="col-lg-6 col-sm-12 d-flex justify-content-end py-2">
                                    <button className="btn" onClick={() => deletePoint(info.valueName, id)}>Delete</button>
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