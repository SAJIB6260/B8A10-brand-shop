import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import DarkMode from "./DarkMode";


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)


  const navLinks = (<>
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? " underline font-bold text-base mr-5 py-5 text-red-600"
            : " font-semibold mr-5 hover:text-red-600"
        }
        to="/"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? " underline font-bold text-base mr-5 text-red-600"
            : " font-semibold mr-5 hover:text-red-600"
        }
        to="/addProduct"
      >
        Add Product
      </NavLink>
    </li>
    <li>
              <NavLink
        className={({ isActive }) =>
          isActive
            ? " underline font-bold text-base mr-5 text-red-600"
            : " font-semibold mr-5 hover:text-red-600"
        }
        to={`/carts/user/${user?.email}`}
      >
        My Cart
      </NavLink>
    </li>

  </>)



  return (
    <div className="navbar dark:bg-black bg-slate-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost p-1 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow dark:bg-black bg-white  rounded-box dark:text-white text-black w-52">
            {navLinks}
          </ul>
        </div>
        <Link to="/"><img src="https://i.ibb.co/Z2LrSwD/sk-electronics-low-resolution-logo-color-on-transparent-background.png" className="dark:text-white text-black lg:w-1\3 p-1 h-[50px] hidden lg:flex" alt="" /></Link>
      </div>
      <div className="navbar-center">
        <ul className="dark:text-white text-black menu-horizontal px-1 hidden lg:flex">
          {navLinks}
        </ul>
        <Link to="/"><img src="https://i.ibb.co/Z2LrSwD/sk-electronics-low-resolution-logo-color-on-transparent-background.png" className="lg:w-1\3 p-2 md:p-0 h-[50px] lg:hidden" alt="" /></Link>
      </div>
      <div className="navbar-end">
        {
          user?.email ? (
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[2] p-2 shadow  menu-sm dropdown-content bg-base-100 w-auto rounded-box border border-red-600">
              <li>
                <p className="font-bold text-base w-full mr-5 text-red-600 ">
                  {user.displayName}
                </p>
              </li>
              <li><button onClick={logOut} className="w-full bg-black mt-2 font-bold text-white text-lg mr-5 hover:text-red-600">Logout</button></li>
            </ul>
          </div>
          )
          :
          (
            <p>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " underline font-bold text-base mr-5 text-red-600"
                  : "dark:text-white text-black font-semibold mr-5 dark:hover:text-red-600 hover:text-red-600"
              }
              to="/login"
            >
              LogIn
            </NavLink>
          </p>
          )
        }
        <div className="ml-5"><DarkMode></DarkMode></div>
      </div>
    </div>
  );
};

export default Navbar;