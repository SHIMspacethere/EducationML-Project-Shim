<script>
  import BlackOut from "../BlackOut.svelte";
  import collectorData from "$lib/components/contents/collectorData.js";
  import { handleStaticUpload } from "../api/uploadStatic.js";
  import { fade, fly } from "svelte/transition";
  import LoginPopup from "../account/LoginPopup.svelte";
  import { userStore } from "$lib/store.js";
  import CameraIcon from "$lib/images/camera.png";
  import DirIcon from "$lib/images/dirIcon.png";

  let isCollectorOn = false;
  let isLoginPopup = false;
  let isUserLogin = false;
  export let isUploadSucceed = false;
  export let isExtractSucceed = false;
  export let textLog = "";
  export let isBusy = false;
  export let preFunction;
  export let isImage = false;
  export let previewImage = CameraIcon;
  let dirIndex = -1;
  const dirStyles = [];

  userStore.subscribe((v) => {
    isUserLogin = v ? true : false;
  });

  for (let i = 0; i < collectorData.length; i++) {
    dirStyles.push("border:solid transparent 1px; background-color:transparent;");
  }

  function openCollector() {
    if (isUserLogin) {
      isCollectorOn = true;
    } else {
      isLoginPopup = true;
    }
  }

  function closeCollector() {
    isCollectorOn = false;
  }

  function clickDirectory(i) {
    if (!isBusy) {
      if (i == dirIndex) {
        dirIndex = -1;
        dirStyles[i] = "border:solid transparent 1px; background-color:transparent;";
      } else {
        if (dirIndex != -1) {
          dirStyles[dirIndex] = "border:solid transparent 1px; background-color:transparent;";
        }
        dirIndex = i;
        dirStyles[i] = "border:solid gray 1px; background-color:#cccccc;";
      }
    }
  }

  async function clickImage(i) {
    if (!isBusy) {
      isBusy = true;
      const obj = collectorData[dirIndex].images[i];
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
  out:fade={{ duration: 500 }}
>
  <img
    src={DirIcon}
    alt="Directory"
    style="display:inline-block; width:30px;"
  />
  <h5
    style="display:inline-block; margin: 2px 0px 0px 0px; vertical-align:middle;"
  >
    파일 목록 열기
  </h5>
</button>
{#if isLoginPopup}
  <LoginPopup
    bind:isPopup={isLoginPopup}
    text="파일 목록에 접근하기 위해서는 구글 로그인이 필요합니다."
  />
{/if}
{#if isCollectorOn}
  <BlackOut zIndex="51" onClose={closeCollector} />
  <div
    class="mainBox"
    in:fade={{ delay: 0, duration: 500 }}
    out:fade={{ duration: 500 }}
  >
    <div class="dirBox" style="flex:1;">
      <h1>디렉토리</h1>
      <div style="border:solid 1px #999999; margin-bottom:10px;" />
      <div class="directory-Parent">
        {#each collectorData as item, i}
          <button
            class="directory"
            on:click={() => clickDirectory(i)}
            style="width: 99%; display:block; margin:5px 0 5px 0; padding:5px 0 5px 0; {dirStyles[
              i
            ]}">{item.category}</button
          >
        {/each}
      </div>
    </div>
    <div class="imgBox" style="flex:2;">
      <h1>이미지 파일 선택</h1>
      <div style="border:solid 1px #999999; margin-bottom:10px;" />
      <div class="imgCard-Parent">
        {#if dirIndex != -1}
          {#each collectorData[dirIndex].images as item, i}
            <div class="imgCard">
              <div class="middleBox">
                <img class="files" src={item} alt="img" />
                <div class="overlayText" on:click={() => clickImage(i)}>
                  {i + 1}
                </div>
              </div>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  .mainBox {
    top: 20%;
    left: 50%;
    transform: translate(-50%, -20%);
    display: block;
    position: fixed;
    justify-content: center;
    vertical-align: middle;
    width: 99%;
    z-index: 52;
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
    padding: 0px 10px 10px 10px;
  }

  .imgBox {
    flex: 2;
    background-color: whitesmoke;
    padding: 5px 10px 5px 10px;
  }

  .directory-Parent {
    height: 120px;
    overflow-y: auto;
  }

  .directory {
    background-color: transparent;
    border: 0;
  }

  .imgCard-Parent {
    height: 250px;
    overflow-y: auto;
  }

  .imgCard {
    display: inline-block;
    width: 50%;
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
    font-size: 35px;
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

  @media (min-width: 576px) {
    .mainBox {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      display: flex;
      padding: 20px 15px 20px 15px;
      border: 2px solid gray;
      border-radius: 2%;
    }

    .dirBox {
      padding: 5px 10px 5px 10px;
    }

    .overlayText {
      font-size: 25px;
    }

    .directory-Parent {
      height: 400px;
      overflow-y: auto;
    }

    .imgCard-Parent {
      height: 400px;
      overflow-y: auto;
    }

    .imgCard {
      display: inline-block;
      width: 33%;
      overflow: hidden;
      aspect-ratio: 1 / 1;
      padding: 3px;
    }
  }

  @media (min-width: 768px) {
    .mainBox {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      display: flex;
      padding: 30px 20px 30px 20px;
      border: 2px solid gray;
      border-radius: 2%;
    }

    .imgCard {
      display: inline-block;
      width: 25%;
      overflow: hidden;
      aspect-ratio: 1 / 1;
      padding: 3px;
    }
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
