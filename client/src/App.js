import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing/Landing"
import Login from "./Components/Login-Register-Update/Login"
import Home from "./Components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          {/* <Route exact path="/register" element={<Register />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
