import React from "react";
import { AvatarGenerator } from "random-avatar-generator";

const founders = [
  {
    name: "Vatsal Pandey",
    role: "Backend",
    description:
      "Designs and develops the server-side logic, databases, and APIs for web applications.",
    image: "https://via.placeholder.com/150", // Random placeholder image URL
  },
  {
    name: "Moses Kummeth",
    role: "Frontend",
    description:
      "Focuses on creating the user interface and user experience of a website or web application.",
    image: "https://via.placeholder.com/150", // Random placeholder image URL
  },
  {
    name: "Hong Linh",
    role: "Frontend & Design",
    description:
      "Focuses on creating the user interface and user experience of a website or web application while also working on the design.",
    image: "https://via.placeholder.com/150", // Random placeholder image URL
  },
  {
    name: "Merry Don",
    role: "Design",
    description:
      "Combines design principles with engineering skills to create visually appealing and functional digital products.",
    image: "https://via.placeholder.com/150", // Random placeholder image URL
  },
  {
    name: "Himank Sharma",
    role: "Integration",
    description:
      "Specializes in connecting different systems and ensuring seamless data exchange between them.",
    image: "https://via.placeholder.com/150", // Random placeholder image URL
  },
  // Add more founders as needed
];

const Teams = () => {
  const generator = new AvatarGenerator();
  return (
    <div className="teams-page p-6">
      <h2 className="text-3xl font-semibold text-yellow-400 mb-6">
        Our Founders
      </h2>
      <div className="grid grid-cols-5 gap-6">
        {founders.map((founder, index) => (
          <div
            key={index}
            className="relative p-4 bg-green-100 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              src={generator.generateRandomAvatar()}
              alt={founder.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold text-green-800 mb-1">
                {founder.name}
              </h3>
              <p className="text-base text-green-600 mb-1">{founder.role}</p>
              <p className="text-sm text-gray-700">{founder.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
