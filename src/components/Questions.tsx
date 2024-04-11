type Props = {
  question: string;
  answers: string[];
  calback: any;
  userAnswer: any;
  questionNumber: number;
  totalQuestions: number;
};

function QuestionCard({
  question,
  answers,
  calback,
  userAnswer,
  questionNumber,
  totalQuestions,
}: Props) {
  return (
    <div>
      <p className="number">
        Question :{questionNumber} /{totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers?.map((answer) => (
          <div>
            <button onClick={calback} disabled={userAnswer}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
