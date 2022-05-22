import React from "react";
import "./Catalog.css";

const Catalog = (props) => {
  return (
    <div className="catalog">
     {props.blockCatalog}
    </div>
  );
};

export default Catalog;
