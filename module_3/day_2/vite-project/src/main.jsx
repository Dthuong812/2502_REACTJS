import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./page/HomePage.jsx";
import MenuPage from "./page/MenuPage.jsx";
import DetailPage from "./page/DetailPage.jsx";
import Login from "./page/Login.jsx";
import CustomMenuPage from "./page/CustomMenuPage.jsx";
import ProfilePage from "./page/ProfilePage.jsx";
import CartPage from "./page/CartPage.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {path: "/login",
  element: <Login/>,},
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/menu", element: <MenuPage /> },
      { path: "/menu/:id", element: <DetailPage /> },
      { path: "/menu/custom", element: <CustomMenuPage/> },
      { path: "/profile", element: <ProfilePage/> },
      { path:"/cart" ,element:<CartPage />} ,
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

