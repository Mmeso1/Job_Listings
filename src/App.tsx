import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import EmptyComponent from "./pages/EmptyComponent";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";
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
                to="/find-jobs"
                className={({ isActive }) =>
                  isActive ? "active-link" : undefined
                }
              >
                Find Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="employers"
                className={({ isActive }) =>
                  isActive ? "active-link" : undefined
                }
              >
                Employers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="admin"
                className={({ isActive }) =>
                  isActive ? "active-link" : undefined
                }
              >
                Admin
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about-us"
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
            <NavLink to="contact-us">Contact Us</NavLink>{" "}
          </button>
          <button>
            <NavLink to="/login">Login</NavLink>
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
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/find-jobs" element={<Jobs />} /> */
        <Route path="/employers" element={<EmptyComponent />} />
        <Route path="/admin" element={<EmptyComponent />} />
        <Route path="/about-us" element={<EmptyComponent />} />
        <Route path="/contact-us" element={<EmptyComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
