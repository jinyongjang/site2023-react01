import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import IntroPage from "./components/pages/IntroPage";
import YoutubePage from "./components/pages/YoutubePage";
import MoviePage from "./components/pages/MoviePage";
import UnsplashPage from "./components/pages/UnsplashPage";
import PortPage from "./components/pages/PortPage";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header attr={["header__wrap gmarket5 bg-blue"]} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/port" element={<PortPage />} />
          <Route path="/youtube" element={<YoutubePage />} />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/unsplash" element={<UnsplashPage />} />
        </Routes>
        <Footer attr={"footer__wrap gmarket5 section"} />
      </BrowserRouter>
    </>
  );
};

export default App;
