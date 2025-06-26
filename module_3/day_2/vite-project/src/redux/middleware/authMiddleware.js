
import { login as loginAction, logout as logoutAction } from "../actions/authActions";

export const login = (username, password) => {
  return async (dispatch) => {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }

    dispatch(
      loginAction(data.token || data.accessToken, {
        id: data.id,
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        image: data.image,
      })
    );
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(logoutAction());
  };
};
