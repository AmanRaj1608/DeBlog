/**
 * Given a text and max length, cut down the text to max length
 * @param text
 * @param max
 * @returns
 */
const limitChars = (text: string, max: number): string => {
  if (text.length > max) {
    return `${text.slice(0, max)}...`;
  }

  return text;
};

export default limitChars;
