import React, { useEffect } from "react";
import $ from "./style.module.scss";

export default function PageLayout({ children, decreaseHeight = 0 }) {
  useEffect(() => {
    window.document.body.style.overflow = "hidden";

    return () => {
      window.document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <main
      className={$.layout}
      style={{
        maxHeight: `calc(100vh - ${decreaseHeight}px)`,
      }}>
      <div className={$.body}>{children}</div>
    </main>
  );
}
