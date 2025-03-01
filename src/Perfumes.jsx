import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom";
import { getperfumes } from "./data/data";

const Perfumes = () => {
  let perfumeList = getperfumes();
  let [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation();

  return (
    <div className="inp-box" style={{ display: "grid" , margin:"0 auto"}}>
      <div className="inventory-box" style={{  display: "flex", flexDirection: "column" }}>
        <input 
        placeholder="Enter your request"
         className="inp-promp"
          type="text"
          value={searchParams.get("x") || ""}
          onChange={(event) => {
            let inputValue = event.target.value;
            if (inputValue) {
              setSearchParams({ x: inputValue });
            } else {
              setSearchParams({});
            }
          }}
        />
            <label className="Inventory" htmlFor="">Inventory</label>
        {perfumeList
          .filter((perfumeFiltered) => {
            let filter = searchParams.get("x");
            if (!filter) return true;
            let name = perfumeFiltered.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((perfume) => (
            <NavLink
            to={`${perfume.id}${location.search}`}
            key={perfume.id}
            style={({ isActive }) => {
              return { color: isActive ? "rgb(247, 142, 4)" : "" };
            }}
            >
              {perfume.name}
            </NavLink>
          ))}
      </div>

      <Outlet />
    </div>
  );
};

export default Perfumes;
