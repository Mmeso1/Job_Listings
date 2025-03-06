import "./App.css";
import Home from "./pages/Home";
import logo from "./assets/logo.svg";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-10 poppins">
        <img src={logo} alt="logo" />
        <nav className="navigation flex">
          <ul className="flex justify-center items-center gap-10">
            <li>
              <NavLink
                to="home"
                className={({ isActive }) =>
                  isActive ? "active-link" : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/empty"
                className={({ isActive }) =>
                  isActive ? "active-link" : undefined
                }
              >
                Find Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/empty"
                className={({ isActive }) =>
                  isActive ? "active-link" : undefined
                }
              >
                Employers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/empty"
                className={({ isActive }) =>
                  isActive ? "active-link" : undefined
                }
              >
                Admin
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/empty"
                className={({ isActive }) =>
                  isActive ? "active-link" : undefined
                }
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <section className="cta flex gap-4">
          <button>
            <NavLink to="/empty">Contact Us</NavLink>{" "}
          </button>
          <button>
            <NavLink to="/empty">Login</NavLink>
          </button>
        </section>
      </header>
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="home" element={<Home />} />
        {/* <Route path="login" element={<h1>Login</h1>} /> */}
      </Route>
    </Routes>
  );
}

export default App;
