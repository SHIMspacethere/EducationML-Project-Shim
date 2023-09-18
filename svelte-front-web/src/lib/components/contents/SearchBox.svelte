<script>
  import { dataMap, wordMap } from "./contentsMap";
  export let sentence = "이 자료에는 유전자가 있다.";

  const searchTerm = "대립";

  const position = sentence.indexOf(searchTerm);
  $: log = position;
</script>

<h1>{log}</h1>



