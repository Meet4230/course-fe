import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />{" "}
          <Route path="/login" element={<Login />} />{" "}
          <Route path="/dashboard" element={<Dashboard />} />{" "}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
