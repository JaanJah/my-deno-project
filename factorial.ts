/**
 * Returns factorial of input
 * @param {number} nr
 * @returns {number} Factorial of nr
 */
export default (nr: number) => {
  let val = 1;
  for (let i = 2; i <= nr; i++) {
    val *= i;
  }
  return val;
};
