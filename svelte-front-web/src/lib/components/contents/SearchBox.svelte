<script>
  import collectorData from "$lib/components/contents/collectorData.js";
  import { dataMap } from "./contentsMap.js";
  import wordIndicator from "./wordIndicator.js";
  import ContentsCard from "./ContentsCard.svelte";
  import ContentsSibling from "./ContentsSibling.svelte";

  export let predictionData;
  export let sentence = "이 자료는 세포 호흡에 관한 자료이다. 노폐물";
  let keywordsList = wordIndicator(sentence);
  let dataList = [];
  for (let i = 0; i < keywordsList.length; i++) {
    dataList.push(dataMap.get(keywordsList[i]));
  }

  let siblingList = [];
  for (let i = 0; i < collectorData.length; i++) {
    for (let j = 0; j < collectorData[i].indexes.length; j++) {
      const index = collectorData[i].indexes[j];
      if (index == predictionData[0]) {
        const img = collectorData[i].images[j];
        siblingList.push([collectorData[i].category, j, img]);
      }
    }
  }
</script>

<div style="">
  {#each dataList as item, i}
    <div class="contentCard" style="margin-top:10px;">
      <ContentsCard dataList={item} keywordsList={keywordsList[i]} />
    </div>
  {/each}
  <div style="margin-bottom:20px;" />
    <div class="contentCard" style="margin-top:10px;">
      <ContentsSibling dataList={siblingList} bind:predictionData={predictionData}/>
    </div>
</div>

<style>
  .contentCard {
    width: 100%;
    box-sizing: border-box;
  }
</style>
