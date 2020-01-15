export default (state = {}, action) => {
  switch (action.type) {
    case "NEW_LOGIN":
      return action.payload;
    default:
      return state;
  }
};