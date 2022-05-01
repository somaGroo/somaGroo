/* eslint-disable react/no-array-index-key */
import React, { useEffect, useRef, useContext } from "react";
import useWindowResize from "../../hooks/useWindowResize";
import { HeightContext } from "../../store/height";
import Card from "./Card";
import $ from "./style.module.scss";

export default function CardList({ cardList }) {
  const cardListRef = useRef(null);
  const context = useContext(HeightContext);
  const { setCardListHeight } = context;
  const [width] = useWindowResize();

  useEffect(() => {
    if (cardListRef.current) {
      setCardListHeight(cardListRef.current.clientHeight);
    }
  }, [width]);

  return (
    <div className={$.cardList} ref={cardListRef}>
      {cardList.map(({ title, content }, i) => (
        <Card
          key={`card-${i} ${title + content}`}
          writer={title}
          content={content}
        />
      ))}
    </div>
  );
}
