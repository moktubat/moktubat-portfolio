import { Player } from "@lottiefiles/react-lottie-player";
import coding from "../../../assets/coding.json";
import team from "../../../assets/team.png";
import time from "../../../assets/time.png";
import learner from "../../../assets/learner.png";
import resume from "../../../../public/Moktubat-Jaman-Resume.pdf";
import communication from "../../../assets/communication.png";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Header = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front End Developer", "MERN Stack Developer"],
      startDelay: 300,
      typeSpeed: 150,
      backDelay: 150,
      smartBackspace: true,
      showCursor: false,
      loop: true,
    });
    console.log(typed);
  });
  return (
    <div>
      <div className="relative w-full h-full flex flex-col justify-center items-center bg-[#030712] overflow-hidden">
        <div className="pt-6 sm:pt-12 lg:pt-24 w-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-white">
            <div className="p-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h1 className="py-5 text-2xl sm:text-5xl font-bold tracking-wide text-white">
                <span className="text-green-600">Hello</span> <br /> My name is Moktubat Jaman
              </h1>
              <h3 className="text-1xl sm:text-5xl text-white pb-2">
                I am <span className="text-green-600" ref={el}></span>
              </h3>
              <p className="text-lg font-semibold text-gray-400 tracking-wide">
                I am a MERN Stack Front-end developer. I have experience
                building RESTful APIs, working with MongoDB for data storage and
                retrieval, building strong backend systems using Node.js and
                Express.js, and designing clear user interfaces with React.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center">
                <button>
                  <a
                    href={resume}
                    className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-green-500 border-2 border-green-500 rounded-full hover:text-white group hover:bg-green-900 hover:border-white"
                  >
                    <span className="absolute left-0 block w-full h-0 transition-all bg-green-900 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                      <svg
                        width="200px"
                        height="200px"
                        viewBox="0 0 20 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#fff"
                          fillRule="evenodd"
                          d="M14,9 C14.5523,9 15,9.44772 15,10 L15,13 C15,14.1046 14.1046,15 13,15 L3,15 C1.89543,15 1,14.1046 1,13 L1,10 C1,9.44772 1.44772,9 2,9 C2.55228,9 3,9.44771 3,10 L3,13 L13,13 L13,10 C13,9.44771 13.4477,9 14,9 Z M8,1 C8.55228,1 9,1.44772 9,2 L9,6.58579 L10.2929,5.29289 C10.6834,4.90237 11.3166,4.90237 11.7071,5.29289 C12.0976,5.68342 12.0976,6.31658 11.7071,6.70711 L8,10.4142 L4.29289,6.70711 C3.90237,6.31658 3.90237,5.68342 4.29289,5.29289 C4.68342,4.90237 5.31658,4.90237 5.70711,5.29289 L7,6.58579 L7,2 C7,1.44772 7.44772,1 8,1 Z"
                        />
                      </svg>
                    </span>
                    <span className="relative">My Resume</span>
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden">
            <Player
              autoplay
              loop
              src={coding}
              style={{ height: "300px", width: "300px" }}
              className="w-2/3 lg:w-full rounded"
            ></Player>
          </div>
        </div>

        {/* :FEATURES */}
        <div className="container mt-7 p-4 w-full grid grid-cols-12 sm:grid-cols-5 gap-2 text-xs md:text-sm">
          <div className="col-span-4 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-300 text-gray-400 uppercase">
            <img
              className="w-[40px] h-[40px] mb-2"
              src={communication}
              alt=""
            />
            <span className="text-center">A Positive Attitude</span>
          </div>

          <div className="col-span-4 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-300 text-gray-400 uppercase">
            <img
              className="w-[40px] h-[40px] mb-2"
              src={communication}
              alt=""
            />
            <span className="text-center">Good Communication Skills</span>
          </div>

          <div className="col-span-4 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-300 text-gray-400 uppercase">
            <img className="w-[40px] h-[40px] mb-2" src={time} alt="" />
            <span className="text-center">Good Time and Task Management</span>
          </div>

          <div className="col-span-6 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-300 text-gray-400 uppercase">
            <img className="w-[40px] h-[40px] mb-2" src={learner} alt="" />
            <span className="text-center">Quick Learning Ability</span>
          </div>

          <div className="col-span-6 sm:col-span-1 inline-flex flex-col items-center border-r-none border-gray-300 text-gray-400 uppercase">
            <img className="w-[40px] h-[40px] mb-2" src={team} alt="" />
            <span className="text-center">A Good Team Player</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
