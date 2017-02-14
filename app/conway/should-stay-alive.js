import aliveNeighbors from './alive-neighbors';

export default function (a) {
  if (aliveNeighbors(a) === 0 || aliveNeighbors(a) === 4 || aliveNeighbors(a) === 8) {
    return false;
  }

  if (aliveNeighbors(a) === 2 || aliveNeighbors(a) === 3) {
    return true;
  }
}
