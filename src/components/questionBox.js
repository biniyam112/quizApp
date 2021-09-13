import React, { useState } from "react";

const QuestionBox = ({ question, options, selected }) => {
  const [answers, setAnswer] = useState(options);
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answers.map((option, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            setAnswer([option]);
            selected(option);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
