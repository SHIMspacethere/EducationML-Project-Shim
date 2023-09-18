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
    <h5 style="color:gray; font-size:100%;">
      핵심키워드 :
      <b style="color:black; font-size:125%;">{keywordsList}</b>
    </h5>
    <div style="border:solid 1px #bbbbbb; margin-bottom:3px;" />
    {#each dataList as item}
      {#if item.atr == "str"}
        <div class="wordCard" typingBlock>{item.data}</div>
      {:else if item.atr == "img"}
        <img src={item.data} style="width:100%;" />
      {:else}
        <div>Error</div>
      {/if}
    {/each}
  </div>
{/if}

<style>
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
    letter-spacing: -2px;
    font-size: 100%;
  }

  @media (min-width: 576px) {
    .contentsCard {
      margin: 8px 4px 8px 4px;
      padding: 12px;
    }
    .wordCard {
      letter-spacing: 0px;
      word-break: keep-all;
      font-size: 120%;
    }
  }

</style>
