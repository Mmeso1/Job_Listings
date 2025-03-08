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
      <section className="hero flex justify-between items-center py-14 px-20">
        <div className="left  flex flex-col gap-4">
          <div className="hero-intro-text">
            <h1 className="text-[3.5rem]/16 font-medium text-[#303030]">
              Find a job that aligns with your interests and skills
            </h1>
            <p className="text-xl text-[#474C54] mt-4">
              Thousands of jobs in all the leading sector are waiting for you.
            </p>
          </div>
          <div className="search px-2 py-4 mt-10 rounded-lg">
            <div className="flex pl-4 gap-2">
              <label htmlFor="job-title">
                <img src={searchIcon} alt="map icon" />
              </label>
              <input
                type="text"
                id="job-title"
                placeholder="Job tittle, Keyword..."
                className="outline-none"
              />
            </div>
            <div className="flex gap-2 border-l border-gray-400">
              <label htmlFor="location" className="pl-4">
                <img src={mapIcon} alt="map icon" />
              </label>
              <input
                type="text"
                id="location"
                placeholder="Location"
                className="outline-none"
              />
            </div>
            <div>
              <Button label="Find Job" theme="dark" />
            </div>
          </div>
          <div className="text-sm">
            <p style={{ color: "#474C54" }}>
              <span style={{ color: "#9199A3" }}>Suggestion:</span> UI/UX
              Designer,Programing,{" "}
              <span style={{ color: "#6300B3" }}> Digital Marketing,</span>{" "}
              Video, Animation
            </p>
          </div>
        </div>
        <img src={heroImg} alt="hero image" />
      </section>
      <section className="featured-jobs text-center my-[9rem]">
        <h1 className="text-5xl font-semibold">Featured Jobs</h1>
        <p className="text-[22px] text-[#5E6670] mt-2 font-light">
          Choose jobs from the top employers and apply for the same.
        </p>
        <div className="job-cards flex justify-center gap-12 my-14">
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
      <section className="hiring-companies mx-24 flex flex-col justify-center mt-14 mb-20">
        <div className="flex items-center">
          <span></span>
          <p className="text-2xl text-[#5E6670] px-6 font-light">
            Top companies hiring now
          </p>
          <span></span>
        </div>
        <div className="flex items-center justify-between gap-12 mt-10">
          <img src={Google} alt="google name logo" />
          <img src={Microsoft} alt="microsoft logo name" />
          <img src={Flipkart} alt="flipcart logo name" />
          <img src={Youtube} alt="youtube logo name" />
          <img src={IBM} alt="ibm logo name" />
        </div>
      </section>
      <footer className="flex flex-col items-center px-20 py-27">
        <div className="top-footer flex justify-between items-start px-10 py-7 w-full">
          <div className="flex flex-col mt-3">
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
          <div className="quick-links">
            <h3 className="text-[#6300B3]">Quick Link </h3>
            <div className="flex flex-col gap-2">
              <Link to="">About</Link>
              <Link to="">Contact</Link>
              <Link to="">Admin</Link>
            </div>
          </div>
          <div className="candidate">
            <h3 className="text-[#6300B3]">Candidate</h3>
            <div className="flex flex-col gap-2">
              <Link to="">Browse Jobs </Link>
              <Link to="">Browse Employers</Link>
              <Link to="">Candidate Dashboard</Link>
              <Link to="">Saved Jobs</Link>
            </div>
          </div>
          <div className="employers">
            <h3 className="text-[#6300B3]">Employers</h3>
            <div className="flex flex-col gap-2">
              <Link to="">Post a Job</Link>
              <Link to="">Browse Candidates</Link>
              <Link to="">Employees Dashboard</Link>
              <Link to="">Applications</Link>
            </div>
          </div>
        </div>
        <div className="bottom-footer flex justify-between items-center w-full px-10 py-4 border-t border-gray-400">
          <p className="text-[#B781DF] text-sm">
            @ 2022 AlwaysApply - Job Portal. All rights Reserved
          </p>

          <div className="social-icons flex items-center gap-4">
            <img src={fb} alt="facebook logo" />
            <img src={yt} alt="youtube logo" />
            <img src={ig} alt="ig logo" />
            <img src={x} alt="twitter logo" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
