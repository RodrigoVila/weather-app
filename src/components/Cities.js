import React, { useState } from "react";
import axios from "axios";

const daysOfWeek = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado"
];
const dayOfWeek = new Date();
const day = daysOfWeek[dayOfWeek.getDay()];

const Cities = props => {
  const [icon, setIcon] = useState("");
  const [temperature, setTemperature] = useState("");
  const city = props.city;

  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c46975f761ebd2c5a5e3a897ca1001f3&units=metric`
    )
    .then(function(response) {
      const datos = response.data;
      const icono = datos.weather[0].icon;
      setIcon(`http://openweathermap.org/img/wn/${icono}@2x.png`);
      setTemperature(datos.main.temp);
    });

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className="city-title">{city.toUpperCase()}</div>
      <img className="city-icon" src={icon}/>
      <div className="city-temp">{Math.ceil(temperature)}º</div>
      <div className="city-date">{day}</div>
    </div>
  );
};

export default Cities;
