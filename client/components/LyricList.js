import React from "react";

const LyricList = ({ lyrics }) => {
  const renderLyrics = () => {
    return lyrics.map((lyric) => {
      return (
        <li key={lyric.id} className="collection-item">
          {lyric.content}
        </li>
      );
    });
  };

  return <ul className="collection">{renderLyrics()}</ul>;
};

export default LyricList;
