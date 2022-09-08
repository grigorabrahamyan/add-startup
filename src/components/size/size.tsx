// // App.tsx
// // Kindacode.com
// import React, { useState, useEffect } from "react";

// // Create an interface for the size of the window
// interface Size {
//   width: number;
//   height: number;
// }

// const Res = () => {
//   // The size of the window
//   const [size, setSize] = useState<Size>();

//   // This function updates the state thus re-render components
//   const resizeHanlder = () => {
//     const width = window.innerWidth;
//     const height = window.innerHeight;

//     setSize({
//       width: width,
//       height: height,
//     });
//   };

//   // Listening for the window resize event
//   useEffect(() => {
//     window.addEventListener('resize', resizeHanlder);

//     // Cleanup function
//     // Remove the event listener when the component is unmounted
//     return () => {
//       window.removeEventListener('resize', resizeHanlder);
//     }
//   }, []);

//   return (
//     <div
//       // Change the backgronund color according to the window's width
//       style={{
//         ...styles.container,
//         backgroundColor:
//           !size || size.width <= 500
//             ? "white"
//             : size && size.width <= 700
//             ? "green"
//             : "orange",
//       }}
//     >
//       {/* Display width and height as text */}
//       {size && (
//         <>
//           <h2>Width: {size.width}</h2>
//           <h2>Height: {size.height}</h2>
//         </>
//       )}

//       {!size && <h2>Use your mouse to resize the window</h2>}
//       <h5>Welcome to KindaCode.com</h5>
//     </div>
//   );
// };

// // Style the container
// const styles = {
//   container: {
//     width: "100vw",
//     height: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// } as const;

// export default Res;
import { useMediaQuery } from 'react-responsive'

const Desktop = ( children:any ) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ( children:any) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ( children:any ) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ( children :any) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

const Example = () => (
  <div>
    <Desktop>Desktop or laptop</Desktop>
    <Tablet>Tablet</Tablet>
    <Mobile>Mobile</Mobile>
    <Default>Not mobile (desktop or laptop or tablet)</Default>
  </div>
)

export default Example