import Button from "../components/button";
import { search, experience, location } from "../assets";
import { cardDetails } from "../data/jobDetails";
import JobCard from "../components/job-card";
import { useState } from "react";

const Jobs = () => {
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

      <div className="job-listing flex items-start justify-between gap-20 mt-20">
        <div className="flex-1 flex-col gap-8 mb-4">
          <div className="heading flex justify-between mb-7">
            <p className="text-lg font-semibold">Filter</p>
            <button className="text-[#5E6670] cursor-pointer">Clear All</button>
          </div>
          <div className="filter p-4 bg-[#F7F7F7] border border-gray-200 rounded-lg">
            {/* Salary Range */}
            <div className="mb-4">
              <p className="text-sm font-semibold">Salary Range</p>
              <input type="range" min="0" max="100" className="w-full mt-2" />
            </div>

            {/* Divider */}
            <div className="border-b border-gray-300 my-4"></div>

            {/* Job Type */}
            <div className="mb-4">
              <p className="text-sm font-semibold my-8">Job Type</p>
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
              <p className="text-sm font-semibold my-8">Work Mode</p>
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
              <p className="text-sm font-semibold my-8">Experience Level</p>
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
                width="400px"
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
