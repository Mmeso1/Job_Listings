import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import EmptyComponent from "./pages/EmptyComponent";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";
import logo from "./assets/logo.svg";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="flex justify-between items-center p-5 md:p-10 poppins bg-white shadow-md">
        <img src={logo} alt="logo" className="h-10 lg:max-xl:h-6" />

        {/* Hamburger Menu Button (Visible only on mobile) */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links (Hidden on mobile, shown when menu is open) */}
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex transition-all duration-300 ${
            isOpen ? "block shadow-md p-5" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-5 md:max-lg:gap-4 md:gap-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-link text-[#6300B3]" : "text-gray-700"
                }
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/find-jobs"
                className={({ isActive }) =>
                  isActive ? "active-link text-[#6300B3]" : "text-gray-700"
                }
                onClick={() => setIsOpen(false)}
              >
                Find Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="employers"
                className={({ isActive }) =>
                  isActive ? "active-link text-[#6300B3]" : "text-gray-700"
                }
                onClick={() => setIsOpen(false)}
              >
                Employers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="admin"
                className={({ isActive }) =>
                  isActive ? "active-link text-[#6300B3]" : "text-gray-700"
                }
                onClick={() => setIsOpen(false)}
              >
                Admin
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about-us"
                className={({ isActive }) =>
                  isActive ? "active-link text-[#6300B3]" : "text-gray-700"
                }
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Call to Action Buttons (Same visibility as nav) */}
        <section
          className={`absolute md:static top-[calc(100%+10px)] left-0 w-full md:w-auto bg-white md:bg-transparent flex flex-col md:flex-row items-center gap-4 p-5 md:p-0 ${
            isOpen ? "block shadow-md" : "hidden md:flex"
          }`}
        >
          <button className="bg-[#6300B3] text-white px-4 py-2 rounded-md">
            <NavLink to="contact-us" onClick={() => setIsOpen(false)}>
              Contact Us
            </NavLink>
          </button>
          <button className="bg-gray-200 px-4 py-2 rounded-md">
            <NavLink to="/login" onClick={() => setIsOpen(false)}>
              Login
            </NavLink>
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
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/find-jobs" element={<Jobs />} />
        <Route path="/employers" element={<EmptyComponent />} />
        <Route path="/admin" element={<EmptyComponent />} />
        <Route path="/about-us" element={<EmptyComponent />} />
        <Route path="/contact-us" element={<EmptyComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
