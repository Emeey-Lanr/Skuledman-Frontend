import { Route, Routes } from "react-router-dom"
import Dashboard from "./components/Dashboard";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Jss1 from "./components/Jss1";
import { useState, createContext } from "react";
import Studentboard from "./components/Studentboard";
import FirstTerm from "./components/FirstTerm";
import ResultTable from "./components/ResultTable";
import Register from "./components/Register";
import Login from "./components/Login";
export const appContext = createContext(null)
function App() {

  const [sidebarNone, setSidebarNone] = useState("sidebarNone")
  const [showBack, setShowBack] = useState(false)
  const [addSetModal, setAddSetModal] = useState(false)


  return (

    <appContext.Provider value={
      {
        sidebarNone,
        setSidebarNone,
        showBack,
        setShowBack,
        addSetModal,
        setAddSetModal
      }}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jss1" element={<Jss1 />} />
        <Route path="/studentSet" element={<Studentboard />} />
        <Route path="/studentProfile" element={<FirstTerm />} />
        <Route path="/studentResult" element={<ResultTable />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
      </Routes >
    </appContext.Provider>


  );
}

export default App;
