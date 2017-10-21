const quickSort = input => {
  
  const length = input.length;
  if (length < 2) return input;

  const pivot = input[0];
  const left = [];
  const right = [];

  for (let i = 1; i < length; i++){
    (input[i] < pivot) ? left.push(input[i]) : right.push(input[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
} 
// end.
