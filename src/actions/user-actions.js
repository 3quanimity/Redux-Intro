export const UPDATE_USER = "UPDATE_USER";

export const updateUser = newName => ({
  type: UPDATE_USER,
  payload: newName
});
