import SideBar from "./SideBar"
import "../styles/jss1.css"
import { FaSearch, FaPlus } from "react-icons/fa"
import { AiOutlineMenu } from "react-icons/ai"
import AddSetModal from "./AddSetModal"
const Jss1 = () => {
    return (
        <>
            <div>
                <SideBar />
                <div className="jss1 bg-light">
                    <h2 className="h2 py-2 px-2 w-75 mx-auto">JSS1</h2>
                    <div className="w-75 mx-auto d-flex border  form-control">
                        <span className="outlineNone">
                            <AiOutlineMenu />
                        </span>
                        {/* <span>
                            <FaSearch />
                        </span> */}
                        <input type="text" className="w-100 h-100 inputjss1" placeholder="Search..." />
                    </div>

                    <div className="d-flex justify-content-end w-75 mx-auto my-3">
                        <button className="btn btn-rounded" style={{ background: "#ff6400", color: "white" }}>
                            <FaPlus />Add Set
                        </button>
                    </div>
                    <div className="w-100 mx-auto border-bottom "> </div>
                    <div onClick={() => alert(30)} className="set my-4 d-flex justify-content-center align-items-center" style={{ cursor: "pointer" }}>
                        <p className="fs-5">2020/2004 <span>Set</span></p>
                    </div>
                </div>

            </div>
            <AddSetModal />


        </>

    )
}

export default Jss1