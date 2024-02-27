"use client";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar } from "swiper/modules";

import clsx from "clsx";

import Timeline from "./components/Timeline";
import Date from "./components/Date";
import TitleBlock from "./components/TitleBlock";
import ImagesBlock from "./components/ImagesBlock";

import btnIcon from "@/app/assets/uikit/btn-icon.svg";
import btnAccentIcon from "@/app/assets/uikit/btn-icon_accent.svg";
import cursorIcon from "@/app/assets/uikit/cursor.svg";

import "swiper/css";
import "swiper/css/scrollbar";

import s from "./Works.module.scss";

const Works = () => {
  const [isColorImg, setIsColorImg] = useState(false);

  const sliderRef = useRef<SwiperRef>(null);
  const initialDateRef = useRef<HTMLDivElement>(null);
  const colorBtnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const headerHeight = document.querySelector("header")!.offsetHeight;
    const swiper = sliderRef.current!.swiper;

    const detectWheel = (event: WheelEvent) => {
      const currentSlide = swiper.slides[swiper.activeIndex];
      const slideChild = currentSlide.firstChild as HTMLElement;

      if (
        slideChild &&
        slideChild.offsetHeight > window.innerHeight - headerHeight
      ) {
        if (currentSlide.scrollTop === 0 && event.deltaY < 0) {
          swiper.slidePrev();
        } else if (
          currentSlide.scrollHeight -
            currentSlide.scrollTop -
            currentSlide.clientHeight ===
            0 &&
          event.deltaY > 0
        ) {
          swiper.slideNext();
        }
      }
    };

    window.addEventListener("wheel", detectWheel);

    return () => {
      window.removeEventListener("wheel", detectWheel);
    };
  }, []);

  const handleActiveIndex = (activeIndex: number) => {
    const dateStyles = initialDateRef.current!.style;
    const colorBtnStyles = colorBtnRef.current!.style;

    if (activeIndex > 1) {
      dateStyles.translate = "0 -500%";
      colorBtnStyles.translate = "0 -500%";
    } else {
      dateStyles.translate = "0 0";
      colorBtnStyles.translate = "0 0";
    }

    const headerHeight = document.querySelector("header")!.offsetHeight;
    const currentSlide = sliderRef.current!.swiper.slides[activeIndex];
    const slideChild = currentSlide.firstChild as HTMLElement;

    if (
      slideChild &&
      slideChild.offsetHeight > window.innerHeight - headerHeight
    ) {
      sliderRef.current?.swiper.mousewheel.disable();
    } else sliderRef.current?.swiper.mousewheel.enable();
  };

  return (
    <main className={clsx(s.works, isColorImg && s.works_colorImg)}>
      <div className="wrapper">
        <Timeline />
        <div className={s.works__inner}>
          <div className={s.works__dateWrapper} ref={initialDateRef}>
            <Date
              year="2002"
              text="окончил Московский государственный академический художественный институт имени В. И. Сурикова. Дипломная работа «Цой на мотоцикле»"
            />
          </div>
          <Link
            className={clsx(
              s.works__colorBtn,
              isColorImg && s.works__colorBtn_accent
            )}
            href="#"
            onClick={() => setIsColorImg((prev) => !prev)}
            ref={colorBtnRef}
          >
            <Image
              className={clsx(s.icon, s.icon_btn)}
              src={isColorImg ? btnAccentIcon : btnIcon}
              alt="Иконка кнопки"
            />
            <span>В цвете</span>
            {isColorImg && (
              <Image
                className={clsx(s.icon, s.icon_cursor)}
                src={cursorIcon}
                alt="Курсор"
              />
            )}
          </Link>
          <div className={s.slider__wrapper}>
            <Swiper
              onActiveIndexChange={({ activeIndex }) =>
                handleActiveIndex(activeIndex)
              }
              slidesPerView={"auto"}
              spaceBetween={50}
              ref={sliderRef}
              direction="vertical"
              simulateTouch={false}
              mousewheel={{ releaseOnEdges: true }}
              scrollbar={true}
              modules={[Scrollbar, Mousewheel]}
              className={s.slider}
            >
              <SwiperSlide className={s.slider__slide}></SwiperSlide>
              <SwiperSlide
                className={clsx(s.slider__slide, s.slider__slide_secondDate)}
              >
                <Date
                  center
                  year="2015"
                  text="окончил Московский государственный академический художественный институт имени В. И. Сурикова. Дипломная работа «Цой на мотоцикле»"
                />
              </SwiperSlide>
              <SwiperSlide
                className={clsx(s.slider__slide, s.slider__slide_gradient)}
              >
                <TitleBlock />
              </SwiperSlide>
              <SwiperSlide
                className={clsx(s.slider__slide, s.slider__slide_gradient)}
              >
                <ImagesBlock />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Works;
