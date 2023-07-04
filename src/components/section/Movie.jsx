import React from "react";

const Movie = (props) => {
  return (
    <section id="moviesSection" className={props.attr}>
      <div className="movie__inner container">
        <div className="movie__text">
          <h3>영화 검색</h3>
          <p>
            최신 영화 순위를 볼 수 있으며
            <br />
            영화 정보를 찾을 수 있습니다.
          </p>
          <a href="/movie" className="button-green">
            자세히 보기
          </a>
        </div>
        <div className="movie__item">
          <div>
            <img src="../assets/images/movie/movieImg.png" alt="영화" />
          </div>
          <div>
            <img src="../assets/images/movie/movieImg02.png" alt="영화" />
          </div>
          <div>
            <img src="../assets/images/movie/movieImg03.png" alt="영화" />
          </div>
          <div>
            <img src="../assets/images/movie/movieImg04.png" alt="영화" />
          </div>
          <div>
            <img src="../assets/images/movie/movieImg04.png" alt="영화" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movie;
