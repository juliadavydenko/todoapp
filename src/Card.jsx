import React from "react";

function Card(props) {
  return (
    <div className="card" style={{ backgroundColor: props.completed ? "white" : "#917FB3"}}>
      
  
      
  
    <div className="bottom">
    <button className="button-1" onClick={() => props.completeTask(props.id)}>Complete</button>
    <button className="button-2" onClick={() => props.deleteTask(props.id)}>Delete Task</button>
        </div>
        <h1>{props.taskName}</h1>
    </div>
  );
}

export default Card;


