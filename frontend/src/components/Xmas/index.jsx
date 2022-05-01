import React, { useEffect, useRef, useState, useContext } from "react";
import useWindowResize from "../../hooks/useWindowResize";
import { HeightContext } from "../../store/height";
import $ from "./style.module.scss";
import TreeRow from "./TreeRow";

export default function Xmas() {
  const context = useContext(HeightContext);
  const { cardListHeight } = context;
  const treeRef = useRef(null);
  const [treeNum, setTreeNum] = useState(0);
  const [width] = useWindowResize();

  useEffect(() => {
    if (treeRef.current) {
      setTreeNum(treeRef.current.clientWidth / 147);
    }
  }, [width]);

  return (
    <div
      className={$.xmas}
      ref={treeRef}
      style={{ height: `${cardListHeight + 20}px` }}>
      {Array.from({ length: treeNum }, (x, i) => (
        <React.Fragment key={`tree-${i}`}>
          <TreeRow key={`tree-${i}`} isPine={false} />
          <TreeRow key={`pine-${i}`} isPine />
        </React.Fragment>
      ))}
    </div>
  );
}
