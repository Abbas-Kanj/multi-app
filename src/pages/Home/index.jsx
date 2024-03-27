import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";


const Home = () => {
  const navigate = useNavigate();

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

      <div className="header flex center">
        <h1>Welcome to MULTI-APP</h1>
      </div>

      <section className="Nav-cards flex column center">
        <div className="Nav-card landing-sec cover-1 rounded">
          <div className="centered">
            <h2>Weather App</h2>
            <p>A weather app displays current weather conditions and forecasts for locations, helping users plan their day.</p>
            <button onClick={()=>{
            navigate('/Weather')
          }}>Check it Out!</button>
          </div>
        </div>
        <div className="Nav-card landing-sec cover-2 rounded">
          <div className="centered-2">
            <h2>Calculator App</h2>
            <p>A calculator app performs basic and advanced mathematical calculations quickly and accurately.</p>
            <button onClick={()=>{
            navigate('/Calculator')
          }}>Check it Out!</button>
          </div>
          
        </div>
        <div className="Nav-card landing-sec cover-3 rounded">
          <div className="centered-3">
            <h2>Sticky Notes App</h2>
            <p>A sticky notes app creates digital notes for reminders,</p>
            <p>to-do lists, or short notes, aiding in organization.</p>
            <button onClick={()=>{
            navigate('/StickyNotes')
          }}>Check it Out!</button>
          </div>
        </div>
      </section>
      <div className="bottom"></div>
    </div>
  );
};

export default Home;
