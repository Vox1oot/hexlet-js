const isUniq = (string) => {
  let uniq = true;

  for (let i = 0; i < string.length; i += 1) {
    for (let j = i + 1; j < string.length; j += 1) {
      if (string[i] === string[j]) {
        uniq = false;
      }
    }
  }
  return uniq;
};

const getLongestLength = (sequence) => {
  let result = 0;

  for (let i = 0; i < sequence.length; i += 1) {
    for (let j = i + 1; j < sequence.length; j += 1) {
      const string = sequence.substring(i, j + 1);
      if (isUniq(string)) {
        if (string.length > result) {
          result = string.length;
        }
      }
    }
  }
  return result;
  a = 6;
};

export default getLongestLength;
