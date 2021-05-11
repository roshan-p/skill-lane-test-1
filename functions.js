const functions = {
    largest_power: (n) => {
      if (n === 1) {
        return [0, -1];
      }
      if (n <= 4) {
        return [1, -1];
      }
      const resultArry = [];
      for (let a = 2; a * a < n; a++) {
        for (let b = 2; a ** b < n; b++) {
          resultArry.push(a ** b);
        }
      }
  
      const largestNumber = Math.max(...resultArry);
      const largestNumberSize = resultArry.filter(
        (item) => item === largestNumber
      ).length;
      return [largestNumber, largestNumberSize];
    },
  };
  
  module.exports = functions;
  