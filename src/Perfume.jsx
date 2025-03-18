import { useParams, useNavigate, useLocation } from "react-router-dom";  
import { getperfume, deleteperfume } from "./data/data";  
import  { useState, useEffect } from "react";  

const Perfume = () => {  
  const params = useParams();  
  let location = useLocation();  
  let navigate = useNavigate();  
  const [perfume, setPerfume] = useState(null);  

  useEffect(() => {  
    const fetchedPerfume = getperfume(params.perfumeId);  
    setPerfume(fetchedPerfume);  
  }, [params.perfumeId]);  

   
  if (perfume) {  
    return (  
      <div className="box-products">  
        <img src={perfume.img} alt={perfume.name} width={"230px"} />  
        <div>  
          <label className="specifications" htmlFor="">Product specifications</label>  
          <ul className="list-detail">  
            <li>{perfume.name}</li>  
            <li>{perfume.price}</li>  
            <li>{perfume.author}</li>  
            <li>{perfume.description}</li>  
          </ul>  
          <button onClick={() =>{
            deleteperfume(perfume.id);  
    
            navigate("/perfumes" + location.search); 
          }}>  
            Delete item  
          </button>  
        </div>  
      </div>  
    );  
  } else {  
    return <div style={{color:"red" , fontSize:"2rem"}}>Not found!!</div>;  
  }  
};  

export default Perfume;