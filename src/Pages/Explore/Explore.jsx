import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";
import useFetch from "../../Hooks/useFetch";
import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";
import MovieCard from "../../Components/MovieCard/MovieCard";
import Spinner from "../../Components/Spinner/Spinner";

import "./Explore.scss";

let filters = {};

const sortbyData = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  {
    value: "primary_release_date.desc",
    label: "Release Date Descending",
  },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "original_title.asc", label: "Title (A-Z)" },
];
const Explore = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState(null);
  const [sortby, setSortby] = useState(null);
  const { mediaType } = useParams();

  const { data: genresData } = useFetch(`/genre/${mediaType}/list`);

  const fetchInitialData = () => {
      setLoading(true);
      fetchDataFromApi(`/discover/${mediaType}`, filters).then((res) => {
          setData(res);
          setPageNum((prev) => prev + 1);
          setLoading(false);
      });
  };

  const fetchNextPageData = () => {
      fetchDataFromApi(
          `/discover/${mediaType}?page=${pageNum}`,
          filters
      ).then((res) => {
          if (data?.results) {
              setData({
                  ...data,
                  results: [...data?.results, ...res.results],
              });
          } else {
              setData(res);
          }
          setPageNum((prev) => prev + 1);
      });
  };

export default Explore;
