import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-16">
        As a dedicated web developer and software enthusiast, my passion lies in creating innovative solutions that exceed expectations. With a strong foundation in web development technologies and programming languages, I have successfully designed and implemented various projects that have received positive feedback. I approach challenges with a humble mindset, always eager to learn from others and improve my skills.
        </p>

        <br />

        <p className="text-xl">
        One of the aspects I love most about being a computer science engineer is the constant opportunity for growth. I am deeply motivated by the prospect of learning new technologies and honing my craft. Embracing challenges is not just about showcasing my abilities; it's also about pushing my limits and expanding my knowledge. I actively seek out new projects and tasks that challenge me to think critically, adapt to different scenarios, and acquire new skills. 
        </p>
      </div>
    </div>
  );
};

export default About;
