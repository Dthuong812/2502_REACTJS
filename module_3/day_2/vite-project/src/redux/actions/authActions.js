export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (accessToken, userData) => {
  return {
    type: LOGIN,
    payload: {
      token: accessToken,
      user: userData,
    },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
