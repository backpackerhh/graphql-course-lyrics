import React from "react";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

const SongList = () => {
  const { loading, error, data } = useQuery(query);

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

  return <ul className="collection">{renderSongs()}</ul>;
};

export default SongList;
