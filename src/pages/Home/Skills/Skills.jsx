import html from "../../../assets/skills/html.png";
import css from "../../../assets/skills/css.png";
import bootstrap from "../../../assets/skills/bootstrap.png";
import tailwind from "../../../assets/skills/tailwind.png";
import react from "../../../assets/skills/react.png";
import node from "../../../assets/skills/node.png";
import express from "../../../assets/skills/express.png";
import mongo from "../../../assets/skills/mongo.png";
import firebase from "../../../assets/skills/firebase.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Skills = () => {
  return (
    <div id="skills" className="bg-[#030712] pt-8">
      <h3 className="text-4xl font-semibold text-center text-white">
        My <span className="text-green-600">Skills</span>
      </h3>
      <h5 className="text-center text-base-300 mt-1">What do I know?</h5>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col justify-between p-5 border border-green-600 rounded-xl" data-aos="fade-right">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 group hover:scale-125 duration-200">
                <img className="" src={html} alt="" />
              </div>
              <h6 className="text-2xl text-white mb-2 font-bold">HTML5</h6>
              <p className="mb-3 italic text-gray-300">
                HTML is the standard markup language for creating the structure
                and content of web pages.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between p-5 border border-green-600 rounded-xl" data-aos="fade-down-right">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 group hover:scale-125 duration-200">
                <img className="" src={css} alt="" />
              </div>
              <h6 className="text-2xl text-white mb-2 font-bold">CSS3</h6>
              <p className="mb-3 italic text-gray-300">
                CSS is a styling language used to describe the presentation and
                visual appearance of HTML elements.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between p-5 border border-green-600 rounded-xl" data-aos="fade-down-left">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 group hover:scale-125 duration-200">
                <img className="" src={bootstrap} alt="" />
              </div>
              <h6 className="text-2xl text-white mb-2 font-bold">Bootstrap</h6>
              <p className="mb-3 italic text-gray-300">
                Bootstrap is a popular front-end framework that collection of
                pre-designed components.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between p-5 border border-green-600 rounded-xl" data-aos="fade-left">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 group hover:scale-125 duration-200">
                <img className="" src={tailwind} alt="" />
              </div>
              <h6 className="text-2xl text-white mb-2 font-bold">
                Tailwind CSS
              </h6>
              <p className="mb-3 italic text-gray-300">
                Tailwind CSS is a utility-first CSS framework that provides a
                wide range of pre-built classes.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between p-5 border border-green-600 rounded-xl" data-aos="fade-right">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 group hover:scale-125 duration-200">
                <img className="" src={react} alt="" />
              </div>
              <h6 className="text-2xl text-white mb-2 font-bold">React js</h6>
              <p className="mb-3 italic text-gray-300">
                React.js is a powerful JavaScript library for building user
                interfaces with component-based architecture.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between p-5 border border-green-600 rounded-xl" data-aos="fade-up">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 group hover:scale-125 duration-200">
                <img className="" src={node} alt="" />
              </div>
              <h6 className="text-2xl text-white mb-2 font-bold">Node js</h6>
              <p className="mb-3 italic text-gray-300">
                Node.js is a runtime environment that allows server-side
                JavaScript execution.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between p-5 border border-green-600 rounded-xl" data-aos="fade-down">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 group hover:scale-125 duration-200">
                <img className="" src={express} alt="" />
              </div>
              <h6 className="text-2xl text-white mb-2 font-bold">Express js</h6>
              <p className="mb-3 italic text-gray-300">
                Express.js is a minimalistic and flexible web application
                framework for Node.js.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between p-5 border border-green-600 rounded-xl"  data-aos="fade-left">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 group hover:scale-125 duration-200">
                <img className="" src={mongo} alt="" />
              </div>
              <h6 className="text-2xl text-white mb-2 font-bold">MongoDB</h6>
              <p className="mb-3 italic text-gray-300">
                MongoDB is a scalable and flexible NoSQL database that stores
                data in JSON.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col justify-between p-5 border border-green-600 rounded-xl"
            data-aos="fade-right"
          >
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 group hover:scale-125 duration-200">
                <img className="" src={firebase} alt="" />
              </div>
              <h6 className="text-2xl text-white mb-2 font-bold">Firebase</h6>
              <p className="mb-3 italic text-gray-300">
                Firebase is a comprehensive backend-as-a-service platform by
                Google that offers a suite services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
