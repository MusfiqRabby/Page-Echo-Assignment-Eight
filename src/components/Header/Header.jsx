import { NavLink } from "react-router-dom";


const Header = () => {
   
   const links = <>
    <li><NavLink to="/" className={({isActive}) => isActive? 'text-[#23BE0A] font-bold': 'font-bold' }>Home</NavLink></li>
    <li><NavLink to="/listed" className={({isActive}) => isActive? 'text-[#23BE0A] font-bold': 'font-bold' }>Listed Books</NavLink></li>
    <li><NavLink to="/pages" className={({isActive}) => isActive? 'text-[#23BE0A] font-bold': 'font-bold' }>Pages to Read</NavLink></li>
    <li><NavLink to="/info" className={({isActive}) => isActive? 'text-[#23BE0A] font-bold': 'font-bold' }>InfoHub</NavLink></li>
    <li><NavLink to="/explore" className={({isActive}) => isActive? 'text-[#23BE0A] font-bold': 'font-bold' }>Explore</NavLink></li>
    
   </>
   
   
    return (
        <div className="w-full navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-bold">Page-Echo</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end ">
  <button class="btn bg-[#23BE0A] mr-3 text-white">Sign In</button>
    <button class="btn bg-[#59C6D2] text-white">Sign Up</button>
  </div>
</div>
    );
};

export default Header;