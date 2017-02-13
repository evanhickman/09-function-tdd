import cardSum from './card-sum';

export default function (a, b) {
  if (a === b) {
    return false;
  }

  if (cardSum(a, b) <= 17) {
    return true;
  }

  if (cardSum(a, b) > 17) {
    return false;
  }

  return true;
}
