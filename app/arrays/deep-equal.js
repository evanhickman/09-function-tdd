export default function (a, b) {
  if (a[0] !== b[0] || a[1] !== b[1] || a.length !== b.length) {
    return false;
  }

  return true;
}
