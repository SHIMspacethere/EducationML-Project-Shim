<script>
  import H2 from "../H2.svelte";
  import { fade, fly } from "svelte/transition";
  import BackImage from "$lib/images/moe.jpg";
  import ImgBoard from "../ImgBoard.svelte";

  import AIHUB from "$lib/images/about/post1.png";

  export let onClose = () => {};
  let count = 0;
  const max = 4;
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
        <H2>사용자가 문제 사진을 찍어 웹에 업로드합니다.
        </H2>
      {/if}
      {#if count >= 2}
        <H2>구글 Vertex OCR로부터 문장을 읽어 해당 문제의 유형을 판단합니다.</H2>
      {/if}
      {#if count >= 3}
      <H2>반환된 문제 유형과 특정 단어들로, 풀이에 도움이 되는 정보들을 얻을 수 있습니다.</H2>
    {/if}
      <div style="margin-top:50px;" />
    </div>
    <div style="margin-top:100px;" />
    {#if count >= 4}
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
