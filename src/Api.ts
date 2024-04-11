export enum Diffuculty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuestions = async (
  amount: number,
  diffuculty: Diffuculty
) => {
  const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${diffuculty}&type=multiple`;

  const data = await (await fetch(url)).json();
  console.log(data);
};
