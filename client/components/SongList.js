import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import fetchSongsQuery from "../queries/fetchSongs";

const SongList = () => {
  const { loading, error, data } = useQuery(fetchSongsQuery);

  const renderSongs = () => {
    return data.songs.map((song) => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      );
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error :(</div>;
  }

  return (
    <div>
      <h1>Songs list</h1>

      <ul className="collection">{renderSongs()}</ul>

      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default SongList;
