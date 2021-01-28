import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Link, useHistory } from "react-router-dom";

import fetchSongsQuery from "../queries/fetchSongs";
import createSongMutation from "../mutations/createSong";

const SongCreate = () => {
  const [addSong, { data }] = useMutation(createSongMutation);
  const [title, setTitle] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    addSong({
      variables: {
        title,
      },
      refetchQueries: [{ query: fetchSongsQuery }],
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div>
      <Link to="/" className="btn btn-medium">
        Back
      </Link>

      <h1>Create a new song</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} />
      </form>
    </div>
  );
};

export default SongCreate;
