<script>
  import { dataMap, wordMap, wordList } from "./contentsMap";
  export let sentence = "이 자료에는 대립 유전자가 있다.";

  const rl = new Map();
  let count = 0;
  const searchTerm = "대립";

  for (let i = 0; i < wordList.length; i++)
  {
    const pos = sentence.indexOf(wordList[i]);
    console.log(pos);
    let word = wordMap.get(wordList[i]);
  }
  console.log(wordList);
  console.log(rl);
</script>





