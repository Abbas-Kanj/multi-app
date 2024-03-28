import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const StickyNotes = () => {
  const navigate = useNavigate();
  
  const mainDivRef = useRef(null);

  const handleClick = (className) => {
    if (mainDivRef.current) {
      mainDivRef.current.style.backgroundColor = getBackgroundColor(className);
    }
  };

  const getBackgroundColor = (className) => {
    switch (className) {
      case 'done-btn':
        return 'green';
      case 'pending-btn':
        return '#fefe25';
      case 'canceled-btn':
        return 'red';
      default:
        return 'yellow';
    }
  };

  return (
    <div className="body sticky-notes-bg rubik-regular">
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

      <div className="flex rounded center create-sticky-btn">
        <button>Create a Sticky Note!</button>
        </div>
      
      <div className="flex column center sticky-note-container">
        <div className="flex row sticky-note-bar">
          <div className="s-n-b-1 flex">
            <button className="done-btn" onClick={() => handleClick('done-btn')}>.</button>
            <button className="pending-btn" onClick={() => handleClick('pending-btn')}>.</button>
            <button className="canceled-btn" onClick={() => handleClick('canceled-btn')}>.</button>
          </div>
          <div className="flex">
            <button className="delete-btn">X</button>
          </div>
        </div>
        <div ref={mainDivRef} className="flex column sticky-note-main">
          <input type="text" placeholder="Sticky Note Title..."/>
          <textarea placeholder="Sticky Note Description..."/>
        </div>
      </div>

    </div>
  );
}

export default StickyNotes
