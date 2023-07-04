import React from "react";

const Youtube = (props) => {
  return (
    <section id="youtubeSection" className={props.attr}>
      <div className="youtube__inner container">
        <div className="youtube__text">
          <h3>유튜브 영상</h3>
          <p>
            유튜브 영상을 검색하고<br />
            검색된 영상을 시청할 수 있습니다.
          </p>
          <a href="/youtube" className="button-red">
            자세히 보기
          </a>
        </div>
        <div className="youtube__item">
          <div>
            <img src="assets/images/youtube/youtubeImg.png" alt="유튜브" />
          </div>
          <div>
            <img src="assets/images/youtube/youtubeImg02.png" alt="유튜브" />
          </div>
          <div>
            <img src="assets/images/youtube/youtubeImg03.png" alt="유튜브" />
          </div>
          <div>
            <img src="assets/images/youtube/youtubeImg04.png" alt="유튜브" />
          </div>
          <div>
            <img src="assets/images/youtube/youtubeImg05.png" alt="유튜브" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Youtube;
