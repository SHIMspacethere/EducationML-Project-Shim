<script>
  import CameraIcon from "$lib/images/camera.png";
  import VisionApi from "$lib/components/api/VisionApi.svelte";
  import LoginPopup from "$lib/components/account/LoginPopup.svelte";
  import { userStore } from "$lib/store.js";
  import InfoBox from "../infoBox.svelte";

  let isUserLogin = false;
  let isLoginPopup = false;
  let _class = "";
  let _style = "";
  export { _class as class };
  export { _style as style };

  let files;
  let isUploadSucceed = false;
  export let isExtractSucceed = false;
  export let textLog = "";
  export let isBusy = false;
  export let isImage = false;
  export let previewImage = CameraIcon;
  export let boxStyle = "";
  export let preFunction;

  userStore.subscribe(v => {
    isUserLogin = v? true : false;
  });

  function clickUpload() {
    if (isUserLogin) document.getElementById("fileInput").click();
    else isLoginPopup = true;
  }

  $: if (isUploadSucceed) {
    if (files && files[0]) {
      previewImage = URL.createObjectURL(files[0]);
    }
    isImage = true;
    isUploadSucceed = false;
  }

  const title = "1-1) 사진 업로드";
  const content = "구글 로그인을 먼저 한 다음에 OCR 기능을 이용할 수 있습니다. 이미지 파일을 업로드한 후, 첫 문단의 내용을 가져옵니다.";
</script>

{#if isLoginPopup}
  <LoginPopup bind:isPopup={isLoginPopup} />
{/if}
<div class={_class} style={_style}>
  <VisionApi
    bind:files
    bind:isUploadSucceed
    bind:isExtractSucceed
    bind:textLog
    bind:isBusy
    {preFunction}
  />
  <div style="display: flex; align-items:center; margin-bottom:10px;">
    <h2 style="margin-top:10px; display:inline-block;">{title}</h2>
    <InfoBox {title} {content} />
  </div>

  <div style="">
    <button
      class="imageBox"
      style="text-align: center;"
      on:click={() => clickUpload()}
    >
      {#if isImage}
        <img src={previewImage} alt="Preview Image" style={boxStyle} />
      {:else}
        <img
          src={previewImage}
          alt="업로드 아이콘"
          style="margin:20px; width: 40%; margin: 0 auto; flex:1;"
        />
        <h4 class="d-none d-md-block">업로드할 사진을 골라주세요.</h4>
        <h4 class="d-sm-block d-md-none" style="margin-top:10px;">
          업로드할 사진을
        </h4>
        <h4 class="d-sm-block d-md-none" style="margin-top:10px;">
          골라주세요.
        </h4>
      {/if}
    </button>
  </div>
</div>

<style>
  .imageBox {
    border: 1px solid gray;
    border-radius: 2%;
    opacity: 80%;
    background-color: transparent;
    height: 300px;
    overflow: hidden;
  }
  @media (min-width: 576px) {
    .imageBox {
      height: 400px;
    }
  }
</style>
