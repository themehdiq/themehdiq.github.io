import React from "react";
import htmltailwindjs from "../assets/photos/html_tailwindcss_js.jpg";
import htmlcssjs from "../assets/photos/htmlcssjs.jpg";
import jsfetchapi from "../assets/photos/Javascript-Fetch-API.png";
import mongodb from "../assets/photos/mongodb.png";
import node_express from "../assets/photos/node_express.png";
import react_js from "../assets/photos/react_js.png";
import chatApp from "../assets/photos/chatApp.png";
import blogApp from "../assets/photos/blogApp.jpg";
const github = "https://github.com/themehdiq/";
const netlify = ".netlify.app";

function Portfolio() {
  const portfolio = [
    {
      id: 3,
      src: react_js,
      title: "online pizzeria using React library",
      githubLink: github + "pizzeria-react-web-app",
      hebergLink: "",
    },
    {
      id: 4,
      src: mongodb,
      title: "CRUD backend sample using mongoose mongodb library for express",
      githubLink: github + "CRUD_express_mongoose_project",
      hebergLink: "",
    },

    {
      id: 7,
      src: chatApp,
      title:
        "Build a complete chat application using socket.io express library",
      githubLink: github + "chat-app",
      hebergLink: "",
    },
    {
      id: 6,
      src: blogApp,
      title: "Build a complete blog application using bootstrap and node.js",
      githubLink: "",
      hebergLink: "",
    },
    {
      id: 5,
      src: node_express,
      title: "CRUD operations on Cards Management website",
      githubLink: github + "cards_management",
      hebergLink: "",
    },
    {
      id: 1,
      src: htmltailwindjs,
      title: "Website using html tailwindcss and Javascript",
      githubLink: github + "blockchain_project",
      hebergLink: "https://main--anchouf" + netlify,
    },
    {
      id: 2,
      src: htmlcssjs,
      title: "Website using html css and Javascript",
      githubLink: "",
      hebergLink: "https://starbely" + netlify,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full
       text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map((item) => {
            return (
              <div
                key={item.id}
                className="shadow-md shadow-red-600 rounded-lg"
              >
                <img
                  src={item.src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 mb-10"
                />
                <p className="flex justify-center px-7">{item.title}</p>
                <div className="flex items-center justify-center">
                  <a
                    href={item.hebergLink}
                    target="_blank"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Demo
                  </a>
                  <a
                    href={item.githubLink}
                    target="_blank"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Code
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
