import React, { useState } from "react";
import QuestionCard from "./components/Questions";
import { Diffuculty, fetchQuestions } from "./Api";

const TOTAL_QUESTION = 10;
function App() {
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [gameover, setgameover] = useState(true);
  const stratTrivia = async () => {
    fetchQuestions(TOTAL_QUESTION, Diffuculty.EASY);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const nextQuestion = () => {};

  return (
    <div>
      <h1>Quiz app by trivia</h1>
      <button onClick={stratTrivia} className="start">
        Start
      </button>
      <p className="score">score:</p>
      <p>loading...</p>
      {/* <QuestionCard
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTION}
        question={question[number].question}
        answers={question[number].answers}
        userAnswer={userAnswer[number] || undefined}
        calback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
}

export default App;
