import React from 'react';
import ReactDOM from "react-dom/client";
import './index.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MainPage from "./pages/main-page/mainpage";
import FormPage from './pages/form-page/formpage';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={ <><Header/> <MainPage/></>} />
          <Route path="/request" element={<FormPage />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
);
