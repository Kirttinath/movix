import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";
import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../Components/contentWrapper/ContentWrapper";
// import MovieCard from "../../Components/MovieCard/MovieCard";
// import Spinner from "../../Components/Spinner/Spinner";
import noResults from "../../assets/no-results.png";
import "./SearchResult.scss";

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  return <div className="searchResultsPage"></div>;
};

export default SearchResult;
