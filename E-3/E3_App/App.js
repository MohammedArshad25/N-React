import React from "react";
import ReactDOM from "react-dom/client";


const JsxHeading = () => (
  <div>
    <Title />
    <Title></Title>
    {Title()}
    <h1 className="heading">Hi from JSX</h1>
  </div>

)

const Title = () => <h1>Title is here</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<JsxHeading />);
