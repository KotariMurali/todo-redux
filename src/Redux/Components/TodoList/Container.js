import React, { useState } from "react";
import { connect } from "react-redux";
import Presentation from "./Presentation";
import { handleTodo } from "../../middleware/index";
const Container = (props) => {
  console.log(props)
  const {todos, _handleTodo}=props
  // console.log(_handleTodo)
  const [input, setinput] = useState("");
 
  const handleInput = (e) => {
    setinput(e.target.value);
  };
 
  const Addtodo = (e) => {
    e.preventDefault()
    _handleTodo(input)
    setinput("")
  };
  // const DeleteTodo = (index) => {
  //   const Tododata = todos.filter((todo, i) => index !== i);

  //   settodos(Tododata);
  // };
  return (
    <div>
      <Presentation
        input={input}
        todos={todos}
        Addtodo={Addtodo}
        handleInput={handleInput}
        // DeleteTodo={DeleteTodo}
      />
    </div>
  );
};
const mapStatetoProps = (state) => {
  return {
    todos: state.todos,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    _handleTodo: (payload) => dispatch(handleTodo(payload)),
  };
};
export default connect(mapStatetoProps, mapDispatchToProps)(Container);
