<script>
  import BlackOut from "./BlackOut.svelte";
  import { fade, fly } from "svelte/transition";
  import infoIcon from "$lib/images/infoIcon.png";

  let isBoxClicked = false;

  function clickBox() {
    isBoxClicked = true;
  }

  function clickBlack() {
    isBoxClicked = false;
  }

  export let title = "title";
  export let content = "content";
</script>

{#if isBoxClicked}
  <BlackOut onClose={clickBlack} zIndex=30 />
  <div class="infoBox" on:click={clickBlack} in:fade={{ duration: 500 }} out:fade={{ duration: 500 }}>
    <h1 style="text-align:left;">{title}</h1>
    <div style="border:solid 1px #999999; margin-bottom:20px;" />
    <h5 style="text-align:left; line-height:160%">{content}</h5>
  </div>
{/if}
<img on:click={clickBox} src={infoIcon} alt="Help" style="width:40px; margin-left:20px;"/>

<style>
    .infoBox {
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    position: fixed;
    justify-content: center;
    vertical-align: middle;
    width: 98%;
    z-index: 51;
    background-color: whitesmoke;
    opacity: 90%;
    text-align: center;
    padding: 30px 20px 30px 20px;
    border: 2px solid gray;
    border-radius: 3%;
  }

  @media (min-width: 576px) {
    .infoBox {
      width: 400px;
      height: 300px;
    }
  }
</style>