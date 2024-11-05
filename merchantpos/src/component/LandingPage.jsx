import React from "react";
import LandingPageLayout from "./ReusableComponent/LandingPageLayout";
import SliderApp from "./SliderApp";

const LandingPage = () => {
  return (
    <LandingPageLayout>
      <SliderApp />
    </LandingPageLayout>
  );
};

export default LandingPage;
