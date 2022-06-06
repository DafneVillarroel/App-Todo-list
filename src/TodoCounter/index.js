import React from "react";
import { TodoContext } from "../App/TodoContext";
import "./TodoCounter.css";



function TodoCounter() {

 const {totalTodos, completedTodos} = React.useContext(TodoContext);

  return(
    <div >
    <div className="container">
    <h1 className="Title">What's Up! </h1>
    <img className="emoji" src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/48159/waving-hand-emoji-clipart-md.png"/>
    </div>
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} tareas</h2>
  </div>
  );
}


export { TodoCounter };