<script>
  import CameraIcon from "$lib/images/camera.png";
  import VisionApi from "$lib/components/api/VisionApi.svelte";
  import LoginPopup from "$lib/components/account/LoginPopup.svelte";
  import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
  } from "firebase/auth";

  let user = null;
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

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  onAuthStateChanged(auth, (currentUser) => {
    user = currentUser;
  });

  function clickUpload() {
    if (user) document.getElementById("fileInput").click();
    else isLoginPopup = true;
  }

  $: if (isUploadSucceed) {
    if (files && files[0]) {
      previewImage = URL.createObjectURL(files[0]);
    }
    isImage = true;
    isUploadSucceed = false;
  }
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
  <h3 style="margin-bottom:20px;">1-1) 사진 업로드하기</h3>
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
