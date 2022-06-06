 import React from 'react';
import "./TodoForm.css";
import { TodoContext } from "../App/TodoContext";

function TodoForm(){
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {
    addTodo,
    setOpenModal,
} = React.useContext(TodoContext);


   const onChange = (event)=>{
  setNewTodoValue(event.target.value)
   };

   const onCancel = ()=>{
    setOpenModal(false);
   };
   const onSubmit = (event)=>{
    event.preventDefault();
    addTodo(newTodoValue);

   };

  return(
    <form onSubmit={onSubmit}>
     <label></label>
     <textarea
     value={newTodoValue}
     onChange={onChange}
     placeholder="Escribe una nueva tarea..."
     />
     <div>
       <button className="TodoForm-button-cancel"
       type="button"
       onClick={onCancel}
       >
         Cancelar
       </button>
       <button className="TodoForm-button-add"
       type="submit"
       >
       Añadir
         <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
        <span id="span4"></span>
       </button>
     </div>
    </form>
  );
}

export {TodoForm};