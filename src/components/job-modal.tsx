import { IModal } from "../types/modal";

const JobModal = ({ showModal, jobDetails, closeModal }: IModal) => {
  if (!showModal) return null;

  return (
    <div className="modal fixed top-0 left-0 w-full h-full bg-white/50 flex justify-center items-center z-10">
      <div className=" relative modal-content border border-purple-400 bg-white p-8 mx-8 rounded-lg shadow-2xl lg:w-3/4 md:w-3/5 md:mx-0">
        <button
          className="close-btn absolute top-2 right-7 text-xl cursor-pointer"
          onClick={closeModal}
        >
          X
        </button>
        <h2 className="text-2xl font-semibold mb-7">{jobDetails?.role}</h2>
        <p className="mt-2 text-lg flex items-center gap-4 mb-4">
          {" "}
          <img
            src={jobDetails?.logo}
            alt="company logo"
            className="h-auto w-20"
          />{" "}
          {jobDetails?.company}
        </p>
        <p className="mt-2">Location: {jobDetails?.location}</p>
        <p className="mt-2">Salary: {jobDetails?.salary}</p>
        <p className="mt-2 font-semibold">Description:</p>
        <p className="mt-2">{jobDetails?.description}</p>
        <div className="flex gap-4 mt-4 flex-col lg:flex-row">
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Details</p>
            <ul className="list-disc">
              {jobDetails?.details?.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Benefits</p>
            <ul className="list-disc">
              {jobDetails?.benefits?.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobModal;
