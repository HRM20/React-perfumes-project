import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{width: "100%" ,position:"fixed" , top:"0" }}>
      <div className="navbar">
        <NavLink to="/perfumes">Perfumes </NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/Home">Home</NavLink>
        <h1>BrandName</h1>
      </div>
      
      <Outlet />
    </div>
  );
};

export default Navbar;
