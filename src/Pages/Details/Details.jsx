import React from "react";
import "./Details.scss";
import useFetch from "../../Hooks/useFetch";
import { useParams } from "react-router-dom";
import DetailsBanner from "./DetailsBanner/DetailsBanner";

const Details = () => {
  // const { mediaType, id } = useParams();
  // const [data, loading] = useFetch(`/${mediaType}/${id}`);
  return (
    <div>
      <DetailsBanner />
    </div>
  );
};

export default Details;
