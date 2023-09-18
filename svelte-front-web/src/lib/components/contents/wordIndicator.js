import { wordMap, allWordList } from "./contentsMap.js";

function wordIndicator(str) {
  const rlMap = new Map();
  const rl = [];

  for (let i = 0; i < allWordList.length; i++) {
    const pos = str.indexOf(allWordList[i]);
    if (pos > -1) {
      let word = wordMap.get(allWordList[i]);
      if (!rlMap.get(word)) {
        rlMap.set(word, true);
        rl.push(word);
      }
    }
  }
  return rl;
}

export default wordIndicator;