import { useEffect, useRef } from "react";

import s from "./Date.module.scss";
import clsx from "clsx";

type DateProps = {
  year: string;
  text: string;
  center?: boolean;
};

const Date: React.FC<DateProps> = ({ year, text, center }) => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    textRef.current!.innerHTML = text;
  }, [text]);

  return (
    <div className="wrapper">
      <div className={clsx(s.date, center && s.date_centered)}>
        <time className={s.date__year} dateTime={year}>
          {year}
        </time>
        <p className={s.date__text} ref={textRef}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default Date;
