import React from "react";
var moment = require("moment");
moment.locale('es')

const Card = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000;
  newDate.setTime(weekday);

  const icon = `http://openweathermap.org/img/wn/${reading.weather[0].icon}@2x.png`;

  return (
    <div className="date">
      <p className="nextDays-temp">{Math.ceil(reading.main.temp)}°</p>
      <img className="nextDays-icon" src={icon} />
      <p className="nextDays-day">
        {moment(newDate)
          .format("dddd")
          .slice(0, 3)}
      </p>
    </div>
  );
};

export default Card;
