export default function (a) {
  const length = a.length;
  let count = 0;
  for (let i = 0; i < length; i += 1) {
    if (a[i] === true) {
      count += 1;
    }
  }

  return count;
}
