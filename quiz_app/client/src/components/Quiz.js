import React from "react";
import Questions from "./Questions";
export default function Quiz() {
  /* next button event handler */
  function onNext() {
    console.log("On next Click");
  }

  /* prev button event handler */
  function onPrev() {
    console.log("On onPrev Click");
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Applicaton</h1>
      {/* display questions */}
      <Questions />

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
