import React, { useState } from "react";
import Bar from "../bar/Bar";
import "./main.css";

const data = [
  {
    id: 1,
    question: "I have ambitious aims of making a difference.",
  },
  {
    id: 2,
    question: "My leadership journey has progressed as I anticipated.",
  },
  {
    id: 3,
    question:
      "I have spent fewer than 4 years in full time service or ministry.",
  },
];

const Main = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [filledState, setFilledState] = useState(0);

  const getFirstBarColor = () => {
    if (filledState === 1) {
      return "bg-info";
    } else if (filledState === 2) {
      return "bg-info";
    } else if (filledState === 3) {
      return "bg-info";
    } else if (filledState === 4) {
      return "bg-info";
    } else if (filledState === 5) {
      return "bg-info";
    } else {
      return "$gray-200";
    }
  };
  const getSecondBarColor = () => {
    if (filledState === 2) {
      return "bg-info";
    } else if (filledState === 3) {
      return "bg-info";
    } else if (filledState === 4) {
      return "bg-info";
    } else if (filledState === 5) {
      return "bg-info";
    } else {
      return "$gray-200";
    }
  };
  const getThirdbarColor = () => {
    if (filledState === 3) {
      return "bg-info";
    } else if (filledState === 4) {
      return "bg-info";
    } else if (filledState === 5) {
      return "bg-info";
    } else {
      return "$gray-200";
    }
  };
  const getForthbarColor = () => {
    if (filledState === 4) {
      return "bg-info";
    } else if (filledState === 5) {
      return "bg-info";
    } else {
      return "$gray-200";
    }
  };
  const getFifthbarColor = () => {
    if (filledState === 5) {
      return "bg-info";
    } else {
      return "$gray-200";
    }
  };
  return (
    <div className="main_container">
      <Bar className="bar" />
      <div className="text">Idealistic</div>
      <div className="indicator">
        <strong>{currentQuestion + 1}</strong>/ {data.length}
      </div>

      <div className="question">{data[currentQuestion].question}</div>
      <div className="bottom">
        <div className="progress">
          <div
            className={`${getFirstBarColor()} `}
            onClick={() => {
              setFilledState(1);
              setCurrentQuestion(currentQuestion + 1);
            }}
            role="progressbar"
            aria-label="Segment one"
            style={{
              width: "20%",
              cursor: "pointer",
              transition: "1s ease-in-out",
            }}
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            className={`${getSecondBarColor()} `}
            onClick={() => {
              setFilledState(2);
              setCurrentQuestion(currentQuestion + 1);
            }}
            role="progressbar"
            aria-label="Segment two"
            style={{
              width: "20%",
              cursor: "pointer",
              transition: "1s ease-in-out",
            }}
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            className={`${getThirdbarColor()} `}
            onClick={() => {
              setFilledState(3);
              setCurrentQuestion(currentQuestion + 1);
            }}
            role="progressbar"
            aria-label="Segment three"
            style={{
              width: "20%",
              cursor: "pointer",
              transition: "1s ease-in-out",
            }}
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            className={`${getForthbarColor()} `}
            onClick={() => {
              setFilledState(4);
              setCurrentQuestion(currentQuestion + 1);
            }}
            role="progressbar"
            aria-label="Segment four"
            style={{
              width: "20%",
              cursor: "pointer",
              transition: "1s ease-in-out",
            }}
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            className={`${getFifthbarColor()} `}
            onClick={() => {
              setFilledState(5);
              setCurrentQuestion(currentQuestion + 1);
            }}
            role="progressbar"
            aria-label="Segment five"
            style={{
              width: "20%",
              cursor: "pointer",
              transition: "1s ease-in-out",
            }}
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <div className="steps">
          <p>Strongly Disagree</p>
          <p>Disagree</p>
          <p>Neutral</p>
          <p>Agree</p>
          <p>Strongly Agree</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
