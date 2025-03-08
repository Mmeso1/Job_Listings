import Button from "../components/button";
import { searchIcon, mapIcon } from "../assets";

const Jobs = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="font-semibold text-5xl text-[#303030]">Job Search</h1>
        <p className="text-[#5E6670] text-xl">
          Search for your desired job matching your skills
        </p>
      </div>

      <div className="search px-2 py-4 mt-10 rounded-lg">
        <div className="flex pl-4 gap-2 ">
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
    </div>
  );
};

export default Jobs;
