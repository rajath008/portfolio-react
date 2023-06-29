import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import cpp from "../assets/cpp.png"
import python from "../assets/python.png"
import java from "../assets/java.png"
import node from "../assets/node.png"
import mongo from "../assets/mongo.png"
import php from "../assets/php.png"

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: cpp,
      title: "C++",
      style: "shadow-blue-400",
    },
    {
      id: 2,
      src: python,
      title: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 3,
      src: java,
      title: "Java",
      style: "shadow-red-400",
    },
    {
      id: 4,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 9,
      src: node,
      title: "Node js",
      style: "shadow-green-600",
    },
    {
      id: 10,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 11,
      src: php,
      title: "PHP",
      style: "shadow-violet-400",
    },
    
    {
      id: 12,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-screen pt-10"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-5xl font-bold border-b-4 border-gray-500 p-2 inline">
            I've Worked With . . .
          </p>
         
        </div>

        <div className="w-full grid grid-cols-2 mt-3 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
