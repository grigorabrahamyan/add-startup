// App.tsx
// Kindacode.com
import React, { useState, useEffect } from "react";

// Create an interface for the size of the window
interface Size {
  width: number;
  height: number;
}

const Res = () => {
  // The size of the window
  const [size, setSize] = useState<Size>();

  // This function updates the state thus re-render components
  const resizeHanlder = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setSize({
      width: width,
      height: height,
    });
  };

  // Listening for the window resize event
  useEffect(() => {
    window.addEventListener('resize', resizeHanlder);

    // Cleanup function
    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', resizeHanlder);
    }
  }, []);

  return (
    <div
      // Change the backgronund color according to the window's width
      style={{
        ...styles.container,
        backgroundColor:
          !size || size.width <= 500
            ? "white"
            : size && size.width <= 700
            ? "green"
            : "orange",
      }}
    >
      {/* Display width and height as text */}
      {size && (
        <>
          <h2>Width: {size.width}</h2>
          <h2>Height: {size.height}</h2>
        </>
      )}

      {!size && <h2>Use your mouse to resize the window</h2>}
      <h5>Welcome to KindaCode.com</h5>
    </div>
  );
};

// Style the container
const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
} as const;

export default Res;