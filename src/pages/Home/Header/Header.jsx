import { Player } from "@lottiefiles/react-lottie-player";
import hero from "../../../assets/hero.png";
import handshake from "../../../assets/handshake.json";
const Header = () => {
  return (
    <div className="container">
      <div className="relative w-full h-full flex flex-col justify-center items-center bg-gray-50 overflow-hidden">
        <div className="pt-6 sm:pt-12 lg:pt-24 w-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-gray-600">
            <div className="p-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h1 className="py-10 text-3xl sm:text-5xl font-bold tracking-wide text-gray-900">
                Discover the fascinating
                <br />
                LEGO manifested in the
                <br /> ultimate LEGO building
              </h1>
              <p className="text-lg font-semibold text-gray-400 tracking-wide">
                Get your favourite LEGO® toys,
                <br />
                LEGOVILLA® Exclusive merchandise and
                <br /> much more at our LEGOVILLA® Retail Store!
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center">
                <button>
                  <a
                    href="#_"
                    className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-[#7A3E3E] border-2 border-[#7A3E3E] rounded-full hover:text-white group hover:bg-[#643A6B]"
                  >
                    <span className="absolute left-0 block w-full h-0 transition-all bg-[#643A6B] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="relative">Explore Now</span>
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden">
            <img src={hero} alt="" className="w-2/3 lg:w-full rounded" />
          </div>
        </div>

        {/* :FEATURES */}
        <div className="container mt-14 p-5 w-full grid grid-cols-12 sm:grid-cols-5 gap-2 text-xs md:text-sm">
          <div className="col-span-4 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-300 text-gray-400 uppercase">
            <Player
              autoplay
              loop
              src={handshake}
              style={{ height: "86px", width: "86px" }}
            >
            </Player>
            <span className="text-center">A Positive Attitude</span>
          </div>

          {/* ::Four Sizes */}
          <div className="col-span-4 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-300 text-gray-400 uppercase">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
            <span className="text-center">Good Communication Skills</span>
          </div>

          {/* ::Quality Materials */}
          <div className="col-span-4 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-300 text-gray-400 uppercase">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-center">Good Time and Task Management</span>
          </div>

          {/* ::Fast Shipping */}
          <div className="col-span-6 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-300 text-gray-400 uppercase">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
              />
            </svg>
            <span className="text-center">Quick Learning Ability</span>
          </div>

          {/* ::Layflat Page */}
          <div className="col-span-6 sm:col-span-1 inline-flex flex-col items-center border-r-none border-gray-300 text-gray-400 uppercase">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="text-center">A Good Team Player</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
