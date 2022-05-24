import React from "react";
import "./Catalog.css";
import { Link } from 'react-router-dom';


const Catalog = (props) => {
  return (
   
    <div className="catalog">
     {props.blockCatalog}


    </div>


  );
};

export default Catalog;
