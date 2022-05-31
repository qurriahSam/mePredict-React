let scores = [
  { id: 0, home: 2, away: 1, likes: 1 },
  { id: 1, home: 1, away: 1, likes: 2 },
  { id: 2, home: 0, away: 2, likes: 1 },
  { id: 3, home: 0, away: 3, likes: 2 },
  { id: 4, home: 0, away: 0, likes: 3 },
];

export const getScores = () => {
  return scores;
};

export const addPrediction = (prediction) => {
  scores.push({ ...prediction, id: scores.length + 1, likes: 0 });
};
