// import React, { Component, useState, useEffect, useRef } from "react";
// import ReactDom from "react-dom";
// import "./App.css";

// const useClick = (onClick) => {
//   const element = useRef();
//   useEffect(() => {
//     if (element.current) {
//       element.current.addEventListener("click", onClick);
//     }
//     return () => {
//       if (element.current) {
//         element.current.removeEventListener("click", onClick);
//       }
//     };
//   }, []);
//   return element;
// };

// const App = () => {
//   const sayHello = () => console.log("say Hello!");
//   const title = useClick(sayHello);

//   return (
//     <div className="App">
//       <h1 ref={title}>HOOKS</h1>
//     </div>
//   );
// };

// export default App;

// import React, { useState, useRef, useEffect } from "react";
// import "./App.css";

// const useClick = (onClick) => {
//   const element = useRef();
//   useEffect(() => {
//     if (element.current) {
//       element.current.addEventListener("click", onClick);
//     }
//     return (
//       () => {
//         if (element.current) {
//           element.current.removeEventListener("click", onClick);
//         }
//       },
//       []
//     );
//   });
//   return element;
// };

// const App = () => {
//   const sayHello = () => console.log("sayhello");
//   const potato = useClick(sayHello);

//   return (
//     <div className="App">
//       <h1 ref={potato}>Hooks</h1>
//     </div>
//   );
// };

// export default App;

import React, { useRef, useEffect } from "react";
import "./App.css";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
  });
  return element;
};

const App = () => {
  const sayHello = () => console.log("say");
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>HOOKS</h1>
    </div>
  );
};

export default App;
