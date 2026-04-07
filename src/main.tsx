import { createRoot } from "react-dom/client";
import App from "./app/App/App.js";
import { HashRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Missing root Element");

createRoot(rootElement).render(<App />);
