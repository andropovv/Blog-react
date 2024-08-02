import React, { Suspense } from "react";
import { Routes } from "react-router";
import { Link, Route } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>

      <button onClick={toggleTheme}>Theme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
