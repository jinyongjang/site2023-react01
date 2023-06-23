import React, { useEffect, useState } from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";

import MovieSlider from "../movie/MovieSlider";
import MovieSearch from "../movie/MovieSearch";
import MovieCont from "../movie/MovieCont";
import MovieTag from "../movie/MovieTag";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  const search = async (query) => {
    await fetch(
      `${query}?api_key=310e025fb6da176e86a5210874607f40&language=en-US`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=310e025fb6da176e86a5210874607f40&language=en-US&page=1&include_adult=true&include_video=true&limit=18",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Contents>
        <ContTitle title="movie" />
        <MovieSlider movies={movies} />
        <MovieSearch onSearch={search} />
        <MovieTag onSearch={search} />
        <MovieCont movies={movies} />
      </Contents>
    </>
  );
};

export default MoviePage;
