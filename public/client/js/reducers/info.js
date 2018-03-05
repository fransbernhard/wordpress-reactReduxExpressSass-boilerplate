import { FETCH_INFO } from "../action-types/constants";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_INFO:
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
