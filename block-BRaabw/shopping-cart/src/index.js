// import React from "react";
// import { render } from "react-dom";
// export default function App() {
//   return <div>Hello World!</div>;
// }

// render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./component/app";

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
