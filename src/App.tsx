import React, { useState } from "react";
import QuestionCard from "./components/Questions";
import { Diffuculty, fetchQuestions, QuestionState } from "./Api";

const TOTAL_QUESTION = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  isCorrect: boolean;
  correctAnswer: string;
};

function App() {
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameover, setgameover] = useState(true);

  const stratTrivia = async () => {
    setLoading(true), setgameover(false);
    const newQuestion = await fetchQuestions(TOTAL_QUESTION, Diffuculty.EASY);
    setQuestion(newQuestion);
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameover) {
      const answer = e.currentTarget.value;

      const correctAnswer = question[number].correct_answer == answer;

      correctAnswer && setScore((prev) => prev + 1);

      const answerObject = {
        question: question[number].question,
        answer,
        isCorrect: true || false,
        correctAnswer: question[number].correct_answer,
      };
      setUserAnswer((prev) => [...prev, answerObject]);
    }
  };
  const nextQuestion = () => {
    const next = number + 1;
    if (next === TOTAL_QUESTION) {
      setgameover(true);
    } else {
      setNumber(next);
    }
  };

  return (
    <div>
      <h1>Quiz app by trivia</h1>
      {(gameover || userAnswer.length === TOTAL_QUESTION) && (
        <button onClick={stratTrivia} className="start">
          Start
        </button>
      )}
      {!gameover && <p className="score">score:{score}</p>}
      {loading && <p>loading...</p>}
      {!loading && !gameover && (
        <QuestionCard
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTION}
          question={question[number]?.question}
          answers={question[number]?.answers}
          userAnswer={userAnswer[number] || undefined}
          calback={checkAnswer}
        />
      )}
      {!gameover &&
        !loading &&
        userAnswer.length === number + 1 &&
        number !== TOTAL_QUESTION - 1 && (
          <button className="next" onClick={nextQuestion}>
            Next
          </button>
        )}
    </div>
  );
}

export default App;
