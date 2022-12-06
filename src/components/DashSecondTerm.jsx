import { useContext } from "react"
import { dashboardContext } from "./Dashboard"
const DashSecondTerm = () => {
    const {

        secondTermTotalNumberOfStudent,

        totalAmountToBePaidSchoolFeeSecondTerm,

        ///school debt fee

        secondTermDebtOwned,

        studentSSecondTermPaid,


        ///PTA
        ///Total Amount to be paid pta fee

        totalAmountToBePaidPtaFeeSecondTerm,

        ///

        ///Pta Fees debt owned

        secondTermDebtOwnedPta,
        //pta fee already paid
        secondTermPaidPta,

    } = useContext(dashboardContext)
    return (
        <div className="setTerm row  mx-auto" style={{ background: "white" }} >
            <div className="col-lg-6 mt-5 mb-4">
                <p>Number of students</p>
                <div className="border-bottom mt-5">
                    {secondTermTotalNumberOfStudent}
                </div>
            </div>
            <div className="col-lg-6 mt-5  mb-4">
                <p>Total Amount To Be Paid</p>
                <div className="border-bottom mt-5">
                    ₦{(Number(totalAmountToBePaidSchoolFeeSecondTerm) + Number(totalAmountToBePaidPtaFeeSecondTerm)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </div>
            </div>
            <div className="col-lg-6 mt-5  mb-4">
                <p>Total Amount Owned</p>
                <div className="border-bottom mt-5">
                    ₦{(Number(secondTermDebtOwned) + Number(secondTermDebtOwnedPta)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </div>
            </div>
            <div className="col-lg-6 mt-5  mb-4">
                <p>Total School Fee To Be Paid</p>
                <div className="border-bottom mt-5">
                    ₦  {totalAmountToBePaidSchoolFeeSecondTerm}
                </div>
            </div>
            <div className="col-lg-6 mt-5  mb-4">
                <p>Total PTA To Be Fees Paid</p>
                <div className="border-bottom mt-5">
                    ₦ {totalAmountToBePaidPtaFeeSecondTerm.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </div>
            </div>
            <div className="col-lg-6 mt-5  mb-4">
                <p>Total School Fees Paid</p>
                <div className="border-bottom mt-5">
                    ₦{studentSSecondTermPaid.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </div>
            </div>
            <div className="col-lg-6 mt-5  mb-4">
                <p>Total PTA Fees Paid</p>
                <div className="border-bottom mt-5">
                    ₦{secondTermPaidPta.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </div>
            </div>



        </div >

    )
}

export default DashSecondTerm