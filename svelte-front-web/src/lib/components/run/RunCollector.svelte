<script>
  import CameraIcon from "$lib/images/camera.png";
  import BlackOut from "../BlackOut.svelte";
  import collectorData from "$lib/components/run/collectorData.js";
  import { handleStaticUpload } from "../api/uploadStatic.js";
  import { fade, fly } from "svelte/transition";

  let isCollectorOn = false;
  export let isUploadSucceed = false;
  export let isExtractSucceed = false;
  export let textLog = "";
  export let isBusy = false;
  export let preFunction;
  export let isImage = false;
  export let previewImage = CameraIcon;

  function openCollector() {
    isCollectorOn = true;
  }

  function closeCollector() {
    isCollectorOn = false;
  }

  function clickDirectory() {}

  async function clickImage(i) {
    if (!isBusy) {
      isBusy = true;
      const obj = collectorData[0].images[i];
      const response = await fetch(obj);
      const blob = await response.blob();
      const result = await handleStaticUpload(blob, "static");
      previewImage = obj;
      isImage = true;
      isUploadSucceed = result[0];
      isExtractSucceed = result[1];
      textLog = result[2];
      preFunction();
      isBusy = false;
      isCollectorOn = false;
    }
  }
</script>

<button
  on:click={openCollector}
  in:fade={{ delay: 500, duration: 500 }}
  out:fade={{ duration: 500 }}>파일 목록 열기</button
>
{#if isCollectorOn}
  <BlackOut zIndex="30" onClose={closeCollector} />
  <div
    class="mainBox"
    in:fade={{ delay: 0, duration: 500 }}
    out:fade={{ duration: 500 }}
  >
    <div class="dirBox" style="flex:1;">
      <h1>디렉토리</h1>
      <div style="border:solid 1px #999999; margin-bottom:20px;" />
      <button class="directory" on:click={clickDirectory}
        >2024학년도 6월 모의평가</button
      >
    </div>
    <div class="imgBox" style="flex:2;">
      <h1>이미지 파일 선택</h1>
      <div style="border:solid 1px #999999; margin-bottom:20px;" />
      <div style="height:400px; overflow-y:auto;">
        {#each collectorData[0].images as item, i}
          <div class="imgCard">
            <div class="middleBox">
              <img class="files" src={item} alt="img" />
              <div class="overlayText" on:click={() => clickImage(i)}>
                {i + 1}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
{/if}

<style>
  .mainBox {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    position: fixed;
    justify-content: center;
    vertical-align: middle;
    width: 90%;
    z-index: 51;
    background-color: whitesmoke;
    opacity: 90%;
    text-align: center;
    padding: 30px 20px 30px 20px;
    border: 2px solid gray;
    border-radius: 3%;
    overflow: hidden;
  }

  .dirBox {
    flex: 1;
    background-color: whitesmoke;
    padding: 5px 10px 5px 10px;
  }

  .imgBox {
    flex: 2;
    background-color: whitesmoke;
    padding: 5px 10px 5px 10px;
  }

  .directory {
    background-color: transparent;
    border: 0;
  }

  .imgCard {
    display: inline-block;
    width: 25%;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    padding: 3px;
  }

  .middleBox {
    overflow: hidden;
    aspect-ratio: 1 / 1;
    border: 1px solid #808080;
    position: relative;
  }

  .overlayText {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 25px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px;
  }

  .files {
    width: 100%; /* 부모 요소의 너비에 맞춰 설정 */
    height: auto; /* 원본 비율 유지를 위해 자동으로 설정 */
    object-fit: cover;
    object-position: 0 0;
    object-position: left top;
    transform: scale(2.5);
    transform-origin: left top;
  }

  @media (min-width: 992px) {
    .overlayText {
      font-size: 30px;
    }
  }

  @media (min-width: 1200px) {
    .mainBox {
      width: 950px;
    }

    .overlayText {
      font-size: 35px;
    }
  }
</style>
