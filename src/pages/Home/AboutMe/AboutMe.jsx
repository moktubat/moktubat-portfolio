import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const aboutMe = () => {
  return (
    <div id="about">
      <div className="antialiased text-gray-900 leading-normal tracking-wider bg-[#030712] pt-8">
        <h3 className="text-4xl font-semibold text-center text-white">
          About <span className="text-green-600">Me</span>
        </h3>
        <h5 className="text-center text-base-300">My introduction</h5>
        
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto mt-32 lg:my-0">
          <div
            id="about"
            className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0 overflow-x-hidden"
            data-aos="fade-right"
            data-aos-offset="400"
            data-aos-easing="ease-in-sine"
          >
            <div className="p-4 md:p-10 text-center lg:text-left">
              <div
                className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://i.ibb.co/k3zHw5c/me.jpg")`,
                }}
              ></div>

              <h1 className="text-3xl text-green-500 font-bold pt-8 lg:pt-0">
                Md. Moktubat Janan
              </h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
              <p className="pt-4 flex items-center justify-center lg:justify-start">
                With 1 years of learning experience in web development. I have a
                strong foundation in the MERN stack development and have
                successfully delivered multiple projects using these
                technologies. I have a solid foundation in JavaScript and its
                frameworks, which allows me to create dynamic and interactive
                user interfaces with React.js, On the server side, I used
                Node.js and Express.js to develop scalable and efficient backend
                APIs, integrating them with MongoDB for storing data.
              </p>

              <div className="pt-8 pb-6">
                <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                  Contact Me
                </button>
              </div>

              <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                <a
                  className="link"
                  href="https://www.facebook.com/shadhin.reja/"
                  data-tippy-content="@facebook_handle"
                >
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-green-700"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Facebook</title>
                    <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                  </svg>
                </a>
                <a
                  className="link"
                  href="https://twitter.com/ShadhinReja"
                  data-tippy-content="@twitter_handle"
                >
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-green-700"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Twitter</title>
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                  </svg>
                </a>
                <a
                  className="link"
                  href="https://github.com/moktubat"
                  data-tippy-content="@github_handle"
                >
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-green-700"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>

                <a
                  className="link"
                  href="https://www.linkedin.com/in/moktubat/"
                  data-tippy-content="@linkedin_handle"
                >
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-green-700"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>LinkedIn</title>
                    <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div
            className="w-full lg:w-2/5"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img
              src="https://i.ibb.co/k3zHw5c/me.jpg"
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutMe;
