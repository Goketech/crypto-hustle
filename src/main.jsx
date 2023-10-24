import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../routes/Layout";
import NotFound from "../routes/NotFound";
import DetailView from "../routes/DetailView";
import App from "./App.jsx";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<App />} />
      </Route>
      <Route
        index={false}
        path="/coinDetails/:symbol"
        element={<DetailView />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
