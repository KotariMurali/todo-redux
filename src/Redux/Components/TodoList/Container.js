import React, { useState } from "react";
import { connect } from "react-redux";
import { Addtodos } from "../../Actions/Actioncreators";
import Presentation from "./Presentation";

const Container = (props) => {
  const { todos } = props;
  const [state, setstate] = useState({
    Todos: [],
    input:""
  });
  const handleInput = (e) => {
   setstate({input:e.target.value})
  };
  // const handleTodos = (e) => {
  //   settodos(e.target.value);
  // };
  const Addtodo = (e) => {
    console.log(todos+"=================container==============");
    setstate({
      Todos:[...todos,
        input
      ]
    })
    setinput("");
    e.preventDefault();
    const key = Date.now;
    console.log(key);
  };
  // const DeleteTodo = (index) => {
  //   const Tododata = todos.filter((todo, i) => index !== i);

  //   settodos(Tododata);
  // };
  return (
    <div>
      <Presentation
      {...state}
        Addtodo={Addtodo}
        handleInput={handleInput}
        // DeleteTodo={DeleteTodo}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};
const mapDispatchToProps = () => {
  return {
    _Addtodos: () => dispatch(Addtodos()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Container);
