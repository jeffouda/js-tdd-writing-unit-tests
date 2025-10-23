// Your code here
export function pointsForWord(word) {
  if (typeof word !== "string") {
    throw new Error("Input must be a string");
  }
  let points = 0;
  for (const char of word) {
    points += /[aeiou]/i.test(char) ? 1 : 2;
  }
  return points;
}
