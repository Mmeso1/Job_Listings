import Button from "../components/button";
import { search, experience, location } from "../assets";
import {
  google,
  apple,
  intel,
  facebook,
  linkedin,
  IBM,
  Microsoft,
  x,
  amazon,
  zoom,
  shopify,
  wix,
  cisco,
  github,
} from "../assets";
import { ICardDetails } from "../types/cardDetails";
import JobCard from "../components/job-card";
import { useState } from "react";

const Jobs = () => {
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
    {
      role: "Senior UI/UX Designer",
      type: "FULL-TIME",
      salary: "$30,000 - $55,00",
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
    {
      role: "Marketing Officer",
      type: "PART-TIME",
      salary: "15,000 INR - 35,000 INR",
      company: "Intel Corp",
      logo: intel,
      location: "Bangalore, India",
      applicants: "30+ applicants",
    },
    {
      role: "Frontend Developer",
      type: "FULL-TIME",
      salary: "$60,000 - $80,000",
      company: "Facebook",
      logo: facebook, // Replace with your actual logo image for Microsoft
      location: "Seattle, USA",
      applicants: "20+ applicants",
    },
    {
      role: "Backend Developer",
      type: "FULL-TIME",
      salary: "$70,000 - $100,000",
      company: "X",
      logo: x, // Replace with your actual logo image for Amazon
      location: "London, UK",
      applicants: "15+ applicants",
    },
    {
      role: "Data Scientist",
      type: "PART-TIME",
      salary: "$50,000 - $70,000",
      company: "Facebook",
      logo: facebook, // Replace with your actual logo image for Facebook
      location: "Menlo Park, USA",
      applicants: "25+ applicants",
    },
    {
      role: "Product Manager",
      type: "FULL-TIME",
      salary: "$80,000 - $120,000",
      company: "Amazon",
      logo: amazon,
      location: "San Francisco, USA",
      applicants: "40+ applicants",
    },
    {
      role: "Mobile Developer",
      type: "FULL-TIME",
      salary: "$70,000 - $90,000",
      company: "Microsoft",
      logo: Microsoft,
      location: "Stockholm, Sweden",
      applicants: "18+ applicants",
    },
    {
      role: "Cloud Engineer",
      type: "FULL-TIME",
      salary: "$90,000 - $130,000",
      company: "IBM",
      logo: IBM,
      location: "Austin, USA",
      applicants: "22+ applicants",
    },
    {
      role: "HR Manager",
      type: "FULL-TIME",
      salary: "$60,000 - $85,000",
      company: "Wix",
      logo: wix,
      location: "San Francisco, USA",
      applicants: "35+ applicants",
    },
    {
      role: "Project Manager",
      type: "FULL-TIME",
      salary: "$75,000 - $100,000",
      company: "Github",
      logo: github,
      location: "Palo Alto, USA",
      applicants: "14+ applicants",
    },
    {
      role: "DevOps Engineer",
      type: "FULL-TIME",
      salary: "$80,000 - $110,000",
      company: "LinkedIn",
      logo: linkedin,
      location: "Sunnyvale, USA",
      applicants: "50+ applicants",
    },
    {
      role: "SEO Specialist",
      type: "PART-TIME",
      salary: "$30,000 - $50,000",
      company: "Cisco",
      logo: cisco,
      location: "San Francisco, USA",
      applicants: "10+ applicants",
    },
    {
      role: "Content Writer",
      type: "FULL-TIME",
      salary: "$40,000 - $60,000",
      company: "Wix",
      logo: wix,
      location: "Tel Aviv, Israel",
      applicants: "12+ applicants",
    },
    {
      role: "Database Administrator",
      type: "FULL-TIME",
      salary: "$70,000 - $90,000",
      company: "Shopify",
      logo: shopify,
      location: "Redwood City, USA",
      applicants: "30+ applicants",
    },
    {
      role: "Systems Analyst",
      type: "FULL-TIME",
      salary: "$60,000 - $85,000",
      company: "Zoom",
      logo: zoom,
      location: "Walldorf, Germany",
      applicants: "28+ applicants",
    },
    {
      role: "Network Engineer",
      type: "PART-TIME",
      salary: "$50,000 - $75,000",
      company: "Cisco",
      logo: cisco,
      location: "San Jose, USA",
      applicants: "20+ applicants",
    },
    {
      role: "Security Analyst",
      type: "FULL-TIME",
      salary: "$80,000 - $120,000",
      company: "Shopify",
      logo: shopify,
      location: "Austin, USA",
      applicants: "10+ applicants",
    },
    {
      role: "Full-Stack Developer",
      type: "FULL-TIME",
      salary: "$90,000 - $120,000",
      company: "Google Inc.",
      logo: google,
      location: "San Jose, USA",
      applicants: "8+ applicants",
    },
    {
      role: "Web Designer",
      type: "PART-TIME",
      salary: "$25,000 - $40,000",
      company: "Shopify",
      logo: shopify,
      location: "Ottawa, Canada",
      applicants: "18+ applicants",
    },
    {
      role: "Game Developer",
      type: "FULL-TIME",
      salary: "$60,000 - $85,000",
      company: "Intel",
      logo: intel,
      location: "Cary, USA",
      applicants: "25+ applicants",
    },
    {
      role: "AI Engineer",
      type: "FULL-TIME",
      salary: "$100,000 - $150,000",
      company: "Github",
      logo: github,
      location: "Santa Clara, USA",
      applicants: "40+ applicants",
    },
  ];

  const [showAllJobs, setShowAllJobs] = useState(false);

  // Show first 10 jobs by default
  const displayedJobs = showAllJobs ? cardDetails : cardDetails.slice(0, 10);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="font-semibold text-5xl text-[#303030]">Job Search</h1>
        <p className="text-[#5E6670] text-xl">
          Search for your desired job matching your skills
        </p>
      </div>

      <div
        className="search px-2 py-4 mt-10 rounded-lg"
        style={{ background: "#F2F2F2" }}
      >
        <div className="flex items-center pl-4 gap-2 ">
          <label htmlFor="job-title">
            <img src={search} alt="map icon" />
          </label>
          <input
            type="text"
            id="job-title"
            placeholder="Enter Job title"
            className="outline-none"
          />
        </div>
        <div className="flex items-center gap-2 border-l border-gray-400">
          <label htmlFor="location" className="pl-4">
            <img src={location} alt="map icon" />
          </label>
          <input
            type="text"
            id="location"
            placeholder="Enter location"
            className="outline-none"
          />
        </div>
        <div className="flex items-center gap-2 border-l border-gray-400">
          <label htmlFor="experience" className="pl-4">
            <img src={experience} alt="map icon" />
          </label>
          <input
            type="text"
            id="experience"
            placeholder="Years of experience"
            className="outline-none"
          />
        </div>
        <div>
          <Button label="Search" theme="dark" />
        </div>
      </div>

      <div className="job-listing flex items-start justify-between mt-10">
        <div className="filter w-full lg:w-1/4 p-4 bg-gray-100 rounded-lg">
          <div className="heading flex justify-between items-center mb-4">
            <p className="text-lg font-semibold">Filters</p>
            <button className="text-[#5E6670]">Clear All</button>
          </div>

          {/* Salary Range */}
          <div className="mb-4">
            <p className="text-sm font-semibold">Salary Range</p>
            <input type="range" min="0" max="100" className="w-full mt-2" />
          </div>

          {/* Divider */}
          <div className="border-b border-gray-300 my-4"></div>

          {/* Job Type */}
          <div className="mb-4">
            <p className="text-sm font-semibold">Job Type</p>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Full-Time
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Part-Time
            </label>
          </div>

          {/* Divider */}
          <div className="border-b border-gray-300 my-4"></div>

          {/* Work Mode */}
          <div className="mb-4">
            <p className="text-sm font-semibold">Work Mode</p>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Remote
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> On-Site
            </label>
          </div>

          {/* Divider */}
          <div className="border-b border-gray-300 my-4"></div>

          {/* Experience Level */}
          <div className="mb-4">
            <p className="text-sm font-semibold">Experience Level</p>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Junior
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Mid
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Senior
            </label>
          </div>
        </div>

        <div className="job-list">
          <div className="heading flex justify-between items-center">
            <p>All Jobs ({cardDetails.length})</p>
            <select name="options" id="">
              <option value="Popular">Popular</option>
            </select>
          </div>

          <div className="job-cards grid grid-cols-1 md:grid-cols-2 gap-16 mt-8">
            {displayedJobs.map((card, index) => (
              <JobCard
                key={index}
                applicants={card.applicants}
                company={card.company}
                location={card.location}
                logo={card.logo}
                role={card.role}
                salary={card.salary}
                type={card.type}
              />
            ))}
          </div>

          {/* View More Button */}
          {!showAllJobs && (
            <div className="mt-6 text-center">
              <p
                className="text-[#6300B3] underline cursor-pointer"
                onClick={() => setShowAllJobs(true)}
              >
                View More
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
