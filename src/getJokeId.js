const jokesMap = {
  0: '189xHQ7pOuc',
  1: 'KJmW8h3oWnb',
  2: 'Qn31o49Musc',
  3: 'ciiNuXDY0wc',
  4: '2gFIBX82Etc',
  5: 'eiiVvH6MCd',
  6: 'MZ82EIB5hFd',
  7: '5hNJexX8prc',
  8: '92oOKusHBd',
  9: '5M7hF6EItzd',
};

const getJokeId = (key) => {
  let posKey = key;
  if (key < 0) {
    const negKey = key % 10;
    posKey = negKey + 10;
  }

  return jokesMap[posKey % 10];
};

export const dadJokeUrl = 'https://icanhazdadjoke.com/j';
export default getJokeId;
