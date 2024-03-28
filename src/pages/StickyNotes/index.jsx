import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const StickyNotes = () => {

  const navigate = useNavigate();
  const descDivRev = useRef(null);
  const mainDiv = useRef(null);
  const [newSticktyNotes, setNewSticktyNotes] = useState([]);

  const deleteDiv = ()=>{
    if (mainDiv.current){
      mainDiv.current.remove();
    }
  }

  const createStickyNote = ()=>{
    const newStickyNote = [...newSticktyNotes, <div className="sticky-note-container-creater" key={newSticktyNotes.length}>{<div ref={mainDiv} className="flex column  sticky-note-container">
    <div className="flex row sticky-note-bar">
      <div className="s-n-b-1 flex">
        <button className="done-btn" onClick={() => handleClick('done-btn')}>.</button>
        <button className="pending-btn" onClick={() => handleClick('pending-btn')}>.</button>
        <button className="canceled-btn" onClick={() => handleClick('canceled-btn')}>.</button>
      </div>
      <div className="flex">
        <button className="delete-btn" onClick={deleteDiv}>X</button>
      </div>
    </div>
    <div ref={descDivRev} className="flex column sticky-note-main">
      <input type="text" placeholder="Sticky Note Title..."/>
      <textarea placeholder="Sticky Note Description..."/>
    </div>
  </div>}</div>]

    setNewSticktyNotes(newStickyNote)
  }

  const handleClick = (className) => {
    if (descDivRev.current) {
      descDivRev.current.style.backgroundColor = getBackgroundColor(className);
    }
  };

  const getBackgroundColor = (className) => {
    switch (className) {
      case 'done-btn':
        return '#008000';
      case 'pending-btn':
        return '#fefe25';
      case 'canceled-btn':
        return '#ff0000';
      default:
        return '#fefe25';
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
        <button onClick={createStickyNote}>Create a Sticky Note!</button>
        </div>
      
      <div className="flex row wrap sticky-note-container-creater">
        {newSticktyNotes.map((div, index)=>(
          <React.Fragment key={index}>{div}</React.Fragment>
        ))}
      </div>
      {/* <div ref={mainDiv} className="flex column center sticky-note-container">
        <div className="flex row sticky-note-bar">
          <div className="s-n-b-1 flex">
            <button className="done-btn" onClick={() => handleClick('done-btn')}>.</button>
            <button className="pending-btn" onClick={() => handleClick('pending-btn')}>.</button>
            <button className="canceled-btn" onClick={() => handleClick('canceled-btn')}>.</button>
          </div>
          <div className="flex">
            <button className="delete-btn" onClick={deleteDiv}>X</button>
          </div>
        </div>
        <div ref={descDivRev} className="flex column sticky-note-main">
          <input type="text" placeholder="Sticky Note Title..."/>
          <textarea placeholder="Sticky Note Description..."/>
        </div>
      </div> */}
      
       
    </div>
  );
}

export default StickyNotes
