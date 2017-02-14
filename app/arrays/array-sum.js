export default function (a) {
  const length = a.length;
  let value = 0;
  for (let i = 0; i < length; i += 1) {
    value += a[i];
  }

  return value;
}
