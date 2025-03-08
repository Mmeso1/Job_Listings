import WhatsappLogo from "../assets/whatsapp.svg";
import InputField from "../components/auth-input";
import { google, linkedin, facebook } from "../assets";

const Register = () => {
  return (
    <div className="mx-27 my-16">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="font-semibold text-4xl lg:5xl text-[#303030]">
          Registration Form
        </h1>
        <p className="text-[#5E6670] text-xl">
          Register to apply for jobs of your choice all over the world.
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
              <InputField
                label="Full name"
                placeholder="Enter your full name"
                required
              />
              <InputField
                label="Email ID"
                placeholder="Enter your email id"
                helperText="Job notifications will be sent to this email id"
                required
              />
              <InputField
                label="Password"
                placeholder="(Minimum 6 characters)"
                helperText="Remember your password"
                required
              />
              <InputField
                label="Mobile number"
                placeholder="Enter your mobile number"
                helperText="Recruiters will contact you on this number"
                required
              />
              <div className="flex gap-2 mt-6">
                <input type="checkbox" name="remember" id="remember me" />
                <label
                  htmlFor="remember me"
                  className="text-[#5E6670] text-lg flex items-center"
                >
                  Send me important updates & promotions via SMS, email, and{" "}
                  <span>
                    <img
                      src={WhatsappLogo}
                      className="h-8"
                      alt="whatsapp logo"
                    />
                  </span>{" "}
                  WhatsApp
                </label>
              </div>
              <p className="text-[#717B9E] font-light text-lg text-center mt-2 self-start">
                By clicking Register, you agree to the{" "}
                <span className="text-[#275DF5]">Terms and Conditions</span>&{" "}
                <span className="text-[#275DF5]">Privacy Policy</span> of
                AlwaysApply.com
              </p>
              <button className=" bg-[#6300b3] text-white text-2xl font-semibold border border-none px-7 rounded h-14 self-start">
                Register now
              </button>
            </form>

            <div className="flex items-center mx-auto w-1/2 my-20">
              <span className="flex-1 border-b border-gray-300"></span>
              <p className="text-2xl text-[#5E6670] px-3 font-light">
                or sign up with
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
