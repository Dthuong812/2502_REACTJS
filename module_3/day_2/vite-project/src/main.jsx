import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./page/HomePage.jsx";
import MenuPage from "./page/MenuPage.jsx";
import DetailPage from "./page/DetailPage.jsx";
import { CartProvider } from "./context/CartContext.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/menu", element: <MenuPage /> },
      { path: "/menu/:id", element: <DetailPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
