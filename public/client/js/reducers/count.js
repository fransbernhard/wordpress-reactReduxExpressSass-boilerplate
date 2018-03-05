import {INCREMENT, DECREMENT} from "../action-types/constants";

const initialState = {
  count: 0
};

const counts = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return {
        count: state.count+1
      };
    case DECREMENT:
      return {
        count: state.count-1
      };
    default:
      return state;
  }
}
export default counts;
