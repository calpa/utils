function reverseString(str: string): string {
  let answer = "";
  for (let i = str.length - 1; i >= 0; i--) {
    answer += str.charAt(i);
  }
  return answer;
}

export default reverseString;
