import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

import { Layout } from "./Layout";

export const FilmsDetails = () => {
  let { episode_id } = useParams();
  const [filmDetails, setFilmDetails] = useState({});

  useEffect(() => {
    const getFilmDetails = async () => {
      const endPoint = `https://swapi.dev/api/films/${episode_id}/`;
      const res = await Axios.get(endPoint);
      console.info("App [17]", { "res.data": res.data, endPoint });
      setFilmDetails(res.data);
    };
    getFilmDetails();
  }, []);

  return (
    <Layout>
      {filmDetails && filmDetails.title ? (
        <div className="FilmsDetails">{filmDetails.title}</div>
      ) : null}
    </Layout>
  );
};
