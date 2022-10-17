
import SideBar from "./SideBar"
import "../styles/studentResult.css"
import { useState } from "react"
const ResultTable = () => {

    return (

        <>
            <div>
                <SideBar />
                <div className="studentResult bg-light">
                    <div>
                        <table className="table table-striped table-dark">

                        </table>

                    </div>


                </div>
            </div>

        </>
    )
}

export default ResultTable