import { useState } from "react";

type QuizQuestion = {
  qnum: number;
  question: string;
  options: string[];
};

type QuizComponentProps = {
  currQuestion: QuizQuestion;
  total: number;
  isLast: boolean;
  onNext: (selectedOption: string) => void;
};

function QuizComponent({
  currQuestion,
  total,
  isLast,
  onNext,
}: QuizComponentProps) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleNextClick = () => {
    onNext(selectedOption); // send the picked answer to the parent
    setSelectedOption(""); // clear it for the next question
  };

  return (
    <div className="quiz-container">
      <p className="progress">
        {currQuestion.qnum} of {total}
      </p>
      <h1>Question #{currQuestion.qnum}</h1>
      <p>{currQuestion.question}</p>
      <ul>
        {currQuestion.options.map((option, index) => (
          <li key={index}>
            <label
              className={
                selectedOption === option ? "option selected" : "option"
              }
            >
              <input
                type="radio"
                name={`question-${currQuestion.qnum}`}
                value={option}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
              />{" "}
              {option}
            </label>
          </li>
        ))}
      </ul>
      <button
        className="btn"
        onClick={handleNextClick}
        disabled={selectedOption === ""}
      >
        {isLast ? "Finish" : "Next"}
      </button>
    </div>
  );
}

export default QuizComponent;