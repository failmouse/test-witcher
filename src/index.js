import React from 'react';
import ReactDOM from "react-dom/client";
import './index.scss';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MainPage from "./pages/main-page/mainpage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Header/>
        <MainPage/>
      <Footer/>
  </React.StrictMode>
);
