"use client";

import { useEffect, useState } from "react";

import s from "./Timeline.module.scss";

const Timeline = () => {
  const [linesCount, setLinesCount] = useState(0);

  useEffect(() => {
    setLinesCount(Math.round((window.innerHeight - 88) / 22));
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
