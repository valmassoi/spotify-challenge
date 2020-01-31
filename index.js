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
    const prevValue = countOfEachChar[char] ? countOfEachChar[char] : 0;
    countOfEachChar = {
      ...countOfEachChar,
      [char]: prevValue + 1,
    }
    return;
  })
  return countOfEachChar;
}

/**
 * program outputs the largest unique set of characters
 * that can be removed from this paragraph
 * without letting its length drop below 50.
 * @param {string} paragraph input string
 * @param {number=50} minLength minimum length after removing letters
 * @param {bool=true} caseSensitive
 * @return {array} uniqSet
 */
export const app = (paragraph, minLength = 50, caseSensitive = true) => {
  if (!paragraph || minLength <= paragraph.length) {
    return [];
  }
  const countOfEachChar = buildCharacterCount(paragraph, caseSensitive);
  // TODO
  return;
};
