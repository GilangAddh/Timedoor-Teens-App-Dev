const initialState = {
  username: '',
  email: '',
  password: '',
};
export const profileReducer = (state = initialState, action) => {
  if (action.type === 'CREATE_PROFILE') {
    const data = action.payload;
    const newUsername = data.username;
    const newEmail = data.email;
    const newPassword = data.password;

    return {
      ...state,
      username: newUsername,
      email: newEmail,
      password: newPassword,
    };
  }
  return state;
};
