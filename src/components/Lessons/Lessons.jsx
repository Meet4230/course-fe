import React from "react";

const lessons = [
  {
    title: "Common English",
    time: "Thu 13 PM - 15 PM",
    participants: [
      "https://randomuser.me/api/portraits/thumb/men/1.jpg",
      "https://randomuser.me/api/portraits/thumb/men/2.jpg",
      "https://randomuser.me/api/portraits/thumb/men/3.jpg",
    ],
    borderColor: "border-l-red-500",
  },
  {
    title: "Speaking club",
    time: "Thu 16 PM - 17 PM",
    participants: [
      "https://randomuser.me/api/portraits/thumb/women/1.jpg",
      "https://randomuser.me/api/portraits/thumb/women/2.jpg",
      "https://randomuser.me/api/portraits/thumb/women/3.jpg",
    ],
    borderColor: "border-l-blue-500",
  },
];

const Lessons = () => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold text-black">Lessons</div>
        <a href="#" className="text-gray-500 hover:underline">
          View all
        </a>
      </div>
      <div className="space-y-4">
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className={`flex items-center p-6 pe-4 ml-auto border rounded-lg ${lesson.borderColor} border-l-8`}
          >
            <div className="flex-grow relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 absolute -end-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>

              <div className="text-sm font-medium">{lesson.title}</div>
              <div className="text-xs text-gray-500">{lesson.time}</div>
              <div className="flex  overflow-hidden mt-2 space-x-2">
                {lesson.participants.map((participant, idx) => (
                  <img
                    key={idx}
                    src={participant}
                    alt="participant"
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  />
                ))}
              </div>
            </div>
            <button className="w-6 h-6 rounded-full bg-gray-950 text-white p-0 self-end">
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lessons;
