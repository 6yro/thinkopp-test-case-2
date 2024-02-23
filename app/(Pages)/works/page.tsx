"use client";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";

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
import Image from "next/image";

const Works = () => {
  const [isColorImg, setIsColorImg] = useState(false);

  useEffect(() => {
    worksRef.current!.classList.toggle(s.works_colorImg);
  }, [isColorImg]);

  const worksRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<SwiperRef>(null);
  const initialDateRef = useRef<HTMLDivElement>(null);
  const colorBtnRef = useRef<HTMLAnchorElement>(null);

  const handleActiveIndex = (activeIndex: number) => {
    const dateStyles = initialDateRef.current!.style;
    const colorBtnStyles = colorBtnRef.current!.style;

    const mediaValue = window.innerWidth <= 768 ? 0 : 1;

    if (activeIndex > mediaValue) {
      dateStyles.translate = "0 -500%";
      colorBtnStyles.translate = "0 -500%";
    } else {
      dateStyles.translate = "0 0";
      colorBtnStyles.translate = "0 0";
    }
  };

  return (
    <main className={s.works} ref={worksRef}>
      <div className="wrapper">
        <Timeline />
        <div className={s.works__inner}>
          <div className={s.works__dateWrapper} ref={initialDateRef}>
            <Date
              year="2002"
              text="окончил Московский государственный академический художественный институт имени <br/> В. И. Сурикова. Дипломная работа «Цой на мотоцикле»"
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
              spaceBetween={50}
              ref={sliderRef}
              direction="vertical"
              simulateTouch={false}
              mousewheel
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
                  text="окончил Московский государственный академический художественный институт имени <br/> В. И. Сурикова. Дипломная работа «Цой на мотоцикле»"
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
