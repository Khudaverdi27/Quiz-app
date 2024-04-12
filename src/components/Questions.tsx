import { AnswerObject } from "../App";
import { ButtonWrapper, Wrapper } from "../QuestionCard.style";

type Props = {
  question: string;
  answers: string[];
  calback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
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
    <Wrapper>
      <p className="number">
        Question :{questionNumber} /{totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers?.map((answer) => (
          <ButtonWrapper
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <button value={answer} onClick={calback} disabled={!!userAnswer}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
}

export default QuestionCard;
