// 1 import react and reactdom libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// 2 get a reference to the div with ID root
const el = document.getElementById("root");
// 3 tell react to take control of that element
const root = ReactDOM.createRoot(el);
// 4 create a component
// function Home() {
//   return (
//     <div className="wrapper">
//         <App />
//       </div>
//   );
// }
// 5 show the component on the screen
root.render(<App />);
