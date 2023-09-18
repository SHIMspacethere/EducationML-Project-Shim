import contentsData from "$lib/components/contents/contentsData.js"
const dataMap = new Map();
const wordMap = new Map();
const allWordList = [];
const keyWordList = [];

for (let i = 0; i < contentsData.length; i++)
{
  for (let j = 0; j < contentsData[i].key.length; j++)
  {
    wordMap.set(contentsData[i].key[j], contentsData[i].key[0]);
    dataMap.set(contentsData[i].key[j], contentsData[i].value);
    allWordList.push(contentsData[i].key[j]);
  }
  keyWordList.push(contentsData[i].key[0]);
}

export {dataMap, wordMap, allWordList, keyWordList};