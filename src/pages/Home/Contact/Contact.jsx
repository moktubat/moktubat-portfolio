import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ysuvadb",
        "template_5lq12ea",
        form.current,
        "nJBet1H1MEkGQn1pR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div>
        <div
          id="contact"
          className="relative w-full min-h-screen bg-[#030712] text-green-500"
        >
          <h3 className="text-4xl font-semibold text-center text-white">
            Contact <span className="text-green-600">Me</span>
          </h3>
          <h5 className="text-center text-base-300 mt-1">Get in touch</h5>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-800 h-32 w-full"></div>

          <div className="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 p-5 md:px-0 mx-5">
              <div className="bg-gray-900 border border-green-500 w-full lg:w-1/2 h-full p-5 pt-8">
                <h3 className="text-2xl font-semibold mb-5">My Social Media</h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://github.com/moktubat"
                    className="flex items-center hover:text-white hover:bg-green-500 p-2"
                  >
                    <svg
                      fill="currentColor"
                      className="w-6 h-6 m-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Github
                  </a>
                  <a
                    href="https://www.linkedin.com/in/moktubat/"
                    className="flex items-center hover:text-white hover:bg-green-500 p-2"
                  >
                    <svg
                      fill="currentColor"
                      className="w-6 h-6 m-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z M 7 20 L 3 20 L 3 9 L 7 9 Z M 5 7.699219 C 3.800781 7.699219 3 6.898438 3 5.898438 C 3 4.800781 3.800781 4 5 4 C 6.199219 4 7 4.800781 7 5.800781 C 7 6.898438 6.199219 7.699219 5 7.699219 Z M 21 20 L 17 20 L 17 14 C 17 12.398438 15.898438 12 15.601563 12 C 15.300781 12 14 12.199219 14 14 C 14 14.199219 14 20 14 20 L 10 20 L 10 9 L 14 9 L 14 10.601563 C 14.601563 9.699219 15.601563 9 17.5 9 C 19.398438 9 21 10.5 21 14 Z" />
                    </svg>
                    Linkedin
                  </a>
                  <a
                    href="https://www.facebook.com/shadhin.reja/"
                    className="flex items-center hover:text-white hover:bg-green-500 p-2"
                  >
                    <svg
                      fill="currentColor"
                      className="w-6 h-6 m-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,0C5.373,0,0,5.373,0,12c0,6.016,4.432,10.984,10.206,11.852V15.18H7.237v-3.154h2.969V9.927c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L16.73,15.18h-3.106v8.697 C19.481,23.083,24,18.075,24,12C24,5.373,18.627,0,12,0z" />
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              action="#"
              className="w-full md:w-1/2 border border-green-500 p-6 bg-gray-900"
            >
              <h2 className="text-2xl pb-3 font-semibold">Send Message</h2>
              <div>
                <div className="flex flex-col mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-green-500 focus:outline-none focus:bg-gray-800 focus:text-green-500"
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-green-500 focus:outline-none focus:bg-gray-800 focus:text-green-500"
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label>Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    id="message"
                    className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-green-500 focus:outline-none focus:bg-gray-800 focus:text-green-500"
                  ></textarea>
                </div>
              </div>
              <div className="w-full pt-3">
                <input
                  type="submit"
                  value="Send Message"
                  className="w-full bg-gray-900 border border-green-500 px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-green-500 hover:text-white text-xl cursor-pointer"
                />
              </div>
              <div className="divider before:bg-slate-600 after:bg-slate-600">
                OR
              </div>
              <div className="flex justify-center">
                <p className="flex items-center hover:text-white hover:bg-green-500 p-2">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                    viewBox="0 0 24 24"
                    style={{
                      enableBackground: "new 0 0 237.832 237.832",
                    }}
                    xmlSpace="preserve"
                    width={24}
                    height={24}
                  >
                    <path d="M23.106 3.423H0.288C0.4 3.423 0 3.823 0 4.316v15.368c0 0.494 0.4 0.894 0.893 0.894H23.106a0.894 0.894 0 0 0 0.894 -0.894V4.316c0 -0.493 -0.4 -0.894 -0.894 -0.894zm-0.802 14.962c0 0.41 -0.34 0.742 -0.758 0.742h-1.245v-11.722L12.562 12.429c-0.17 0.111 -0.366 0.166 -0.562 0.166s-0.392 -0.055 -0.562 -0.166L3.699 7.405v11.722h-1.245c-0.418 0 -0.758 -0.332 -0.758 -0.742V5.615c0 -0.41 0.34 -0.742 0.758 -0.742h1.027l8.519 5.531 8.519 -5.531h1.027c0.418 0 0.758 0.332 0.758 0.742v12.769z" />
                  </svg>
                  <span className="pr-2">Email: </span>
                  <a href="mailto:moktubatjaman@gmail.com">
                    moktubatjaman@gmail.com
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
