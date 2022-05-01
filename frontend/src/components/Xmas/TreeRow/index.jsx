import React, { useState, useRef, useEffect } from "react";
import $ from "./style.module.scss";
import useWindowResize from "../../../hooks/useWindowResize";
import XmasPine from "../XmasPine";
import XmasTree from "../XmasTree";

export default function TreeRow({ isPine }) {
  const rowRef = useRef(null);
  const [treeNum, setTreeNum] = useState(0);
  const [width] = useWindowResize();

  useEffect(() => {
    if (rowRef.current) {
      setTreeNum(rowRef.current.clientHeight / 70);
    }
  }, [width]);

  return (
    <div className={$["xmas-row"]} ref={rowRef}>
      {Array.from({ length: treeNum + 1 }, (x, i) =>
        isPine ? (
          <XmasPine key={`pine-${i}`} />
        ) : (
          <XmasTree key={`tree-${i}`} />
        ),
      )}
    </div>
  );
}
