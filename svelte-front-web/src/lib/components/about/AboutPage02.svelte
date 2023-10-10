<script>
  import { fade, fly } from "svelte/transition";
  import BackImage from "$lib/images/study.jpg";
  import BlackOut from "../BlackOut.svelte";

  export let onClose = () => {};
</script>

<div
  on:click={onClose}
  in:fade={{ delay: 500, duration: 500 }}
  out:fade={{ duration: 500 }}
>
  <div style="position:relative; z-index:3; color:white;">
    <h1 style="margin-top: 100px;">3kkkk</h1>
  </div>
  <div style="position:relative; color:black;">
    <img class="imgBox" src={BackImage} style="z-index:1;"/>
  </div>
</div>

<style>
  .imgBox {
    display: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
    background-color: black;
    position: fixed;
    display: flex;
    justify-content: center;
    vertical-align: middle;
    filter: brightness(30%)
  }
</style>
