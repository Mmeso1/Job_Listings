import man from "../assets/auth/man-on-chair.svg";
import InputField from "../components/auth-input";

const Login = () => {
  return (
    <div className="mx-27 my-16">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="font-semibold text-5xl text-[#303030]">
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
          <form action="" className="w-full">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-2xl font-medium text-[#303030]"
              >
                Email ID / Username
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter email id / username"
                className="p-3 border border-gray-200 rounded-lg"
              />
            </div>
            <InputField
              label="Password"
              placeholder="Enter password"
              password
            />
          </form>
          <img src={man} alt="login page image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
