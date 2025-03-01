import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{width: "100%" }}>
      <div className="navbar">
        <NavLink to="/perfumes">Perfumes </NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/Contents">Contents</NavLink>
        <h1>BrandName</h1>
      </div>
      
      <Outlet />
    </div>
  );
};

export default Navbar;
