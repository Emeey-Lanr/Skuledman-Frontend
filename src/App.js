import { Route, Routes } from "react-router-dom"
import Dashboard from "./components/Dashboard";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Jss1 from "./components/Jss1";
import { useState, createContext, useEffect, useRef } from "react";
import Studentboard from "./components/Studentboard";
import StudenTermDetails from "./components/StudentTermDetails";
import ResultTable from "./components/ResultTable";
import Register from "./components/Register";
import Login from "./components/Login";
import Tokenverification from "./components/Tokenverification";
import SetDetails from "./components/SetDetails";
import schoolinfo from "./Data/schoolinfo"
import axios from "axios";
import Ss2 from "./components/Ss2";
import Ss3 from "./components/Ss3";
import Jss2 from "./components/Jss2";
import Jss3 from "./components/Jss3";
import Ss1 from "./components/Ss1";
import { useNavigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
export const appContext = createContext(null)
function App() {
  let navigate = useNavigate()
  //Runnning Modal, SideBar Logic
  const [sidebarNone, setSidebarNone] = useState("sidebarNone")
  const [logoCenter, setLogoCenter] = useState("justify-content-center")
  const [showBack, setShowBack] = useState(false)
  const [addSetModal, setAddSetModal] = useState(false)


  ///Running Rest Api Logic
  const [schoolUrl, setSchoolUrl] = useState("http://localhost:6463/school")
  const [setUrl, setSetUrl] = useState("http://localhost:6463/set")
  const [studentUrl, setStudentUrl] = useState("http://localhost:6463/student")
  const [whenDashboard, setWhenDashBoard] = useState(false)
  const [runWhenTrue, setRunWhenTrue] = useState(false)
  ///The states that gets injected in with all the set created by the school
  const [jss1Set, setJss1] = useState([])
  const [jss2Set, setJss2] = useState([])
  const [jss3Set, setJss3] = useState([])
  const [Sss1Set, setSss1] = useState([])
  const [Sss2Set, setSss2] = useState([])
  const [Sss3Set, setSss3] = useState([])

  ///2
  const [jss1Set2, set2Jss1] = useState([])
  const [jss2Set2, set2Jss2] = useState([])
  const [jss3Set2, set2Jss3] = useState([])
  const [Sss1Set2, set2Sss1] = useState([])
  const [Sss2Set2, set2Sss2] = useState([])
  const [Sss3Set2, set2Sss3] = useState([])

  const [jss1SetDashB, setJss1DashB] = useState({ set: "" })
  const [jss2SetDashB, setJss2DashB] = useState({ set: "" })
  const [jss3SetDashB, setJss3DashB] = useState({ set: "" })
  const [Sss1SetDashB, setSss1DashB] = useState({ set: "" })
  const [Sss2SetDashB, setSss2DashB] = useState({ set: "" })
  const [Sss3SetDashB, setSss3DashB] = useState({ set: "" })

  ///A fuction that makes the sidebar show 
  const showSideBar = () => {
    setSidebarNone("")
    setShowBack(true)
  }
  const hideSideBar = () => {
    setSidebarNone("sidebarNone")
    setShowBack(false)
  }


  ///School Details
  const [schoolDetails, setSchoolDetails] = useState({})
  const [one, setOne] = useState([])
  const [two, setTwo] = useState([])
  const [three, setThree] = useState([])
  const getSchoolDetailsEndpoint = `${schoolUrl}/edumanOtp`
  const getSchoolSet = `${setUrl}/getset`
  const [lastestSet, setLastestSet] = useState("")
  const [schoolIdentification, setSchoolIdentification] = useState("")
  const getSchoolDetails = () => {
    localStorage.navigatigation = 0
    axios.get(getSchoolDetailsEndpoint, {
      headers: {
        "Authorization": `bearer ${localStorage.eduManToken}`,
        "Content-Type": "application/json",
      }
    }).then((result) => {
      if (result.data.status) {
        setSchoolDetails(result.data.schoolDetails)
        setSchoolIdentification(result.data.schoolDetails._id)
        setRunWhenTrue(true)
        axios.get(getSchoolSet, {
          headers: {
            "Authorization": `bearers ${result.data.schoolDetails._id}`,
            "Content-Type": "application/json"
          }
        }).then((result) => {
          if (result.data.status) {
            setJss1(result.data.set1.reverse())
            setJss2(result.data.set2.reverse())
            setJss3(result.data.set3.reverse())
            setSss1(result.data.set4.reverse())
            setSss2(result.data.set5.reverse())
            setSss3(result.data.set6.reverse())
            if (result.data.set1.length > 0) {
              setJss1DashB(result.data.set1[result.data["set1"].length - 1])
              setLastestSet(result.data.set1[result.data["set1"].length - 1].set)
            }
            if (result.data.set2.length > 0) {
              setJss2DashB(result.data.set2[result.data["set2"].length - 1])
            }
            if (result.data.set3.length > 0) {
              setJss3DashB(result.data.set3[result.data["set3"].length - 1])
            }
            if (result.data.set4.length > 0) {
              setSss1DashB(result.data.set4[result.data["set4"].length - 1])
            }

            if (result.data.set5.length > 0) {
              setSss2DashB(result.data.set5[result.data["set5"].length - 1])
            }
            if (result.data.set6.length > 0) {
              setSss3DashB(result.data.set6[result.data["set6"].length - 1])
            }


            set2Jss1(result.data.set1.reverse())
            set2Jss2(result.data.set2.reverse())
            set2Jss3(result.data.set3.reverse())
            set2Sss1(result.data.set4.reverse())
            set2Sss2(result.data.set5.reverse())
            set2Sss3(result.data.set6.reverse())

          }
        })
      } else {
        navigate("/signin")
      }
    })
  }



  const [classType, setClassType] = useState("")


  // gets the set details
  const setDetails = (setid, schoolEmail, schoolId, set, classSet) => {
    const setIdentification = setid + "," + schoolId + "," + set + "," + classSet + "," + schoolEmail
    localStorage.setId = setIdentification
    localStorage.term = "setFirst"
    navigate("/setdetails")

  }
  const viewStudents = (setid, schoolEmail, schoolId, set, classSet) => {
    const setIdentification = setid + "," + schoolId + "," + set + "," + classSet + "," + schoolEmail
    localStorage.setId = setIdentification
    localStorage.term = "viewFirst"
    navigate("/studentSet")
  }
  const [deleteSetModal, setDeleteSetModal] = useState(false)
  const [deleteSetInfo, setDeleteSetInfo] = useState("")
  const deleteSet = (setid, schoolEmail, schoolId, set, classSet) => {
    const setIdentification = setid + "," + schoolId + "," + set + "," + classSet + "," + schoolEmail
    setDeleteSetInfo(setIdentification)
    setDeleteSetModal(true)

  }


  const viewStudentPersonalDetails = (id) => {
    localStorage.cs = id
    navigate("/studentProfile")
  }

  const [deleteLogicNumber, setDeleteLogicNumb] = useState(-1)
  const [delModalStatus, setDelModalStatus] = useState(-1)
  ///Navigating Page 
  const [navigatingCondition, setNavigationCondition] = useState("")

  const [thelastRoute, setLastRoute] = useState("/dashboard")
  const [dashboardStyleNumber, setDashboardStyleNumber] = useState(0)

  ///mail
  const [mailStatus, setMailStatus] = useState(false)
  const [mailInfo, setMailInfo] = useState("")
  const sendMail = (setid, schoolEmail, schoolId, set, classSet) => {
    setMailStatus(true)
    const setIdentification = setid + "," + schoolId + "," + set + "," + classSet + "," + schoolEmail
    setMailInfo(setIdentification)

  }



  return (

    <appContext.Provider value={
      {
        //Running MOdal LOGIC
        sidebarNone,
        showSideBar,
        hideSideBar,
        showBack,
        setShowBack,
        addSetModal,
        setAddSetModal,


        logoCenter,
        setLogoCenter,
        ///API FUCTIONS & Details
        getSchoolDetails,
        schoolDetails,
        setSchoolDetails,
        classType,
        setClassType,
        setWhenDashBoard,
        ///Set
        setJss1,
        setJss2,
        setJss3,
        setSss1,
        setSss2,
        setSss3,
        jss1Set,
        jss2Set,
        jss3Set,
        Sss1Set,
        Sss2Set,
        Sss3Set,

        //second

        jss1Set2,
        jss2Set2,
        jss3Set2,
        Sss1Set2,
        Sss2Set2,
        Sss3Set2,
        ///Dash Set
        jss1SetDashB,
        jss2SetDashB,
        jss3SetDashB,
        Sss1SetDashB,
        Sss2SetDashB,
        Sss3SetDashB,

        ///Fuctions Handling Set
        ///View Details of set
        setDetails,
        //View student
        viewStudents,
        deleteSet,
        deleteSetModal,
        setDeleteSetModal,
        deleteSetInfo,




        ///Endpoint 
        schoolUrl,
        setUrl,
        studentUrl,


        ///For view studentPersonal Details
        viewStudentPersonalDetails,
        ///Delete Modal
        setDeleteLogicNumb,
        deleteLogicNumber,
        delModalStatus,
        setDelModalStatus,
        thelastRoute,
        setLastRoute,
        dashboardStyleNumber,
        setDashboardStyleNumber,

        ///mail status
        mailStatus,
        setMailStatus,
        mailInfo,
        sendMail,
        lastestSet,
        schoolIdentification


      }}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jss1" element={<Jss1 />} />
        <Route path="/jss2" element={<Jss2 />} />
        <Route path="/jss3" element={<Jss3 />} />
        <Route path="/sss1" element={<Ss1 />} />
        <Route path="/sss2" element={<Ss2 />} />
        <Route path="/sss3" element={<Ss3 />} />
        <Route path="/studentSet" element={<Studentboard />} />
        <Route path="/studentProfile" element={<StudenTermDetails />} />
        <Route path="/studentResult" element={<ResultTable />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/token" element={<Tokenverification />} />
        <Route path="/setdetails" element={<SetDetails />} />
      </Routes >
    </appContext.Provider>


  );
}

export default App;
