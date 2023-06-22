import React from "react";

const UnsplashImg = ({ image }) => {
  return (
    <a href={`https://unsplash.com/photos/${image.id}`}>
      <li>
        <img src={image.urls.regular} alt={image.alt_description} />
      </li>
    </a>
  );
};

const UnsplashCont = ({ images }) => {
  return (
    <div className="unsplash__cont container">
      <ul>
        {images.map((image, index) => (
          <UnsplashImg key={index} image={image} />
        ))}
      </ul>
    </div>
  );
};

export default UnsplashCont;
