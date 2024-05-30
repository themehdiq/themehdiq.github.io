import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import github from "../assets/github.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb22.png";

function Exprerience() {
  const experiences = [
    {
      id: 1,
      src: html,
      name: "html",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      name: "css",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      name: "javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: github,
      name: "github",
      style: "shadow-gray-400",
    },
    {
      id: 5,
      src: node,
      name: "node",
      style: "shadow-green-300",
    },
    {
      id: 6,
      src: react,
      name: "react",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: tailwind,
      name: "tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: mongodb,
      name: "mongodb",
      style: "shadow-green-500 w-70",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
            Skills
          </p>
          <p className="py-6">These are the technologies i have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {experiences.map((exprerience) => {
            return (
              <div
                key={exprerience.id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${exprerience.style}`}
              >
                <img src={exprerience.src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{exprerience.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Exprerience;
