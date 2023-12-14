import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./Store/homeSlice";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import Searchresult from "./Pages/searchResult/SearchResult";
import Explore from "./Pages/Explore/Explore";
import pageNotFound from "./Pages/404/pageNotFound";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
