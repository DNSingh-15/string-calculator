export function add(numbers: string): number {
  if (numbers === '') return 0;

  let delimiter = /[,\n]/;
  let numbersString = numbers;

  if (numbers.startsWith('//')) {
    const delimiterEndIndex = numbers.indexOf('\n');
    delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
    numbersString = numbers.substring(delimiterEndIndex + 1);
  }

  const nums = numbersString.split(delimiter)
    .map(num => parseInt(num, 10))
    .filter(num => num <= 1000);

  const negatives = nums.filter(num => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(',')}`);
  }

  return nums.reduce((sum, num) => sum + num, 0);
}