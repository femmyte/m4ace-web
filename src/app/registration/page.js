"use client";
import React, { useState, useEffect } from "react";

const Registration = () => {
  const [iframeWidth, setIframeWidth] = useState("100%"); // Initial width
  const [iframeHeight, setIframeHeight] = useState("100%"); // Initial height

  //   useEffect(() => {
  //     function handleResize() {
  //       // Adjust iframe dimensions based on viewport size
  //       const newWidth = window.innerWidth < 640 ? window.innerWidth : 640;
  //       //   const newHeight = Math.min(600, Math.floor((9 * newWidth) / 16)); // Maintain aspect ratio (16:9)
  //       setIframeWidth(newWidth + "px");
  //       //   setIframeHeight(newHeight + "px");
  //     }

  //     // Add event listener for window resize
  //     window.addEventListener("resize", handleResize);

  //     // Call handleResize initially to set dimensions
  //     handleResize();

  //     // Clean up event listener on component unmount
  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);
  return (
    <div
      style={{
        width: "100%",
        // maxWidth: "640px",
        margin: "auto",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd8Kn2mScBaXK7qdknPUzStp4MztDMat_PBqEordgOzWpAvWw/viewform?embedded=true"
        width={iframeWidth}
        height={iframeHeight}
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Registration;
