import React from "react";
import MenuComponent from "../components/MenuComponent";
import { Outlet } from "react-router-dom";
import BannnerComponent from "../components/BannnerComponent";
import BookingSteps from "../components/BookingSteps";
import IntroComponent from "../components/IntroComponent";
import BookingSection from "../components/BookingSection";
import FooterComponent from "../components/FooterComponent";
import ChooseComponent from "../components/ChooseComponent";
import ServiceComponent from "../components/ServiceComponent";

const HomePage = () => {
  return (
    <div>
      <BannnerComponent />
      <IntroComponent />
      <BookingSteps />
      <BookingSection/>
      <ServiceComponent/>
      <ChooseComponent/>
    </div>
  );
};

export default HomePage;
