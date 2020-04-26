// Import libraries and Card component
import React from "react";
import Card from "./Card";

// Takes in data props passed in from App.js to create the number of 
// items/elements for each section. Item and channel data is then passed to Card component.
const CardList = ({ list }) => {
  return (
    <ul className="list">
      {list.items.map((item, index) => {
        return <Card key={index} item={item} channel={list.channel} />;
      })}
    </ul>
  );
};

export default CardList;