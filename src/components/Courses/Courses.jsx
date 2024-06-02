import React from "react";

const lessons = [
  {
    level: "A1",
    subject: "Common English",
    description: "Cambridge advanced.pdf",
    price: "$20",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-600",
  },
  {
    level: "B1",
    subject: "Speaking club",
    description: "Speaking skill.docs",
    price: "$15",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
  },
  {
    level: "C1",
    subject: "Business English",
    description: "English Dictionary.wav",
    price: "$25",
    bgColor: "bg-red-100",
    textColor: "text-red-600",
  },
  {
    level: "A2",
    subject: "Spanish Grammar",
    description: "Easy Learning Book.zip",
    price: "$18",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-600",
  },
];

const Courses = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Courses</h2>
        <a href="#" className="text-blue-500">
          View all
        </a>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-4 font-semibold">
        <div>Course</div>
        <div>Description</div>
        <div>Price</div>
        <div className="text-center">Actions</div>
      </div>
      <div className="space-y-4">
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className="grid grid-cols-4 gap-4 p-4 bg-white rounded-lg shadow-sm items-center"
          >
            <div className="flex items-center">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg ${lesson.bgColor}`}
              >
                <span className={`text-lg font-bold ${lesson.textColor}`}>
                  {lesson.level}
                </span>
              </div>
              <div className="ml-4 font-semibold">{lesson.subject}</div>
            </div>
            <div className="text-sm text-gray-500">{lesson.description}</div>
            <div className="font-semibold text-slate-950">{lesson.price}</div>
            <div className="flex justify-around">
              <button className="text-blue-500">Edit</button>
              <button className="text-green-500">Update</button>
              <button className="text-red-500">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
