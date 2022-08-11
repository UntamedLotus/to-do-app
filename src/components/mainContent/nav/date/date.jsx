import React from "react";
import "./date.scss";

const CurrentDate = () => {
  const day = new Date();
  const year = day.getFullYear();
  const month = day.getMonth();
  const date = day.getDate();

  return (
    <div className="day">
      <p className="date">{date}</p>
      <p className="month">{month + 1}</p>
      <p className="year">{year}</p>
    </div>
  );
};

export default CurrentDate;
