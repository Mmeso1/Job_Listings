import {
  heroImg,
  searchIcon,
  mapIcon,
  apple,
  google,
  intel,
  Google,
  Microsoft,
  Flipkart,
  Youtube,
  IBM,
  logo,
  fb,
  yt,
  ig,
  x,
} from "../assets";
import Button from "../components/button";
import JobCard from "../components/job-card";
import { ICardDetails } from "../types/cardDetails";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const cardDetails: ICardDetails[] = [
    {
      role: "Technical Support Specialist",
      type: "PART-TIME",
      salary: "20,000 INR - 25,000 INR",
      company: "Google Inc.",
      logo: google,
      location: "New Delhi, India",
      applicants: "10+ applicants",
    },
    {
      role: "Senior UI/UX Designer",
      type: "FULL-TIME",
      salary: "$30,000 - $55,000",
      company: "Apple",
      logo: apple,
      location: "Boston, USA",
      applicants: "9+ applicants",
    },
    {
      role: "Marketing Officer",
      type: "PART-TIME",
      salary: "15,000 INR - 35,000 INR",
      company: "Intel Corp",
      logo: intel,
      location: "Bangalore, India",
      applicants: "30+ applicants",
    },
  ];
  return (
    <>
      <section className="hero flex flex-col md:flex-row justify-between items-center py-14 md:py-24 px-8 md:px-20">
        <div className="left flex flex-col gap-4 w-full lg:w-1/2">
          <div className="hero-intro-text">
            <h1 className="text-[3.5rem]/16 font-medium text-[#303030]">
              Find a job that aligns with your interests and skills
            </h1>
            <p className="text-xl text-[#474C54] mt-4">
              Thousands of jobs in all the leading sectors are waiting for you.
            </p>
          </div>

          <div className="search px-2 py-4 mt-10 rounded-lg bg-white shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
              <div className="flex items-center pl-4 mb-5 sm:mb-0">
                <label htmlFor="job-title">
                  <img src={searchIcon} alt="search icon" />
                </label>
                <input
                  type="text"
                  id="job-title"
                  placeholder="Job title, Keyword..."
                  className="outline-none w-full pl-2"
                />
              </div>
              <div className="flex items-center pl-4 sm:mb-0 sm:border-l sm:border-gray-400 sm:pl-4">
                <label htmlFor="location">
                  <img src={mapIcon} alt="map icon" />
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="Location"
                  className="outline-none w-full pl-2"
                />
              </div>
            </div>
            <div className="flex justify-center sm:justify-start">
              <Button label="Find Job" theme="dark" />
            </div>
          </div>

          <div className="text-sm mt-6">
            <p className="text-[#474C54]">
              <span className="text-[#9199A3]">Suggestion:</span> UI/UX
              Designer, Programming,{" "}
              <span className="text-[#6300B3]">Digital Marketing,</span> Video,
              Animation
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <img
          src={heroImg}
          alt="hero image"
          className="hidden lg:block w-full md:w-1/2"
        />
      </section>

      <section className="featured-jobs text-center my-[9rem] px-8 md:px-2">
        <h1 className="text-5xl font-semibold">Featured Jobs</h1>
        <p className="text-[22px] text-[#5E6670] mt-2 font-light">
          Choose jobs from the top employers and apply for the same.
        </p>

        {/* Responsive Job Cards */}
        <div className="job-cards flex flex-wrap justify-center gap-6 md:gap-3 my-14 px-8 md:px-2">
          {cardDetails.map((card, index) => (
            <JobCard
              key={index}
              role={card.role}
              type={card.type}
              salary={card.salary}
              company={card.company}
              logo={card.logo}
              location={card.location}
              applicants={card.applicants}
            />
          ))}
        </div>

        <p className="text-xl text-[#6300B3] border-b-2 border-b-purple-500 w-auto inline-block cursor-pointer">
          View all
        </p>
      </section>

      <section className="hiring-companies mx-6 md:mx-24 flex flex-col justify-center mt-14 mb-20">
        <div className="flex items-center justify-center">
          <span></span>
          <p className="text-2xl text-[#5E6670] px-6 font-light text-center">
            Top companies hiring now
          </p>
          <span></span>
        </div>

        {/* Responsive Logo Section */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mt-10">
          <img src={Google} alt="google name logo" className="w-24 md:w-auto" />
          <img
            src={Microsoft}
            alt="microsoft logo name"
            className="w-24 md:w-auto"
          />
          <img
            src={Flipkart}
            alt="flipkart logo name"
            className="w-24 md:w-auto"
          />
          <img
            src={Youtube}
            alt="youtube logo name"
            className="w-24 md:w-auto"
          />
          <img src={IBM} alt="ibm logo name" className="w-24 md:w-auto" />
        </div>
      </section>

      <footer className="flex flex-col items-center px-6 md:px-20 py-10 md:py-27">
        <div className="top-footer flex flex-col md:flex-row justify-between items-start px-10 py-7 w-full">
          {/* Logo and Contact Section */}
          <div className="flex flex-col mt-3 mb-8 md:mb-0">
            <img src={logo} alt="logo" className="w-[180px]" />
            <p className="text-[#5E6670] text-lg font-light mt-7 mb-4">
              Call now:{" "}
              <span className="text-[#AE71DB] font-normal">+91 9591776078</span>
            </p>
            <p className="text-[#767F8C] text-sm font-light w-56">
              456 Chandni Chowk Street, Near Red Fort, Old Delhi, New Delhi,
              Delhi 110006, India
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="quick-links mb-8 md:mb-0">
            <h3 className="text-[#6300B3]">Quick Link</h3>
            <div className="flex flex-col gap-2">
              <Link to="">About</Link>
              <Link to="">Contact</Link>
              <Link to="">Admin</Link>
            </div>
          </div>

          {/* Candidate Section */}
          <div className="candidate mb-8 md:mb-0">
            <h3 className="text-[#6300B3]">Candidate</h3>
            <div className="flex flex-col gap-2">
              <Link to="">Browse Jobs </Link>
              <Link to="">Browse Employers</Link>
              <Link to="">Candidate Dashboard</Link>
              <Link to="">Saved Jobs</Link>
            </div>
          </div>

          {/* Employers Section */}
          <div className="employers mb-8 md:mb-0">
            <h3 className="text-[#6300B3]">Employers</h3>
            <div className="flex flex-col gap-2">
              <Link to="">Post a Job</Link>
              <Link to="">Browse Candidates</Link>
              <Link to="">Employees Dashboard</Link>
              <Link to="">Applications</Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bottom-footer flex flex-col md:flex-row justify-between items-center w-full px-10 py-4 border-t border-gray-400">
          <p className="text-[#B781DF] text-sm text-center md:text-left">
            @ 2022 AlwaysApply - Job Portal. All rights Reserved
          </p>

          <div className="social-icons flex items-center gap-4 mt-4 md:mt-0">
            <img src={fb} alt="facebook logo" className="w-6" />
            <img src={yt} alt="youtube logo" className="w-6" />
            <img src={ig} alt="ig logo" className="w-6" />
            <img src={x} alt="twitter logo" className="w-6" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
