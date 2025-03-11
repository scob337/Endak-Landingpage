import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "./Components/MainLayOut.jsx";
import About from "./pages/About/About.jsx";
import Services from "./pages/Services/Services.jsx";
import Contact from "./pages/ContactUs/Contact.jsx";
import Products from "./pages/Products/Product.jsx";
import Join from "./pages/Join/Join.jsx";
import Partner from "./pages/Partner/Partner.jsx";
import DashboardLayOut from "./Components/DashboardLayOut.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/services", element: <Services /> },
      { path: "/products", element: <Products /> },
      { path: "/join", element: <Join /> },
      { path: "/partner", element: <Partner /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayOut />,
    children: [
      { path: "", element: <Home /> }, // الصفحة الرئيسية للداشبورد
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "services", element: <Services /> },
      { path: "products", element: <Products /> },
      { path: "join", element: <Join /> },
      { path: "partner", element: <Partner /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
