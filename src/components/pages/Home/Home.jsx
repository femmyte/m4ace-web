import React from "react";
import Header from "./Header";
import Info from "./Info";
import FAQ from "./FAQ";
import Animation from "@/components/common/Animation";

const Home = () => {
  return (
    <div>
      <Header />
      <Animation style="fade-right" placement="center-center">
        <Info />
      </Animation>
      <Animation style="fade-right" placement="center-center">
        <FAQ />
      </Animation>
    </div>
  );
};

export default Home;
