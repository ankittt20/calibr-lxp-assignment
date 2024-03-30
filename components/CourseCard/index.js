import Image from "next/image";
import React from "react";

const CourseCard = ({ category, title, description, progress, duration }) => {
  return (
    <div className="bg-white w-full border border-[#EBEBEB] rounded-xl p-5 mb-4">
      <div className="flex items-center pb-2">
        <div className="pr-4 w-[88%]">
          <h5
            className={
              "text-sm font-medium mb-2 " +
              (category === "Course" ? "text-[#0068FF]" : "text-[#FF5C64]")
            }
          >
            {category}
          </h5>
          <h3 className="font-semibold text-xl">{title}</h3>
          <p className="text-[#666666] text-[16px]">{description}</p>
        </div>

        <div className="">
          {progress === "Completed" && (
            <div className="bg-[#ECFFEF] text-[#189F2C] text-xs rounded-full px-3 py-2">
              Completed
            </div>
          )}
          {progress === "In Progress" && (
            <div className="bg-[#FFF1D6] text-[#FEBA31] text-xs rounded-full px-3 py-2">
              In Progress
            </div>
          )}
          {progress === "Not Started" && (
            <Image
              src="/icons/play-icon.svg"
              alt="play button"
              width={30}
              height={30}
              className="ml-6"
            />
          )}
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Image
          src="/icons/timer-icon.svg"
          alt="timer icon"
          width={16}
          height={16}
        />
        <div className="text-sm text-gray-500 flex space-x-1">
          <p className="font-bold">{duration}</p>
          <p>of content</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
