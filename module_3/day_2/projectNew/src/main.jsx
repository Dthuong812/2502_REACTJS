import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import RegisterPage from "./page/RegisterPage.jsx";
import LoginPage from "./page/LoginPage.jsx";
import AboutPage from "./page/AboutPage.jsx";
import StudentPage from "./page/StudentPage.jsx";
import ContactPage from "./page/ContactPage.jsx";
import StudentDetailPage from "./page/StudentDetailPage.jsx";


const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <App />,
    children: [
     {
      path: "/about",
      element: <AboutPage/>,
     },
     {
      path: "/student",
      element: <StudentPage/>,
     },
     {
      path: "/contact",
      element: <ContactPage/>,
     },
     {
      path: "/student/:abc",
      element: <StudentDetailPage/>,
     },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
