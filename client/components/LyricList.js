import React from "react";
import { useMutation } from "@apollo/client";

import likeLyricMutation from "../mutations/likeLyric";

const LyricList = ({ lyrics }) => {
  const [likeLyric, { data }] = useMutation(likeLyricMutation);

  const handleLike = (id, likes) => {
    likeLyric({
      variables: { id },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id,
          __typename: "LyricType",
          likes: likes + 1,
        },
      },
    });
  };

  const renderLyrics = () => {
    return lyrics.map((lyric) => {
      return (
        <li key={lyric.id} className="collection-item">
          {lyric.content}

          <div className="vote-box">
            <i className="material-icons" onClick={() => handleLike(lyric.id, lyric.likes)}>
              thumb_up
            </i>

            {lyric.likes}
          </div>
        </li>
      );
    });
  };

  return <ul className="collection">{renderLyrics()}</ul>;
};

export default LyricList;
