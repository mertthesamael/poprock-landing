"use client";
import styles from "./style.module.scss";
import HeroProductCard from "@/components/Cards/HeroProductCard";
import React, { FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { HeroSlides } from "./constants";
import SlideBullet from "@/components/Buttons/SlideBullet";
import { SwipeArrow } from "@/services/icons/SwipeArrow";
interface HeroSliderProps {}

const HeroSlider: FC<HeroSliderProps> = ({}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<any>(null);
  return (
    <div className={styles.heroSlider}>
      <Swiper
        effect="fade"
        spaceBetween={150}
        slidesPerView={1}
        onSlideChange={(slide) => setActiveIndex(slide.activeIndex)}
        className={styles.heroSlider__wrapper}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {HeroSlides.map((el, _i) => (
          <SwiperSlide className={styles.heroSlider__wrapper__slide} key={_i}>
            <HeroProductCard
              id={el.id}
              img={el.img}
              name={el.name}
              price={el.price}
            />
          </SwiperSlide>
        ))}
        <div className={styles.heroSlider__wrapper__buttons}>
          <button onClick={() => swiperRef.current.slidePrev()}>
          <SwipeArrow rotate={180} />
          </button>
          <div className={styles.heroSlider__wrapper__buttons__bullet}>
            {HeroSlides.map((el, _i) => (
              <SlideBullet key={el.id} id={_i} activeIndex={activeIndex} />
            ))}
          </div>
          <button onClick={() => swiperRef.current.slideNext()}>
          <SwipeArrow rotate={0} />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
