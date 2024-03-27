import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Calculator = () => {
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

        
      <div className="calc flex column center">
        <div className="calc-display flex column">
          <h1>2204</h1>
        </div>
        <div className="">
          <div className="calc-btns flex row">
            <button>C</button>
            <button>+/-</button>
            <button>%</button>
            <button>/</button>
          </div>
          <div className="calc-btns flex row">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>X</button>
          </div>
          <div className="calc-btns flex row">
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
          </div>
          <div className="calc-btns flex row">
            <button>3</button>
            <button>2</button>
            <button>1</button>
            <button>+</button>
          </div>
          <div className="calc-btns flex row">
            <button>0</button>
            <button>,</button>
            <button>=</button>
          </div>
        </div>
      </div>


      <div className="bottom"></div>
    </div>
  )
}

export default Calculator
