import { useState } from "react";
import './search.scss';
import { useSelector } from "react-redux";

function Search() {
  const state = useSelector((state) => state);
  console.log(state);
  return ( 
    <div className="search"></div>
   )
}

export default Search;