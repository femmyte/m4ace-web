import React from "react";
import Header from "./Header";
import Info from "./Info";
import FAQ from "./FAQ";
import Animation from "@/components/common/Animation";
import Footer from "@/components/common/Footer";

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
      <Animation style="fade-left" placement="center-center">
        <Footer />
      </Animation>
    </div>
  );
};

export default Home;
