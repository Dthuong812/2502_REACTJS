export const apiMiddleware = (store) => (next) => async (action) => {
  if (action.type !== "api/callStarted") return next(action);

  const { url, method, data, onSuccess, onError } = action.payload;

  try {
    const response = await fetch(url, {
      method: method || "GET",
      headers: { "Content-Type": "application/json" },
      body: data ? JSON.stringify(data) : undefined,
    });

    const result = await response.json();

    if (response.ok) {
      if (typeof onSuccess === "function") {
        store.dispatch(onSuccess(result));
      } else {
        store.dispatch({ type: onSuccess, payload: result });
      }
    } else {
      store.dispatch({ type: onError, payload: result });
    }
  } catch (error) {
    store.dispatch({ type: onError, payload: error.message });
  }
};
