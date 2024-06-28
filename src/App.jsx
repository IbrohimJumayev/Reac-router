import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./Home/Home";
import Services from "./services/Services";
import Project from "./Project";
import logo from "./assets/SELHONO.svg";

function App() {
  return (
    <Router>
      <div className="flex items-center max-w-5xl m-auto justify-between  mt-14">
        <div>
          <img className="max-600:hidden" src={logo} alt="" />
        </div>

        <div className="flex  max-600:gap-6 gap-10 justify-between pr-3">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Project />} />
        <Route
          path="*"
          element={
            <h1 className="text-3xl font-bold max-w-5xl m-auto text-center mt-7">
              404 - Not Found
            </h1>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
