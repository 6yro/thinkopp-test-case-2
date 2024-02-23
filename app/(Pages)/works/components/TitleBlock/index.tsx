import clsx from "clsx";

import { EBGaramondFont, ForumFont } from "@/app/styles/fonts";

import s from "./TitleBlock.module.scss";

const TitleBlock = () => {
  return (
    <section className={s.titleBlock}>
      <div className={clsx("container", s.titleBlock__container)}>
        <div className={s.titleBlock__inner}>
          <div className={s.titleBlock__top}>
            <h1 className={clsx(s.titleBlock__title, ForumFont.className)}>
              <span>Ц</span>ой на мотоцикле
            </h1>
            <ul className={s.titleBlock__subTitles}>
              <li className={s.titleBlock__subTitle}>2002 отливка</li>
              <li
                className={clsx(
                  s.titleBlock__subTitle,
                  s.titleBlock__subTitle_accent
                )}
              >
                Бронза
              </li>
              <li className={s.titleBlock__subTitle}>188х274х140</li>
              <li className={s.titleBlock__subTitle}>
                город Окуловка, Новгородская область
              </li>
            </ul>
          </div>
          <div
            className={clsx(s.titleBlock__content, EBGaramondFont.className)}
          >
            <p className={s.titleBlock__text}>
              «Цой на мотоцикле» — одна из самых легендарных русских скульптур.
              Созданный как дипломная работа в институте имени Сурикова, этот
              дерзкий замысел конного памятника 20 века открыл для автора его
              путь в искусстве. Получив первую премию имени Третьякова, Алексей
              Благовестнов смог отправиться в Италию, где нашёл свою
              <span>«Аппиеву дорогу».</span> Кроме того, Цой соединил судьбы
              Благовестнова и кинорежиссёра Сергея Соловьева, вследствие дружбы
              которых возникли новые скульптурные шедевры - «Анна Каренина»,
              «Александр Абдулов» и знаменитая ВГИКовская троица - памятник
              Андрею Тарковскому, Василию Шукшину и Геннадию Шпаликову на
              ступенях знаменитого киноинститута.
            </p>
            <p className={s.titleBlock__text}>
              «Цой на мотоцикле» долго был «кочующим» памятником, гипсовый
              вариант которого показывался в Москве, Санкт-Петербурге,
              Ханты-Мансийске. В 2009 году Алексей на собственные средства отлил
              его из бронзы и показал в Петербурге в день 50-летия Цоя. Через 3
              года памятник наконец был установлен - не в Москве, где было
              выделено место, не в Петербурге, с которым Цой был связан своей
              биографией, а в Окуловке - небольшом районном центре Новгородской
              области, примерно на полпути меж двух столиц. До тех пор
              малоизвестный населенный пункт стал после этого одним из центров
              русского рока.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitleBlock;
