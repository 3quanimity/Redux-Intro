import { UPDATE_USER } from "../actions/user-actions";

export const userReducer = (state = "", { type, payload }) => {
  switch (type) {
    case UPDATE_USER:
      return payload;
    default:
      return state;
  }
};
