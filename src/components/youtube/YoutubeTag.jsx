import React from "react";

const youtubeTag = [
  { name: "react.js" },
  { name: "vue.js" },
  { name: "next.js" },
  { name: "node.js" },
  { name: "music" },
  { name: "movie" },
];

const YoutubeTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }

  return (
    <div className="youtube__tag gmarket5">
      <div>
        {youtubeTag.map((tag, index) => (
          <button onClick={btnClick} key={index}>
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YoutubeTag;
