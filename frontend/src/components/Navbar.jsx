import React from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div
        style={{padding:"0.5rem",display:"flex",justifyContent:"space-around"}}
    >
        <button 
        onClick={()=>{
            navigate("/")
        }}>Home</button>
        <button 
        onClick={()=>navigate("/about")}
        >About</button>
    </div>
  );
};

export default Navbar;
