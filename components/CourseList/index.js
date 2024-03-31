import CourseCard from "components/CourseCard";
import ProgressBar from "components/ProgressBar";
import Image from "next/image";

const CourseList = () => {
  const courses = [
    {
      id: 1,
      category: "Course",
      title: "Think Creatively",
      description:
        "Learn behaviors and techniques that can help you be more creative as an individual and as part of a team.",
      progress: "Completed",
      duration: "45m",
    },
    {
      id: 2,
      category: "Video",
      title: "Creativity: Generate Ideas in Greater Quantity and Quality",
      description:
        "Challenges preconceived notions about creativity and provides valuable tools that will help unlock this skill to help you generate better ideas faster.",
      progress: "In Progress",
      duration: "55m",
    },
    {
      id: 3,
      category: "Course",
      title: "Creativity Boot Camp 2: Creative Fuel",
      description:
        "Think you're not creative? Think again! Take these five interactive training exercises designed to help you and your team find fuel for more creativity.",
      progress: "Not Started",
      duration: "1h 33m",
    },
    {
      id: 4,
      category: "Course",
      title: "Building Creative Organizations",
      description:
        "Get strategies for unleashing creativity, innovation, and resilience in your organization, both at an individual and structural level.",
      progress: "Not Started",
      duration: "1h",
    },
    {
      id: 5,
      category: "Course",
      title: "Unlock Your Team's Creativity",
      description:
        "Discover tried-and-true techniques for unlocking creativity from yourself and your teams. Apply creativity to work challenges and identify opportunities for growth and innovation.",
      progress: "Not Started",
      duration: "45m",
    },
    {
      id: 6,
      category: "Video",
      title: "Enhancing Team Innovation",
      description:
        "Learn how to cultivate innovation and creativity on your team.",
      progress: "Not Started",
      duration: "1h",
    },
    {
      id: 7,
      category: "Course",
      title: "Jeff Dyer on Innovation",
      description:
        "Learn how to cultivate innovation and creativity on your team.",
      progress: "Not Started",
      duration: "1h 45m",
    },
  ];

  return (
    <div className="justify-start md:w-[800px] mx-4 md:mx-16 pb-24 px-4">
      <div className="flex justify-between items-center mb-10">
        <div className="flex space-x-5 items-center">
          <div className="ml-1 flex justify-center items-center h-8 w-8 rounded-full border-2 border-[#C9C9C9]">
            <div className="h-2 w-2 bg-black rounded-full" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Section 1</h2>
            <p className="text-[#666666]">7 Items • 8h 55 m</p>
          </div>
        </div>
        <div className="text-[#666666] space-y-2">
          <p>Overall Progress</p>
          <ProgressBar progress={60} />
        </div>
      </div>
      <div>
        {courses.map((course) => (
          <div key={course.id} className="flex space-x-5 items-center">
            <Image
              src={
                course.progress === "Completed"
                  ? "/icons/circular-check-icon.svg"
                  : course.progress === "In Progress"
                  ? "/icons/circular-processing-icon.svg"
                  : "/icons/circular-lock-icon.svg"
              }
              alt="check icon"
              width={40}
              height={40}
            />
            <CourseCard
              category={course.category}
              title={course.title}
              description={course.description}
              progress={course.progress}
              duration={course.duration}
            />
          </div>
        ))}
      </div>
      <div className="flex space-x-5 pt-4 items-center">
        <div className="ml-1 flex justify-center items-center h-8 w-8 rounded-full border-2 border-[#C9C9C9]">
          <div className="h-2 w-2 bg-black rounded-full" />
        </div>
        <Image
          src="/icons/trophy-icon.svg"
          alt="trophy icon"
          width={48}
          height={48}
        />
        <div>
          <h3 className="font-semibold text-xl">Earn Your Certificate</h3>
          <p className="text-gray-700">
            When you’re done, you’ll have earned a certificate of completion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
