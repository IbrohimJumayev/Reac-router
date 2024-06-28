import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="Card">
      <h2 className="text-2xl mt-2">{title}</h2>
      <p className="text-xl text-gray-700 mt-5">{description}</p>
      <button className="bg-transparent mt-12">Read More</button>
    </div>
  );
};

export default Card;
