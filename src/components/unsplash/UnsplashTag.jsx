import React from "react";

const unsplashTag = [
  { name: "spring" },
  { name: "summer" },
  { name: "fall" },
  { name: "winter" },
  { name: "nature" },
  { name: "flower" },
];

const UnsplashTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }

  return (
    <div className="unsplash__tag gmarket5">
      <div>
        {unsplashTag.map((tag, index) => (
          <button onClick={btnClick} key={index}>
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UnsplashTag;
