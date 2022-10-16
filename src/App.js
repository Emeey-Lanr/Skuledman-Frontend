import { Route, Routes } from "react-router-dom"
import Dashboard from "./components/Dashboard";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Jss1 from "./components/Jss1";
function App() {



  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/jss1" element={<Jss1 />} />
    </Routes>

  );
}

export default App;
