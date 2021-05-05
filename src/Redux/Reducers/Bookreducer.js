import Initialstate from "./Initialstate";
import ACTION from "../Actions/Actiontypes";
const Bookreducer = (state = Initialstate, action) => {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return {
        ...state,
       todos:[...state.todos,action.payload]
      };
    default:
      return state;
  }
};
export default Bookreducer;
