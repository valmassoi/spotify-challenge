/**
 * loop over each character in the paragraph
 * ++ to the characters' key in the obj to be returned
 * @param {string} paragraph 
 * @param {bool} caseSensitive 
 * @return {object} countOfEachChar
 */
export const buildCharacterCount = (paragraph, caseSensitive) => {
  const caseAwareParagraph = caseSensitive ? paragraph : paragraph.toLowerCase();
  let countOfEachChar = {};
  [...caseAwareParagraph].forEach(char => {
    const prevValue = countOfEachChar[char] || 0;
    countOfEachChar = {
      ...countOfEachChar,
      [char]: prevValue + 1,
    }
    return;
  })
  return countOfEachChar;
}

/**
 * we want the most uniq. chars to be removed
 * more total can be removed if less are removed at a time
 * so this func sorts by lowest count chars first
 * @param {object} countOfEachChar 
 * @return {array<object>} sorted array of objects
 */
export const sortByCount = (countOfEachChar) => {
  let array = [];
  for (let character in countOfEachChar) {
    array.push({ character, count: countOfEachChar[character]});
  }
  return array.sort((a, b) => a.count - b.count);
}

/**
 * program outputs the largest unique set of characters
 * that can be removed from this paragraph
 * without letting its length drop below 50.
 * @param {string} paragraph input string
 * @param {number=50} minLength minimum length after removing letters
 * @param {bool=true} caseSensitive
 * @return {array} uniqCharsToRemove largest unique set of characters that can be removed from this paragraph without letting its length drop below the minLength, answer to the prompt
 */
export const app = (paragraph, minLength = 50, caseSensitive = true) => {
  console.log('Running app!', { paragraph, caseSensitive, minLength});
  const uniqCharsToRemove = [];
  if (!paragraph || paragraph.length <= minLength) {
    return uniqCharsToRemove; // empty array, nothing to remove
  }

  const countOfEachChar = buildCharacterCount(paragraph, caseSensitive);
  const countOfEachCharSorted = sortByCount(countOfEachChar)

  const amountToBeRemoved = paragraph.length - minLength;
  let indexToRemove = 0;
  let amountRemoved = 0;
  while (amountRemoved + countOfEachCharSorted[indexToRemove].count <= amountToBeRemoved) {
    const { character: charBeingRemoved, count: amountBeingRemoved } = countOfEachCharSorted[indexToRemove];
    uniqCharsToRemove.push(charBeingRemoved)
    indexToRemove++;
    amountRemoved += amountBeingRemoved;
  }
  return uniqCharsToRemove;
};

console.log(
  'Result:',
  app(process.env.PARAGRAPH, process.env.MIN, process.env.CASE_SENSITIVE ? process.env.CASE_SENSITIVE === 'true' : undefined),
);
