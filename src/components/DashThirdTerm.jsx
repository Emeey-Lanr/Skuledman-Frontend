import { useContext } from "react"
import { dashboardContext } from "./Dashboard"
const DashThirdTerm = () => {
    const {
        thirdTermTotalNumberOfStudent,
        totalAmountToBePaidSchoolFeeThirsTerm,

        ///school debt fee
        thirdTermDebt,

        ///SchoolFees Amount already paid

        studentSThirdTermPaid,

        ///PTA
        ///Total Amount to be paid pta fee

        totalAmountToBePaidPtaFeeThirdTerm,
        ///

        ///Pta Fees debt owned

        thirdTermDebtOwnedPta,

        //pta fee already paid
        thirdTermPaidPta,
    } = useContext(dashboardContext)
    return (
        <div className="setTerm row  mx-auto" style={{ background: "white" }} >
            <div className="col-lg-6 mt-5 mb-4">
                <p>Number of students</p>
                <div className="border-bottom mt-5">
                    {thirdTermTotalNumberOfStudent}
                </div>
            </div>
            <div className="col-lg-6 mt-5  mb-4">
                <p>Total Amount To Be Paid</p>
                <div className="border-bottom mt-5">
                    ₦  {(Number(totalAmountToBePaidSchoolFeeThirsTerm) + Number(totalAmountToBePaidPtaFeeThirdTerm)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </div>
            </div>
            <div className="col-lg-6 mt-5  mb-4">
                <p>Total Amount Owned</p>
                <div className="border-bottom mt-5">
                    ₦  {(Number(thirdTermDebt) + Number(thirdTermDebtOwnedPta)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </div>
            </div>
            <div className="col-lg-6 mt-5  mb-4">
                <p>Total School Fee To Be Paid</p>
                <div className="border-bottom mt-5">
                    ₦ {totalAmountToBePaidSchoolFeeThirsTerm.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </div>
            </div>
            <div className="col-lg-6 mt-5  mb-4">
                <p>Total PTA To Be Fees Paid</p>
                <div className="border-bottom mt-5">
                    ₦  {totalAmountToBePaidPtaFeeThirdTerm.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </div>
            </div>
            <div className="col-lg-6 mt-5  mb-4">
                <p>Total School Fees Paid</p>
                <div className="border-bottom mt-5">
                    ₦  {studentSThirdTermPaid.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </div>
            </div>
            <div className="col-lg-6 mt-5  mb-4">
                <p>Total PTA Fees Paid</p>
                <div className="border-bottom mt-5">
                    ₦ {thirdTermPaidPta.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </div>
            </div>



        </div >

    )
}

export default DashThirdTerm