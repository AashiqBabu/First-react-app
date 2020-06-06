import React from "react";
import "./holder.css";

const holder = () => {
  return (
    <div id="holder" className="w3-container w3-mobile">
      <div onClick={sTart} className="w3-card w3-dark-grey">
        <img id="img" src="circle.png" />
      </div>
    </div>
  );
};

export default holder;

function sTart() {
  var hold = document.getElementById("holder");
  var imgr = document.getElementById("img");
  var ele = document.createElement("div");

  ele.setAttribute("class", "w3-card w3-dark-grey");

  hold.insertBefore(ele, hold.childNodes[0]);
}
