import "../styles/landingpage.css"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
const LandingPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate("/signup")
        }, 6000)

    }, [])
    return (
        <div className="indexbody">
            <div className="indexbodySub">
                <div>
                    <div className="d-flex justify-content-center">
                        <div className="logo1">
                            <div></div>
                            <div></div>
                        </div>
                        <div className="logo2">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>

                    </div>
                    <div className="py-3">
                        <h1 className="text-light ">Skuledman</h1>
                        <span className="motto">"School management with ease"</span>
                    </div>

                </div>


            </div>
        </div>
    )

}

export default LandingPage