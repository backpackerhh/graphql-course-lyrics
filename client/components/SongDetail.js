import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import LyricCreate from "./LyricCreate";
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

  const { song } = data;

  return (
    <div>
      <GoBack to="/" />

      <h1>{song.title}</h1>

      <LyricCreate songId={song.id} />
    </div>
  );
};

export default SongDetail;
