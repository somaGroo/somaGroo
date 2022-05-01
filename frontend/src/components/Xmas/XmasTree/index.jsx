import React from "react";
import $ from "./style.module.scss";

export default function XmasTree() {
  return (
    <div className={$["xmas-tree"]}>
      <div className={$["xmas-tree-branch"]}></div>
      <div className={$["xmas-tree-branch"]}></div>
    </div>
  );
}
