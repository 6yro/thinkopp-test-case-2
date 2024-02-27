import Image from "next/image";
import Link from "next/link";

import clsx from "clsx";

import inCityImg from "@/app/assets/works/in-city.jpg";
import monumentDetailsImg from "@/app/assets/works/monument-details.jpg";
import inProcess from "@/app/assets/works/in-process.jpg";

import quoteMarksImg from "@/app/assets/uikit/quote-marks.svg";
import quoteCursorImg from "@/app/assets/uikit/cursor.svg";

import s from "./ImagesBlock.module.scss";

const ImagesBlock = () => {
  return (
    <section className={s.imagesBlock}>
      <div className="wrapper">
        <div className="container">
          <div className={s.imagesBlock__inner}>
            <Image
              className={s.imagesBlock__quoteMarks}
              src={quoteMarksImg}
              alt=""
            />
            <div className={s.imagesBlock__top}>
              <div className={s.imagesBlock__imgWrapper}>
                <Image src={inCityImg} alt="Памятник Виктору Цою" />
                <p className={s.imagesBlock__imgText}>
                  в городе Окуловка, Новгородская область
                </p>
              </div>
              <div className={s.imagesBlock__textBlock}>
                <p className={s.imagesBlock__text}>
                  Нужна была немалая смелость, чтобы разместить памятник в
                  лишенном всякой респектабельности станционном окружении
                  провинциального городка. Такое расположение отвечало
                  стремлению сделать поистине народный памятник, стоящий в гуще
                  живой повседневной жизни, исповедально связанного с ней.
                  Впрочем, оно имело и другой контекст. Когда переводишь взгляд
                  с вросшей в мотоцикл фигуры на ажурные динамичные конструкции
                  моста, рождается совершенно иная метафора — путь к небу».
                </p>
                <Link href="#" className={s.imagesBlock__quote}>
                  <span className={s.imagesBlock__quoteAuthor}>
                    Игорь Светлов
                  </span>
                  <p className={s.imagesBlock__quoteText}>
                    <q>Достоинство и превращение скульптуры</q> — альманах
                    «Панорама искусств-2», 2017
                  </p>
                  <Image
                    className={s.imagesBlock__quoteCursor}
                    src={quoteCursorImg}
                    alt="Нажми"
                  />
                </Link>
              </div>
            </div>
            <div className={s.imagesBlock__bottom}>
              <div
                className={clsx(
                  s.imagesBlock__imgWrapper,
                  s.imagesBlock__imgWrapper_bottom
                )}
              >
                <Image src={monumentDetailsImg} alt="Детали памятника" />
                <p className={s.imagesBlock__imgText}>Детали памятника</p>
              </div>
              <div
                className={clsx(
                  s.imagesBlock__imgWrapper,
                  s.imagesBlock__imgWrapper_bottom
                )}
              >
                <Image src={inProcess} alt="Процесс установки памятника" />
                <p className={s.imagesBlock__imgText}>
                  В процессе установки памятника
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagesBlock;
