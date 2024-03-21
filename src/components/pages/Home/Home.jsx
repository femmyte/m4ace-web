import React from "react";
import Header from "./Header";
import Info from "./Info";
import FAQ from "./FAQ";
import Animation from "@/components/common/Animation";
import Footer from "@/components/common/Footer";
import About from "./About";
import Partners from "./Partners";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Header />
      <Animation style="fade-right" placement="center-center">
        <Info />
      </Animation>
      {/* <Animation style="fade-left" placement="center-center"> */}
      <About />
      {/* </Animation> */}
      {/* <Animation style="fade-left" placement="center-center"> */}
      <Contact />
      {/* </Animation> */}
      <Animation style="fade-right" placement="center-center">
        <FAQ />
      </Animation>
      <Animation style="fade-left" placement="center-center">
        <Partners />
      </Animation>
      {/* <Animation style="fade-right" placement="center-center">
        <Footer />
      </Animation> */}
    </div>
  );
};

export default Home;
