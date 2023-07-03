import { Link } from "react-router-dom";

const NavBar = () => {
  const navOption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link to="/menu">Skills</Link>
      </li>
      <li>
        <Link to="/order">Projects</Link>
      </li>
      <li>
        <Link to="/login">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
      <div className="navbar-start">
        <Link className="btn btn-ghost normal-case text-xl">MJ</Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu uppercase font-bold menu-horizontal">
          {navOption}
        </ul>
      </div>
      <div className="dropdown ml-auto lg:hidden">
        <label tabIndex={0} className="btn btn-ghost">
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
    </div>
  );
};

export default NavBar;
