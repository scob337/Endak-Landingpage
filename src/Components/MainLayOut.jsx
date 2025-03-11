import { Outlet } from "react-router-dom";
import NavBar from "./SingleComponents/NavBar/NavBar";
import Footer from "./SingleComponents/Footer/Footer";

const MainLayOut = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayOut;
