<script>
  import H2 from "../H2.svelte";
  import { fade, fly } from "svelte/transition";
  import BackImage from "$lib/images/moe.jpg";
  import ImgBoard from "../ImgBoard.svelte";

  import AIHUB from "$lib/images/about/post1.png";

  export let onClose = () => {};
  let count = 0;
  const max = 5;
  let intervalFunc;

  function clickBoard() {
    if (count >= max) onClose();
    else {
      count = max;
    }
  }

  {
    intervalFunc = setInterval(() => {
      count++;
      if (count == max) clearInterval(intervalFunc);
    }, 1500);
  }
</script>

<div
  on:click={clickBoard}
  in:fade={{ delay: 500, duration: 500 }}
  out:fade={{ duration: 500 }}
>
  <div style="position:relative; z-index:3; color:white;">
    <div style="margin-top: 120px; text-align:center; word-break:keep-all;">
      {#if count >= 1}
        <H2>전 세계는 'AI 혁명'에 빠져있습니다.</H2>
      {/if}
      {#if count >= 2}
        <H2>이 흐름은 우리나라 교육 시장에도 파장이 미치고 있습니다.</H2>
      {/if}
      <div style="margin-top:50px;" />
      {#if count >= 3}
        <H2>교육부에서는 2025년부터 'AI 디지털교과서' 사업에,</H2>
      {/if}
      {#if count >= 4}
        <H2
          >과학기술정보통신부에서도 '수학문제 자동풀이 AI' 사업에 지원하고
          있습니다.</H2
        >
      {/if}
    </div>
    <div style="margin-top:100px;" />
    {#if count >= 5}
      <div
        class="d-block d-md-flex"
        style="display:flex; gap:100px; justify-content:center;"
      >
        <ImgBoard src={AIHUB} />
        <div style="margin-top:50px;" />
        <ImgBoard />
      </div>
    {/if}
  </div>
  <div style="position:relative; color:black;">
    <img class="imgBox" src={BackImage} style="z-index:1; object-fit: cover" />
  </div>
</div>

<style>
  .imgBox {
    display: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
    background-color: black;
    position: fixed;
    display: flex;
    justify-content: center;
    vertical-align: middle;
    filter: brightness(30%);
  }
</style>
