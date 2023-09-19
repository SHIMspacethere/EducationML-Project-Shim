<script>
  import { onMount } from "svelte";
  import { typeKorean } from "../animations/typing";
  import { fade, fly } from "svelte/transition";
  import cancel from "$lib/images/cancel.png";

  export let dataList;
  export let keywordsList;
  let isOn = true;

  function switchOff() {
    isOn = false;
  }

  onMount(() => {
    setTimeout(() => {
      typeKorean();
    }, 0);
  });
</script>

{#if isOn}
  <div
    class="contentsCard"
    in:fly={{ delay: 500, x: 500, duration: 1000 }}
    out:fly={{ x: 500, duration: 500 }}
  >
    <div on:click={switchOff} style="position:relative; right:0;">
      <img src={cancel} alt="Close" style="width:30px; float:right;" />
    </div>
    <h5 class="contentsTitle1">
      핵심키워드 :
      <b class="contentsTitle2">{keywordsList}</b>
    </h5>
    <div style="border:solid 1px #bbbbbb; margin-bottom:5px;" />
    {#each dataList as item}
      {#if item.atr == "str"}
        <div class="wordCard" typingBlock style="margin-bottom:10px;">
          {item.data}
        </div>
      {:else if item.atr == "img"}
        <img src={item.data} style="width:100%;" />
      {:else}
        <div>Error</div>
      {/if}
    {/each}
  </div>
{/if}

<style>
  .contentsTitle1 {
    color: gray;
    font-size: 100%;
  }

  .contentsTitle2 {
    color: black;
    font-size: 125%;
  }

  .contentsCard {
    background-color: white;
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
