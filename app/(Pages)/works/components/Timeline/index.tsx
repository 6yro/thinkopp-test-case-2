"use client";

import { useEffect, useState } from "react";

import s from "./Timeline.module.scss";

const Timeline = () => {
  const [linesCount, setLinesCount] = useState(0);

  useEffect(() => {
    const windowWidth = window.innerWidth;

    const mediaValue = windowWidth > 768 ? 88 : 0;

    setLinesCount(Math.round((window.innerHeight - mediaValue) / 22));
  }, []);

  return (
    <div className={s.timeline}>
      {new Array(linesCount).fill(undefined).map((_obj, id) => (
        <hr key={id} />
      ))}
    </div>
  );
};

export default Timeline;
