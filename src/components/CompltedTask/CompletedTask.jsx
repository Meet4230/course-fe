import React from "react";

const tasks = [
  {
    title: "English - Grammar Test",
    name: "Eula Kelly",
    date: "6 May",
    icon: "book",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-600",
  },
  {
    title: "Irregular Verbs Test",
    name: "Olive Garza",
    date: "4 May",
    icon: "mail",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
  },
  {
    title: "Spanish - Essey",
    name: "Franklin Harvey",
    date: "2 May",
    icon: "document",
    bgColor: "bg-red-100",
    textColor: "text-red-600",
  },
];

const iconMap = {
  book: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
      />
    </svg>
  ),
  mail: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  ),
  document: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      />
    </svg>
  ),
};

const CompletedTask = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Completed tasks</h2>
        <a href="#" className="text-gray-500 hover:underline">
          View all
        </a>
      </div>
      <div className="space-y-3">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex bg-white items-center p-3 drop-shadow-md rounded-lg"
          >
            <div className={`p-2 ${task.bgColor} ${task.textColor}`}>
              {iconMap[task.icon]}
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium">{task.title}</div>
              <div className="text-xs text-gray-500">
                {task.name}, {task.date}
              </div>
            </div>
            <div className="ms-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedTask;
