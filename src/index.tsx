import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";


const container = document.getElementById("root");
if (container != null) {
  const root = createRoot(container);
  root.render(<App />);
}

serviceWorker.unregister();
