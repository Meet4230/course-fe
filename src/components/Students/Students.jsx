import React from "react";

const students = [
  {
    name: "Amelia Collier",
    imgSrc:
      "https://tse2.mm.bing.net/th?id=OIP.x7X2oAehk5M9IvGwO_K0PgHaHa&pid=Api&P=0&h=180",
    progress: 95,
  },
  {
    name: "Estelle Baldwin",
    imgSrc:
      "https://tse2.mm.bing.net/th?id=OIP.x7X2oAehk5M9IvGwO_K0PgHaHa&pid=Api&P=0&h=180",
    progress: 84,
  },
  {
    name: "Micheal Watts",
    imgSrc:
      "https://tse2.mm.bing.net/th?id=OIP.x7X2oAehk5M9IvGwO_K0PgHaHa&pid=Api&P=0&h=180",
    progress: 96,
  },
  {
    name: "Amanda Wood",
    imgSrc:
      "https://tse2.mm.bing.net/th?id=OIP.x7X2oAehk5M9IvGwO_K0PgHaHa&pid=Api&P=0&h=180",
    progress: 72,
  },
];

const Students = () => {
  return (
    <div className="w-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">My Students</h2>
        <a href="#" className="text-blue-500">
          View all
        </a>
      </div>
      {students.map((student, index) => (
        <div key={index} className="flex items-center mb-4 gap-2 w-full">
          <img
            src={student.imgSrc}
            alt={student.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div className="w-1/3 mb-1">
            <span className="text-sm font-medium">{student.name}</span>
          </div>
          <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
            <div
              className={`h-2.5 rounded-full ${
                student.progress >= 90
                  ? "bg-orange-500"
                  : student.progress >= 80
                  ? "bg-blue-500"
                  : "bg-red-500"
              }`}
              style={{ width: `${student.progress}%` }}
            ></div>
          </div>
          <div className="text-end w-24">
            <span className="text-sm">{student.progress}%</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Students;
