
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getperfume, deleteperfume } from "./data/data";
import React from "react";

const Perfume = () => {
  const params = useParams();
  const perfume = getperfume(params.perfumeId);
  let location = useLocation()
  let navigate = useNavigate()

  if (perfume) {
    return (
      <React.Fragment>
        <div className="box-products">
          <img src={perfume.img} alt="" width={"230px"} />
          <div>

            <label className="specifications" htmlFor="">Product specifications</label>
          <ul className="list-detail">
            <li>{perfume.name}</li>
            <li>{perfume.price}</li>
            <li>{perfume.author}</li>
            <li>{perfume.description}</li>
          </ul>
          <button
            onClick={() => {
              deleteperfume(perfume.id);
              navigate("/perfume" + location.search)
            }}
          >
            Delet item
          </button>
          </div>

        </div>
      </React.Fragment>
    );
  } else {
    return <div>Not found!!</div>;
  }
};

export default Perfume;
