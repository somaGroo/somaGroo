import React from "react";
import $ from "./style.module.scss";

export default function XmasPine() {
  return (
    <div className={$["xmas-pine"]}>
      <div className={$["xmas-pine-branch"]}></div>
      <div className={$["xmas-pine-branch"]}></div>
    </div>
  );
}
