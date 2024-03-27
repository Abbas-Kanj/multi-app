import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

const Weather = () => {
  const navigate = useNavigate();
  const api = {
    key: 'd0093535b8cc242b575c8ba34747a721',
    base: 'https://api.openweathermap.org/data/2.5/'
  };

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  const [upcomingForecast, setUpcomingForecast] = useState([]);

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((response) => response.json())
      // 
      .then((result) => {
        setWeather(result);
        console.log(result)
        loadUpcomingForecast(result)
      });
  };

  const loadUpcomingForecast = async (weather) => {
    if (!weather || !weather.coord) {
      console.error('Invalid weather data');
      return;
    }
  
    const response = await axios.get(`${api.base}forecast?lat=${weather.coord.lat}&lon=${weather.coord.lon}&appid=${api.key}`);
    setUpcomingForecast(response.data);
    console.log(response.data);
  };
  

  useEffect(()=>{
    loadUpcomingForecast()
  }, [])

  return (
    <div className="body rubik-regular">
      <nav className="flex row nav-bar black-text-p">
        <div><i className="icon"></i></div>
        <div className="flex row nav-bar-anchors">
          <button onClick={()=>{
            navigate('/')
          }}>Home</button>
          <button onClick={()=>{
            navigate('/Weather')
          }}>Weather</button>
          <button onClick={()=>{
            navigate('/Calculator')
          }}>Calculator</button>
          <button onClick={()=>{
            navigate('/StickyNotes')
          }}>Sticky Notes</button>
        </div>
      </nav>

      <div className="flex row search-bar">
          <input
           type="text"
           placeholder="Enter the city you want to search"
           onChange={(e)=> setSearch(e.target.value)}
           />
          <button onClick={searchPressed}>Search</button>
      </div>
      

      {typeof weather.main !== "undefined" ? (
        <>
      <div className="header-name flex center">
        <h1>{weather.name} Overview</h1>
      </div>

      <div className=" flex column center">
        <div className=" overview-cards flex row">
          <div className="overview-card flex column">
            <h2>Windspeed</h2>
            <p>{weather.wind.speed} KM/H</p>
          </div>
          <div className="overview-card flex column">
            <h2>{weather.weather[0].main}</h2>
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
        <div className="flex row">
          <div className="overview-card flex column">
            <h2>Temprature</h2>
            <p>{weather.main.temp} *</p>
          </div>
          <div className="overview-card flex column">
            <h2>Humidity</h2>
            <p>{weather.main.humidity}</p>
          </div>
        </div>
      </div>

      <div className="flex column center">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
      </>
      ) : (
        ""
      )}
      <div className="bottom"></div>
    </div>
  )
}

export default Weather
