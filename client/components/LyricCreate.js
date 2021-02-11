import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import createLyricMutation from "../mutations/createLyric";

const LyricCreate = ({ songId }) => {
  const [addLyric, { data }] = useMutation(createLyricMutation);
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addLyric({
      variables: {
        songId,
        content,
      },
    }).then(() => {
      setContent("");
    });
  };

  return (
    <div>
      <h2>Create a new lyric</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="content">Content</label>
        <input
          type="text"
          id="content"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
      </form>
    </div>
  );
};

export default LyricCreate;
