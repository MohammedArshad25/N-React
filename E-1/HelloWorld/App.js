import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id : "head1"}, "Hello world using React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
