import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import App1 from "./App1";
import "./App.css"
import { BrowserRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <App1/>
    </BrowserRouter>
  </React.StrictMode>
);