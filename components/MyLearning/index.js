import CourseList from "components/CourseList";
import Image from "next/image";

const MyLearning = (props) => {
  return (
    <>
      <div className="bg-white md:flex justify-center mx-4 md:mx-16 my-8 md:my-16 space-x-5 border border-[#EBEBEB] rounded-[14px]">
        <Image
          src="/images/my-learning-image.png"
          alt="image"
          width={280}
          height={280}
          className="rounded-xl mx-auto mt-5 md:mt-0 md:rounded-r-none"
        />
        <div className="space-y-4 py-5">
          <div className="pr-16 space-y-4">
            <p className="text-[#F49F57] text-base">Learning Path</p>
            <h1 className="text-2xl font-bold">
              Develop Your Creative Thinking and Innovation Skills
            </h1>
            <p className="text-[#666666] text-sm">
              Learn how to generate innovative solutions in work situations.
              Review how to develop, design, and create new applications, ideas,
              relationships, systems, and products. Discover how to use creative
              and alternative thinking to develop new ideas for and answers to
              work-related problems.
            </p>
          </div>
          <hr className="h-[1px] -ml-5 bg-[#EBEBEB]" />
          <div className="flex justify-start items-center space-x-5 text-xs">
            <p className="font-medium">Learning path details:</p>
            <div className="flex space-x-4 text-[#666666]">
              <span className="flex space-x-1">
                <Image
                  src="/icons/horizontal-list-icon.svg"
                  alt="timer"
                  height={16}
                  width={16}
                />
                <p className="font-bold">9 items</p>
                <p>of learning content</p>
              </span>
              <span className="flex space-x-1">
                <Image
                  src="/icons/timer-icon.svg"
                  alt="timer"
                  height={18}
                  width={18}
                />
                <p className="font-bold">4h 38m</p>
                <p>of content</p>
              </span>
              <span className="flex space-x-1">
                <Image
                  src="/icons/trophy-icon.svg"
                  alt="timer"
                  height={18}
                  width={18}
                  className="grayscale"
                />
                <p>Earn Certificate</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <CourseList />
    </>
  );
};

export default MyLearning;
