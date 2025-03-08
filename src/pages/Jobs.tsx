import Button from "../components/button";
import { search, experience, location } from "../assets";
import { cardDetails } from "../data/jobDetails";
import JobCard from "../components/job-card";
import JobModal from "../components/job-modal";
import { useState } from "react";
import { ICardDetails } from "../types/cardDetails";

const Jobs = () => {
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentJob, setCurrentJob] = useState<ICardDetails | null>(null);

  // Show first 10 jobs by default
  const displayedJobs = showAllJobs ? cardDetails : cardDetails.slice(0, 10);

  const openModal = (jobDetails: ICardDetails) => {
    setCurrentJob(jobDetails);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentJob(null);
  };

  return (
    <div className="container mx-auto lg:px-4 py-16">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="font-semibold text-5xl text-[#303030]">Job Search</h1>
        <p className="text-[#5E6670] text-xl">
          Search for your desired job matching your skills
        </p>
      </div>

      <div className="search px-4 py-6 mt-10 rounded-lg bg-[#F2F2F2] max-lg:w-full max-lg:flex max-lg:flex-col max-lg:gap-6">
        <div className="flex items-center pl-4 gap-2 mb-4 max-lg:gap-4 max-lg:w-full">
          <label htmlFor="job-title">
            <img src={search} alt="search icon" />
          </label>
          <input
            type="text"
            id="job-title"
            placeholder="Enter Job title"
            className="outline-none w-full py-2 px-4 border-b border-gray-300"
          />
        </div>

        <div className="flex items-center pl-4 gap-2 mb-4 max-lg:gap-4 max-lg:w-full">
          <label htmlFor="location">
            <img src={location} alt="location icon" />
          </label>
          <input
            type="text"
            id="location"
            placeholder="Enter location"
            className="outline-none w-full py-2 px-4 border-b border-gray-300"
          />
        </div>

        <div className="flex items-center pl-4 gap-2 mb-4 max-lg:gap-4 max-lg:w-full">
          <label htmlFor="experience">
            <img src={experience} alt="experience icon" />
          </label>
          <input
            type="text"
            id="experience"
            placeholder="Years of experience"
            className="outline-none w-full py-2 px-4 border-b border-gray-300"
          />
        </div>

        <div>
          <Button label="Search" theme="dark" />
        </div>
      </div>

      <div className="job-listing flex flex-col lg:flex-row items-start justify-between gap-20 mt-20">
        <div className="max-lg:w-full flex-1 w-7 gap-8 mb-4">
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

        <div className="job-list flex-2 max-lg:mx-auto">
          <div className="heading flex justify-between items-center">
            <p>All Jobs ({cardDetails.length})</p>
            <select name="options" id="">
              <option value="Popular">Popular</option>
            </select>
          </div>

          {cardDetails.length > 0 ? (
            <>
              <div className="job-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-8">
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
                    width="auto" // flexible width
                    onClick={() => openModal(card)}
                  />
                ))}
              </div>

              {/* Modal Component */}
              <JobModal
                showModal={showModal}
                jobDetails={currentJob}
                closeModal={closeModal}
              />
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
            </>
          ) : (
            <div className="text-center mt-8">No Jobs Found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
