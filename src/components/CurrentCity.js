import React, { useState } from "react";
import axios from "axios";

const API_KEY = "c46975f761ebd2c5a5e3a897ca1001f3";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const dayOfWeek = new Date();
const day = daysOfWeek[dayOfWeek.getDay()];

const CurrentCity = props => {
  // State Hooks
  const [city, setCity] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [icon, setIcon] = useState("");

  // Get request para geolocacion desde IP-API.
  //TODO: Solucionar esto: No tendria que realizar 2 request a ip-api ni setear 2 hooks distintos para la city, pero fue la unica forma que encontre de actualizar el get a OWM.
  const firstReq = axios.get("http://ip-api.com/json/");

  firstReq.then(function(response) {
    setCurrentCity(response.data.city);
  });

  // Get request para OpenWeatherMap API
  const secondReq = axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${API_KEY}&units=metric`
  );

  axios
    .all([firstReq, secondReq])
    .then(
      axios.spread((firstRes, secondRes) => {
        setCity(firstRes.data.city.toUpperCase());
        setTemperature(secondRes.data.main.temp);
        const icono = secondRes.data.weather[0].icon;
        setIcon(`http://openweathermap.org/img/wn/${icono}@2x.png`);
      })
    )
    .catch(errors => {
      console.error(errors);
    });

    
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className="city-title">{city}</div>
      <img className="city-icon" src={icon}/>
      <div className="city-temp">{Math.ceil(temperature)}º</div>
      <div className="city-date">{day}</div>
    </div>
  );
};

export default CurrentCity;
