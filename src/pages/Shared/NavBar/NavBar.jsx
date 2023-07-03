import { Link } from "react-scroll";

const NavBar = () => {
  const navOption = (
    <>
      <li>
        <Link activeClass="bg-green-600" to="/" spy={true} smooth={true} offset={50} duration={500}>
          Home
        </Link>
      </li>
      <li>
        <Link activeClass="bg-green-600" to="about" spy={true} smooth={true} offset={50} duration={500}>
          About
        </Link>
      </li>
      <li>
        <Link activeClass="bg-green-600" to="skills" spy={true} smooth={true} offset={50} duration={500}>
          Skills
        </Link>
      </li>
      <li>
        <Link activeClass="bg-green-600" to="projects" spy={true} smooth={true} offset={50} duration={500}>
          Projects
        </Link>
      </li>
      <li>
        <Link activeClass="bg-green-600" to="contact" spy={true} smooth={true} offset={50} duration={500}>
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact uppercase font-extrabold dropdown-content mt-3 p-2 shadow bg-opacity-30 bg-black text-white rounded-box w-52"
          >
            {navOption}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Moktubat
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu uppercase font-bold menu-horizontal">
          {navOption}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
