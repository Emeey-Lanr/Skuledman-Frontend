import { useContext } from "react"
import { dashboardContext } from "./Dashboard"
const DashFirstTerm = () => {
    const {
        firstTermTotalNumberOfStudent,

        totalAmountToBePaidSchoolFeeFirstTerm,

        ///school debt fee
        firsTermDebtOwned,

        ///SchoolFees Amount already paid
        studentSFirstTermPaid,

        ///PTA
        ///Total Amount to be paid pta fee
        totalAmountToBePaidPtaFeeFirstTerm,


        ///Pta Fees debt owned
        firstTermDebtOwnedPta,

        //pta fee already paid

        firstTermPaidPta,

    } = useContext(dashboardContext)
    return (
        <div className="setTerm row  mx-auto" style={{ background: "white" }} >
            <div className="col-lg-6 mt-5 mb-4">
                <p>Number of students</p>
                <div className="border-bottom mt-5">
                    {firstTermTotalNumberOfStudent}
                </div>
            </div>
            <div className="col-lg-6 mt-5  mb-4">
                <p>Total Amount To Be Paid</p>
                <div className="border-bottom mt-5">
                    ₦{(Number(totalAmountToBePaidSchoolFeeFirstTerm) + Number(totalAmountToBePaidPtaFeeFirstTerm)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </div>
            </div>
            <div className="col-lg-6 mt-5  mb-4">
                <p>Total Amount Owned</p>
                <div className="border-bottom mt-5">
                    ₦{(firsTermDebtOwned + firstTermDebtOwnedPta).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </div>
            </div>
            <div className="col-lg-6 mt-5  mb-4">
                <p>Total School Fee To Be Paid</p>
                <div className="border-bottom mt-5">
                    ₦ {totalAmountToBePaidSchoolFeeFirstTerm.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </div>
            </div>
            <div className="col-lg-6 mt-5  mb-4">
                <p>Total PTA To Be Fees Paid</p>
                <div className="border-bottom mt-5">
                    ₦ {totalAmountToBePaidPtaFeeFirstTerm.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </div>
            </div>
            <div className="col-lg-6 mt-5  mb-4">
                <p>Total School Fees Paid</p>
                <div className="border-bottom mt-5">
                    ₦ {studentSFirstTermPaid.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </div>
            </div>
            <div className="col-lg-6 mt-5  mb-4">
                <p>Total PTA Fees Paid</p>
                <div className="border-bottom mt-5">
                    ₦ {firstTermPaidPta.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </div>
            </div>



        </div >

    )
}

export default DashFirstTerm