<script>
  import { dataMap } from "./contentsMap.js";
  import wordIndicator from "./wordIndicator.js";
  import ContentsCard from "./ContentsCard.svelte";

  export let sentence = "이 자료는 세포 호흡에 관한 자료이다. 노폐물";
  let keywordsList = wordIndicator(sentence);
  let dataList = [];
  for (let i = 0; i < keywordsList.length; i++) {
    dataList.push(dataMap.get(keywordsList[i]));
  }
</script>

<div style="">
  {#each dataList as item, i}
    <div class="contentCard" style="margin-top:10px;">
      <ContentsCard dataList={item} keywordsList={keywordsList[i]} />
    </div>
  {/each}
  <div style="margin-bottom:20px;" />
</div>

<style>
  .contentCard {
    width: 100%;
    box-sizing: border-box;
  }
</style>
