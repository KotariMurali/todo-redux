import React from "react";
import '../../Styles/Todo.css'
import { TiDelete } from "react-icons/ti";
const Presentation = (props) => {
  const {  input,Todos, Addtodo,  handleInput, DeleteTodo } = props;
  console.log(Todos+"===============presentation===============")
  return (
    <div>
      <div className="App">
        <form id="to-do-form">
          <input
            placeholder="enter todo"
            type="text"
            value={input}
            onChange={handleInput}
          />
          <button type="submit" onClick={Addtodo}>
            add
          </button>
        </form>
        {Todos.map((todo, index) => (
          <ul className="list" key={todo}>
            {todo}
            <span>
              <TiDelete
                className="TiDelete"
                key={index}
                onClick={() => DeleteTodo(index)}
              />
            </span>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Presentation;
