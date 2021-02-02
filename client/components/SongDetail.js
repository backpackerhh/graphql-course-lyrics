import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import GoBack from "./GoBack";
import fetchSongQuery from "../queries/fetchSong";

const SongDetail = () => {
  const { songId } = useParams();
  const { loading, error, data } = useQuery(fetchSongQuery, {
    variables: {
      id: songId,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error :(</div>;
  }

  return (
    <div>
      <GoBack to="/" />

      <h1>{data.song.title}</h1>
    </div>
  );
};

export default SongDetail;
