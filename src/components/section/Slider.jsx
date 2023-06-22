import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const Slider = (props) => {
  return (
    <section id="sliderSection" className={props.attr}>
      <div className="slider__inner">
        <h2 className="blind">배너 슬라이드</h2>
        <div className="slider__img">
          <Swiper
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            <SwiperSlide>
              <div className="slider s1 container">
                <div className="text">
                  <h3>
                    MY
                    <br />
                    portfolio
                  </h3>
                  <p>
                    포트폴리오는 나의 의지와 열정의 흔적이 담긴 작품집입니다.
                    <br />그 안에 내 끈기와 결연함을 보여줄 터전이 되어주세요.
                  </p>
                  <a href="/" className="more button-red">
                    더 알아보기
                  </a>
                </div>
                <div className="img" aria-label="hidden">
                  <img
                    src="../assets/images/slider/slidericon5.png"
                    alt="이미지1"
                  />
                  <img
                    src="../assets/images/slider/slidericon7.png"
                    alt="이미지2"
                  />
                  <img
                    src="../assets/images/slider/slidericon6.png"
                    alt="이미지3"
                  />
                </div>
                <div className="circle" aria-label="hidden">
                  <span className="circle c1"></span>
                  <span className="circle c2"></span>
                  <span className="circle c3"></span>
                  <span className="circle c4"></span>
                  <span className="circle c5"></span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider s1 container">
                <div className="text">
                  <h3>
                    MY
                    <br />
                    portfolio
                  </h3>
                  <p>
                    포트폴리오는 나의 의지와 열정의 흔적이 담긴 작품집입니다.
                    <br />그 안에 내 끈기와 결연함을 보여줄 터전이 되어주세요.
                  </p>
                  <a href="/" className="more button-red">
                    더 알아보기
                  </a>
                </div>
                <div className="img" aria-label="hidden">
                  <img
                    src="../assets/images/slider/slidericon5.png"
                    alt="이미지1"
                  />
                  <img
                    src="../assets/images/slider/slidericon7.png"
                    alt="이미지2"
                  />
                  <img
                    src="../assets/images/slider/slidericon6.png"
                    alt="이미지3"
                  />
                </div>
                <div className="circle" aria-label="hidden">
                  <span className="circle c1"></span>
                  <span className="circle c2"></span>
                  <span className="circle c3"></span>
                  <span className="circle c4"></span>
                  <span className="circle c5"></span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider s1 container">
                <div className="text">
                  <h3>
                    MY
                    <br />
                    portfolio
                  </h3>
                  <p>
                    포트폴리오는 나의 의지와 열정의 흔적이 담긴 작품집입니다.
                    <br />그 안에 내 끈기와 결연함을 보여줄 터전이 되어주세요.
                  </p>
                  <a href="/" className="more button-red">
                    더 알아보기
                  </a>
                </div>
                <div className="img" aria-label="hidden">
                  <img
                    src="../assets/images/slider/slidericon5.png"
                    alt="이미지1"
                  />
                  <img
                    src="../assets/images/slider/slidericon7.png"
                    alt="이미지2"
                  />
                  <img
                    src="../assets/images/slider/slidericon6.png"
                    alt="이미지3"
                  />
                </div>
                <div className="circle" aria-label="hidden">
                  <span className="circle c1"></span>
                  <span className="circle c2"></span>
                  <span className="circle c3"></span>
                  <span className="circle c4"></span>
                  <span className="circle c5"></span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Slider;
