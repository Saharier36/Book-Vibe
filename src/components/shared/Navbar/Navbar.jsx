import { Menu } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `font-semibold mr-1 ${isActive ? "text-green-500 border border-green-500" : ""}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/Books"}
          className={({ isActive }) =>
            `font-semibold mr-1 ${isActive ? "text-green-500 border border-green-500" : ""}`
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"page-to-read"}
          className={({ isActive }) =>
            `font-semibold mr-1 ${isActive ? "text-green-500 border border-green-500" : ""}`
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Menu />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="text-2xl font-bold">
          Book Vibe
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-3">
        <a className="btn bg-green-500 hover:bg-green-600 text-white">
          Sign In
        </a>
        <a className="btn bg-[#59C6D2] hover:bg-[#35a1ad] text-white">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
