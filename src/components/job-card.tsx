import bookmark from "../assets/BookmarkSimple.svg";
import mapIcon from "../assets/LightMapPin.svg";
import groupIcon from "../assets/group-img.png";
import Button from "./button";
import { ICardDetails } from "../types/cardDetails";

const JobCard: React.FC<ICardDetails> = ({
  role,
  type,
  salary,
  company,
  logo,
  location,
  applicants,
}) => {
  return (
    <div className="bg-[#F8F2FC] border border-[#EFE2F8] rounded-lg p-4 w-[365px]">
      <div className="top flex flex-col">
        <div className="flex justify-between">
          <h1 className="text-lg font-medium">{role}</h1>
          <img src={bookmark} alt="bookmark" />
        </div>

        <div className="flex gap-1 items-center mt-1">
          {company === "Google Inc." ? (
            <p className="font-semibold text-[#0BA02C] bg-[#E7F6EA] text-sm p-1">
              {type}
            </p>
          ) : (
            <p className="font-semibold text-[#6300B3] bg-[#F1E0FF] text-sm p-1">
              {type}
            </p>
          )}
          <p className="text-sm text-[#767F8C]">{salary}</p>
        </div>
      </div>
      <div className="middle flex items-center gap-3 mt-3 ml-1.5">
        <img src={logo} alt="google icon" className="h-auto w-10" />
        <div className="flex flex-col gap-1 items-start">
          <h1 className="font-medium">{company}</h1>
          <div className="flex gap-1 -m-0.5">
            <img src={mapIcon} className="w-5" alt="map icon" />
            <p className="light-p text-sm">{location}</p>
          </div>
        </div>
      </div>
      <div className="applicants flex items-center gap-2 my-9">
        <img src={groupIcon} alt="group icon" />
        <p className="text-sm">{applicants}</p>
      </div>
      <div className="bottom-btns flex justify-center gap-4">
        <Button label="View Details" theme="light" color="text-black" />
        <Button label="Apply now" theme="dark" />
      </div>
    </div>
  );
};

export default JobCard;
