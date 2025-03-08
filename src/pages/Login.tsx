import { Link } from "react-router-dom";
import man from "../assets/auth/man-on-chair.svg";
import InputField from "../components/auth-input";
import { google, linkedin, facebook } from "../assets";

const Login = () => {
  return (
    <div className="mx-27 my-16">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="font-semibold  text-4xl lg:5xl text-[#303030]">
          Login to your Account
        </h1>
        <p className="text-[#5E6670] text-xl">
          Welcome back! Select the below login methods.
        </p>
      </div>

      <div
        className="p-5 mx-auto rounded-4xl border border-gray-100"
        style={{
          boxShadow:
            "0px -2px 10px rgba(172, 178, 185, 0.03), 0px 10px 25px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="flex justify-between items-start gap-5 py-12 px-7">
          <div className="w-full">
            <form action="" className="w-full flex flex-col gap-10">
              <InputField label="Email" placeholder="Enter email" />
              <InputField
                label="Password"
                placeholder="Enter password"
                password
              />{" "}
              <div className="flex justify-between items-center -mt-6">
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="remember" id="remember me" />
                  <label
                    htmlFor="remember me"
                    className="text-[#5E6670] text-lg"
                  >
                    Remember me
                  </label>
                </div>

                <p className="text-[#2D31AB] font-light underline">
                  Forgot Password?
                </p>
              </div>
              <button className=" bg-[#6300b3] text-white text-2xl font-semibold border border-none p-2 rounded h-14 mt-6">
                Login
              </button>
            </form>
            <div className="flex items-center my-9">
              <span className="flex-1 border-b border-gray-300"></span>
              <p className="text-2xl text-[#5E6670] px-3 font-light">
                or login with
              </p>
              <span className="flex-1 border-b border-gray-300"></span>
            </div>

            <div className="flex justify-center items-center gap-5">
              <button className="cursor-pointer">
                <img
                  className="p-4 border border-gray-50 rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.2)] h-16"
                  src={google}
                  alt="google"
                />
              </button>
              <button className="cursor-pointer">
                <img
                  className="p-4 border border-gray-50 rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.2)] h-16"
                  src={facebook}
                  alt="facebook"
                />
              </button>
              <button className="cursor-pointer">
                <img
                  className="p-4 border border-gray-50 rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.2)] h-16"
                  src={linkedin}
                  alt="linkedin"
                />
              </button>
            </div>
            <p className="text-[#303030] text-lg text-center mt-10">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#2D31AB] underline">
                Register
              </Link>
            </p>
          </div>

          <img src={man} alt="login page image" className="hidden lg:block" />
        </div>
      </div>
    </div>
  );
};

export default Login;
