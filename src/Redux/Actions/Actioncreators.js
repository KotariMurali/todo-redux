import ACTION from "./Actiontypes";

export const Addtodos= (payload) => {
  return {
    type:ACTION.ADD_TODO,
    payload
  };
};

export const Deltodo=()=>{
  return{
    type:ACTION.payload,
    payload
  }
}
