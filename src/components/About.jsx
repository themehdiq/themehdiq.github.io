import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-7">
          Greetings! I'm thrilled to welcome you to my portfolio. <br />
          My name is Mehdi Qazzih, and I'm currently immersed in the world of
          full-stack development, with a particular focus on the MERN (MongoDB,
          Express.js, React, Node.js) stack. <br /> <br />
          Before venturing into the realm of software engineering, I spent two
          enriching years as an IT technician, honing my troubleshooting skills
          and gaining invaluable experience in the intricate workings of
          computer systems. This journey has equipped me with a unique
          perspective, blending technical proficiency with a deep understanding
          of the practical challenges that businesses face in today's digital
          landscape. <br /> <br /> Now, as a full-stack developer, I'm
          passionate about crafting elegant solutions to complex problems and
          leveraging the latest technologies to bring ideas to life. With a
          relentless drive for learning and a keen eye for detail, I strive to
          deliver robust, user-centric applications that make a tangible impact.
          <br /> <br />
          Thank you for taking the time to explore my portfolio. I'm excited
          about the possibilities ahead and eager to collaborate on innovative
          projects that push the boundaries of what's possible in the digital
          realm.
        </p>
        <br />
      </div>
    </div>
  );
}

export default About;
