import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const SongList = ({ data }) => {
  const { songs, loading } = data;

  const renderSongs = () => {
    return songs.map((song) => {
      return <li key={song.id}>{song.title}</li>;
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return <ul>{renderSongs()}</ul>;
};

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
