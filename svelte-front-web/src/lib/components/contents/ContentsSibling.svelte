<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import cancel from "$lib/images/cancel.png";
  import getRandomUniqueInt from "../getRandomUniqueInt";
  import BlackOut from "../BlackOut.svelte";
  import ContentsSiblingDescription from "./ContentsSiblingDescription.svelte";
  export let dataList;
  export let predictionData;

  let isOn = true;
  let ran = getRandomUniqueInt(0, dataList.length - 1, 2);
  let isPopup = false;

  console.log(predictionData);

  function switchOff() {
    isOn = false;
  }

  function onPop() {
    isPopup = true;
  }

  function closePop() {
    isPopup = false;
  }
</script>

{#if isPopup}
  <ContentsSiblingDescription bind:isPopup={isPopup} onClose={closePop} {dataList} {predictionData}/>
{/if}
{#if isOn}
  <div
    class="contentsCard"
    in:fly={{ delay: 2000, y: 500, duration: 1000 }}
    out:fly={{ y: 500, duration: 500 }}
  >
    <div on:click={switchOff} style="position:relative; right:0;">
      <img src={cancel} alt="Close" style="width:30px; float:right;" />
    </div>
    <h5 class="contentsTitle1">유사문제</h5>
    <div style="border:solid 1px #aaaaaa;" />
    {#if predictionData[1] > 0.5}
      <div class="d-flex" style="">
        <div style="flex:1; padding: 15px; ">
          <b class="contentsTitle2"
            >{dataList[ran[0]][0]} {dataList[ran[0]][1] + 1}번</b
          >
          <div class="wordCard" style="margin-top:5px;">
            <img
              src={dataList[ran[0]][2]}
              style="width:100%;"
              alt="문제 이미지"
            />
          </div>
        </div>
        <div
          class="d-none d-lg-block"
          style="flex:1; padding: 15px; border-left:solid 2px #aaaaaa;"
        >
          <b class="contentsTitle2"
            >{dataList[ran[1]][0]} {dataList[ran[1]][1] + 1}번</b
          >
          <div class="wordCard" style="margin-top:5px;">
            <img
              src={dataList[ran[1]][2]}
              style="width:100%;"
              alt="문제 이미지"
            />
          </div>
        </div>
      </div>
      <div style="border:solid 1px #aaaaaa; margin-top:5px;" />
      <button on:click={onPop}
      style="margin:auto; width:100%; border:0; text-align:left;">
        <h4 class="more" style="margin-top: 10px;"><b>>> 더 알아보기...</b></h4>
      </button>
    {:else}
      <h3
        in:fly={{ delay: 1500, x: -500, duration: 1000 }}
        out:fly={{ x: -500, duration: 500 }}
        style="margin-top:20px; overflow-x: hidden;"
      >
        미안하지만, 
      </h3>
      <h3
      in:fly={{ delay: 2000, x: -500, duration: 1000 }}
      out:fly={{ x: -500, duration: 500 }}
      style="margin-top:10px; overflow-x: hidden;"
    >
      정확도가 50%를 넘지 못했어요...
    </h3>
    {/if}
  </div>
{/if}


<style>
  .contentsTitle1 {
    color: gray;
    font-size: 100%;
    word-break: keep-all;
    margin-top: 5px;
    margin-bottom: 10px;
  }

  .contentsTitle2 {
    color: black;
    font-size: 125%;
  }

  .contentsCard {
    background-color: #eeeeee;
    margin: 4px 2px 4px 2px;
    padding: 10px;
    border-style: solid;
    border-width: 3px;
    border-color: #dddddd;
    border-radius: 20px;
  }

  .wordCard {
    letter-spacing: -0.5px;
    font-size: 100%;
  }

  .more {
    margin-top: 10px;
    transition: transform 0.2s ease-in-out; /* 애니메이션 효과 적용 */
    transform: translateX(0); /* 기본 위치 */
  }

  .more:hover {
    transform: translateX(calc(50px));
  }

  @media (min-width: 576px) {
    .contentsTitle1 {
      font-size: 125%;
    }
    .contentsTitle2 {
      font-size: 150%;
    }
    .contentsCard {
      margin: 8px 4px 8px 4px;
      padding: 12px;
    }
    .wordCard {
      letter-spacing: 0px;
      word-break: keep-all;
      font-size: 125%;
    }
  }

  @media (min-width: 1200px) {
    .contentsTitle1 {
      font-size: 150%;
    }
    .contentsTitle2 {
      font-size: 175%;
    }
    .contentsCard {
      margin: 24px 4px 24px 4px;
      padding: 12px;
    }
    .wordCard {
      letter-spacing: 0px;
      word-break: keep-all;
      font-size: 150%;
    }
  }
</style>
