import React from 'react'
import Store from './Redux/Store/Store'
import { Provider } from "react-redux";
import TodoList from './Redux/Components/TodoList'
const App = () => {
  return (
    <Provider store={Store}>
    <div>
      <TodoList/>
    </div>
    </Provider>
  )
}

export default App
