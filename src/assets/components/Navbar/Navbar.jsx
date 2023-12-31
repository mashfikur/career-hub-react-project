import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "../common/common.css";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/">Statistics</NavLink>
      <NavLink to="/applied-jobs">Applied Jobs</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </>
  );

  return (
    <div className="blue-bg">
      <div className="navbar max-w-[80rem] mx-auto ">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className=" normal-case text-3xl font-extrabold">CareerHub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-6 font-bold">{links}</ul>
        </div>
        <div className="navbar-end">
          <a href="#featured" className=" btn btn-own capitalize ">
            Start Applying
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
