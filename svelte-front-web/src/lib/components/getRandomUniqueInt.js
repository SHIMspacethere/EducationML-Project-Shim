function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomUniqueInt(min, max, count) {
  if (count > max - min + 1) {
    throw new Error("요청한 개수가 범위 내의 고유한 정수 개수를 초과합니다.");
  }

  const uniqueIntegers = [];
  while (uniqueIntegers.length < count) {
    const randomInt = getRandomInt(min, max);
    if (!uniqueIntegers.includes(randomInt)) {
      uniqueIntegers.push(randomInt);
    }
  }

  return uniqueIntegers;
}

export default getRandomUniqueInt