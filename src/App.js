import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Create from "./component/Create";
import Read from "./component/Read";
import Update from "./component/Update";
import LogIn from "./component/LogIn";
import SignUp from "./component/SignUp";

const PrivatRouter = ()=>{
  const token = localStorage.getItem('token')
  return token ? <Outlet/>:<Navigate to={"/login"} />
}

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<PrivatRouter/>}>
        <Route path="/" element={<Home />} />
      </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/read/:id" element={<Read />} />
      </Routes>
    </>
  );
}

export default App;
