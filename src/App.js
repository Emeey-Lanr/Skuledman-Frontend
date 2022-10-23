import { Route, Routes } from "react-router-dom"
import Dashboard from "./components/Dashboard";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Jss1 from "./components/Jss1";
import { useState, createContext, useEffect } from "react";
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
  const getSchoolDetailsEndpoint = `${schoolUrl}/edumanOtp`
  const getSchoolSet = `${setUrl}/getset`
  const getSchoolDetails = () => {
    axios.get(getSchoolDetailsEndpoint, {
      headers: {
        "Authorization": `bearer ${localStorage.eduManToken}`,
        "Content-Type": "application/json",
      }
    }).then((result) => {
      if (result.data.status) {
        setSchoolDetails(result.data.schoolDetails)
        setRunWhenTrue(true)
        axios.get(getSchoolSet, {
          headers: {
            "Authorization": `bearers ${result.data.schoolDetails._id}`,
            "Content-Type": "application/json"
          }
        }).then((result) => {
          if (result.data.status) {
            setJss1(result.data.set1)
            setJss2(result.data.set2)
            setJss3(result.data.set3)
            setSss1(result.data.set4)
            setSss2(result.data.set5)
            setSss3(result.data.set6)
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
    const setIdentification = setid + "," + schoolId + "," + set + "," + classSet
    localStorage.setId = setIdentification
    localStorage.term = "setFirst"
    navigate("/setdetails")

  }
  const viewStudents = (setid, schoolEmail, schoolId, set, classSet) => {
    const setIdentification = setid + "," + schoolId + "," + set + "," + classSet
    localStorage.setId = setIdentification
    localStorage.term = "viewFirst"
    navigate("/studentSet")
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
        jss1Set,
        jss2Set,
        jss3Set,
        Sss1Set,
        Sss2Set,
        Sss3Set,
        ///Fuctions Handling Set
        ///View Details of set
        setDetails,
        //View student
        viewStudents,



        ///Endpoint 
        schoolUrl,
        setUrl,
        studentUrl
      }}>
      <Routes>
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
