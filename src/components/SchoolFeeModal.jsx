import { FaSpinner, FaTimes } from "react-icons/fa"
import { studenTermDetailContext } from './StudentTermDetails'
import { useContext } from "react"
const SchoolFeeModal = () => {
    const { setSchoolFeeModal } = useContext(studenTermDetailContext)
    return (
        <>
            <div className="w-100 position-fixed top-0 h-100 d-flex justify-content-center align-items-center" style={{ background: "#0000006b" }} >
                <div className="schoolFeeModal py-4 px-2">
                    <button className="btn" onClick={() => setSchoolFeeModal(false)}>
                        <FaTimes />
                    </button>
                    <p>jhgfd</p>
                    <input type="number" className="form-control" />
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-dark my-3">
                            Add Fee <FaSpinner className="spin" />
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default SchoolFeeModal