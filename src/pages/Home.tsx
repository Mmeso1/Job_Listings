import heroImg from "../assets/hero-img.svg";
import searchIcon from "../assets/Hero/fi_search.svg";
import mapIcon from "../assets/Hero/fi_map-pin.svg";
import Button from "../components/button";
import "../styles/home.css";

const Home = () => {
  return (
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
        <div className="search px-2 py-4 mt-10 rounded">
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
            <span style={{ color: "#6300B3" }}> Digital Marketing,</span> Video,
            Animation
          </p>
        </div>
      </div>
      <img src={heroImg} alt="hero image" />
    </section>
  );
};

export default Home;
