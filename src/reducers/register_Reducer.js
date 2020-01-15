export default (state = {}, action) =>{
    switch (action.type) {
      case "CREATE_LOGIN":
        return action.payload;
      default:
        return state;
    }
  };
  