import React from "react";

const lessons = [
  {
    level: "A1",
    subject: "Common English",
    file: "Cambridge advanced.pdf",
    status: "Only view",
    members: 48,
    size: "42 MB",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-600",
  },
  {
    level: "B1",
    subject: "Speaking club",
    file: "Speaking skill.docs",
    status: "Edit available",
    members: 62,
    size: "24 MB",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
  },
  {
    level: "C1",
    subject: "Business English",
    file: "English Dictionary.wav",
    status: "Only view",
    members: 53,
    size: "34 MB",
    bgColor: "bg-red-100",
    textColor: "text-red-600",
  },
  {
    level: "A2",
    subject: "Spanish Grammar",
    file: "Easy Learning Book.zip",
    status: "Only view",
    members: 42,
    size: "23 MB",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-600",
  },
];

const Courses = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Media for lessons</h2>
        <a href="#" className="text-blue-500">
          View all
        </a>
      </div>
      <div className="space-y-4">
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className="flex md:flex-nowrap flex-wrap md:flex-row flex-col items-center md:text-start text-center p-4 bg-white rounded-lg shadow-sm md:gap-2 gap-4"
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg ${lesson.bgColor}`}
            >
              <span className={`text-lg font-bold ${lesson.textColor}`}>
                {lesson.level}
              </span>
            </div>
            <div className="md:w-2/5 w-full flex-1 md:ml-4">
              <div className="font-semibold">{lesson.subject}</div>
            </div>
            <div className="md:w-2/5 w-full text-sm text-gray-500">
              {lesson.file}
            </div>
            <div className="md:w-2/5 w-full flex-1">
              <span
                className={`text-sm font-medium ${
                  lesson.status === "Edit available"
                    ? "text-yellow-500"
                    : "text-slate-950"
                }`}
              >
                {lesson.status}
              </span>
            </div>
            <div className="md:w-2/5 w-full flex-1 text-gray-500">
              {lesson.members} members
            </div>
            <div className="md:w-1/6 w-full flex-1 font-semibold md:text-right text-slate-950">
              {lesson.size}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
