export default (state = false, action) => {
    switch(action.type){
      case "ADMIN_LOGIN":
        return !state;
      default:
        return state;
      }
  }
  