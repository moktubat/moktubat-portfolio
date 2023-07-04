import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Projects = () => {
  const projectsItems = [
    {
      id: 1,
      projectImgURL: "https://i.ibb.co/GPdz3mF/summer-camp.png",
      projectName: "Jujutsu Club",
      details:
        "Developed and implemented a full stack LMS Web App Prototype with multiple roles. And Stripe payment gateway intrigante to handle payment processing.",
      github: "https://github.com/moktubat/jujutsu-club-client-side",
      web: "https://summer-camp-client-3dda4.web.app/",
    },
    {
      id: 2,
      projectImgURL: "https://i.ibb.co/4fgfLVQ/toy-marketplace.png",
      projectName: "LEGO VILLA",
      details:
        "Designed and built a dynamic Toy Marketplace platform, supporting various categories of toys for users to showcase and sell their toys.",
      github: "https://github.com/moktubat/toy-marketplace-client-side",
      web: "https://toy-marketplace-client-s-fbb14.web.app/",
    },
    {
      id: 3,
      projectImgURL: "https://i.ibb.co/kgqyp1p/Buck-Donald-s.png",
      projectName: "Tasty Tortellini",
      details:
        "Similar to mealDb. A recipe platform, featuring top chefs from the Italy and their recipes. Logged in users can view user information and edit ordered item.",
      github: "https://github.com/moktubat/Chef-recipe-hunter-client-site",
      web: "https://illustrious-room.surge.sh/",
    },
  ];
  return (
    <div id="projects" className="bg-[#030712] py-20 min-h-screen">
        <h3 className="text-4xl font-semibold text-center text-white">
          My <span className="text-green-600">Projects</span>
        </h3>
        <h5 className="text-center text-base-300">My awesome works</h5>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-5 mx-5">
        {projectsItems.map((item) => (
          <div className="projectCard border border-green-500 rounded-lg" key={item.id} data-aos="zoom-out-up">
            <div className="relative max-w-full h-72 overflow-hidden rounded-t-lg">
              <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                <img
                  src={item.projectImgURL}
                  alt={item.projectName}
                  className="w-full rounded-lg"
                />
              </div>
            </div>
            <div className="">
              <div className="p-3 mb-10">
                <p className="text-title text-green-500 text-2xl font-bold pb-2">{item.projectName}</p>
                <p className="break-words text-gray-200">{item.details}</p>
              </div>
            </div>
            <div className="projectCard-button flex gap-3 justify-between m-3 ">
              <a
                href={item.github}
                className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={item.web}
                className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
                target="_blank"
                rel="noreferrer"
              >
                Live Webapp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
