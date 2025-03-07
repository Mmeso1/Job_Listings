import heroImg from "../assets/hero-img.svg";
import searchIcon from "../assets/Hero/fi_search.svg";
import mapIcon from "../assets/Hero/fi_map-pin.svg";
import apple from "../assets/apple-logo.svg";
import google from "../assets/google.svg";
import intel from "../assets/intel.svg";
import Button from "../components/button";
import JobCard from "../components/job-card";
import { ICardDetails } from "../types/cardDetails";
import "../styles/home.css";

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
              />
            </div>
            <div className="flex gap-2 border-l border-gray-400">
              <label htmlFor="location" className="pl-4">
                <img src={mapIcon} alt="map icon" />
              </label>
              <input type="text" id="location" placeholder="Location" />
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
          {cardDetails.map((card) => (
            <JobCard
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
    </>
  );
};

export default Home;
