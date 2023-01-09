import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { key: "h1" },
  "Hello World-Parcel h1"
);
const heading2 = React.createElement(
  "h2",
  { key: "h2" },
  "Hello World-Parcel h2"
);

const container = React.createElement(
  "section",
  { id: "container", className: "container" },
  [heading1, heading2]
);

const rootEl = document.getElementById("root");

const root = ReactDOM.createRoot(rootEl);

root.render(container);
