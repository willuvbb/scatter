import React from "react";
import "./Categories.css";
import SectionTitle from "./SectionTitle";

function Categories() {
  return (
    <div className="Categories subsubcol">
      <SectionTitle title="cat" />
      <ul>
        <li>A boy's name</li>
        <li>Things you do outside</li>
        <li>Special occasions</li>
      </ul>
    </div>
  );
}

export default Categories;
