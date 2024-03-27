import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Calculator = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [calculations,setCalculations] = useState([]);

  useEffect((setCalculations)=>{
    console.log(calculations);
  })

  return (
    <div className="calc-bg body rubik-regular">
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
          <h1>{count}</h1>
        </div>
        <div className="">
          <div className="calc-btns flex row">
            <button onClick={()=>{
              setCalculations([])
              setCount('')
            }}>C</button>
            <button onClick={()=>{
              setCount(count+'+-')
              setCalculations([calculations, count])
            }}>+/-</button>
            <button onClick={()=>{
              setCount(count+'%')
              setCalculations([calculations, count])
            }}>%</button>
            <button onClick={()=>{
              setCount(count+'/')
              setCalculations([calculations, count])
            }}>/</button>
          </div>
          <div className="calc-btns flex row">
            <button onClick={()=>{
              setCount(count+'7')
              setCalculations([calculations, count])
            }}>7</button>
            <button onClick={()=>{
              setCount(count+'8')
              setCalculations([calculations, count])
            }}>8</button>
            <button onClick={()=>{
              setCount(count+'9')
              setCalculations([calculations, count])
            }}>9</button>
            <button onClick={()=>{
              setCount(count+'x')
              setCalculations([calculations, count])
            }}>X</button>
          </div>
          <div className="calc-btns flex row">
            <button onClick={()=>{
              setCount(count+'4')
              setCalculations([calculations, count])
            }}>4</button>
            <button onClick={()=>{
              setCount(count+'5')
              setCalculations([calculations, count])
            }}>5</button>
            <button onClick={()=>{
              setCount(count+'6')
              setCalculations([calculations, count])
            }}>6</button>
            <button onClick={()=>{
              setCount(count+'-')
              setCalculations([calculations, count])
            }}>-</button>
          </div>
          <div className="calc-btns flex row">
            <button onClick={()=>{
              setCount(count+'3')
              setCalculations([calculations, count])
            }}>3</button>
            <button onClick={()=>{
              setCount(count+'2')
              setCalculations([calculations, count])
            }}>2</button>
            <button onClick={()=>{
              setCount(count+'1')
              setCalculations([calculations, count])
            }}>1</button>
            <button onClick={()=>{
              setCount(count+'+')
              setCalculations([calculations, count])
            }}>+</button>
          </div>
          <div className="calc-btns flex row">
            <button onClick={()=>{
              setCount(count+'0')
              setCalculations([calculations, count])
            }}>0</button>
            <button onClick={()=>{
              setCount(count+'.')
              setCalculations([calculations, count])
            }}>,</button>
            <button onClick={()=>{
              setCount(count+'+')
              setCalculations([calculations, count])
            }}>=</button>
          </div>
        </div>
      </div>


      <div className="bottom"></div>
      {/* {
      calculations.map((value, index)=>{
        return initial={index};
      })
    } */}
    </div>
    
  )
}

export default Calculator
