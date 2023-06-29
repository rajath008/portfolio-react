import React from "react";

import reactWeather from "../assets/projects/reactWeather.jpg";
import ott from "../assets/projects/ott.jpg"
import crypto from "../assets/projects/crypto.png"
import obj from "../assets/projects/obj.webp"
import voice from "../assets/projects/voice.webp"
import dbms from "../assets/projects/dbms.png"

const Projects = () => {
  const projects = [
    
    {
      id: 1,
      src: ott,
      href:"https://github.com/rajath008/",
      title:"OTT platfrom"
    },
    {
      id: 2,
      src: reactWeather,
      href:"https://github.com/rajath008/advanced-weather-app-react",
      title:"Weather Web App"
    },
    {
      id: 3,
      src: crypto,
      href:"https://github.com/rajath008/",
      title:"Crypto Data"
      
    },
    {
      id: 4,
      src: obj,
      href:"https://github.com/rajath008/object-detection-yolo-opencv",
      title:"YOLO Object Detection"
    },
    {
      id: 5,
      src: voice,
      href:"https://github.com/rajath008/voice-assistant-pyhton",
      title:"Voice Bot"
    },
    {
      id: 6,
      src: dbms,
      href:"https://github.com/rajath008/hostel-database-management-system-php",
      title:"Hostel DBMS"
      
    }
    
  ];

  return (
    <div
      name="Projects"
      className="pt-20 bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500">
            Some of my Projects . . .
          </p>
          
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, href , title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="mt-4 ml-2 text-lg ">{title}</p>
              <div className="flex items-center justify-center">
                <button onClick={()=>{window.location.href = 'https://github.com/rajath008/advanced-weather-app-react'}} className="px-5 py-3 m-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
