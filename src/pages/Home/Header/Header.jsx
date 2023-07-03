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
              <h1 className="py-5 text-3xl sm:text-5xl font-bold tracking-wide text-white">
                Hi, I am Moktubat Jaman
              </h1>
              <h3 className="text-1xl sm:text-5xl text-white pb-2">
                I am <span ref={el}></span>
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
                    className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-[#7A3E3E] border-2 border-[#7A3E3E] rounded-full hover:text-white group hover:bg-[#643A6B]"
                  >
                    <span className="absolute left-0 block w-full h-0 transition-all bg-[#643A6B] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg width="100px" height="100px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="download"> <g> <path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <g> <polyline data-name="Right" fill="none" id="Right-2" points="7.9 12.3 12 16.3 16.1 12.3" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline> <line fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="2.7" y2="14.2"></line> </g> </g> </g> </g> </g></svg>
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
