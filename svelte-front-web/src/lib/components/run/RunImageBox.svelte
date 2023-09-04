<script>
  import NarrowContainer from "$lib/components/NarrowContainer.svelte";
  import ToggleSwitch from "$lib/components/ToggleSwitch.svelte";
  import CameraIcon from "$lib/images/camera.png";
  import { fade, fly } from "svelte/transition";

  let _class = "";
  let _style = "";
  export { _class as class };
  export { _style as style };

  export let file;
  export let isImage = false;
  export let previewElement;
  export let imageSrc = "";

  function handleFileChange(event) {
    if (event.target.files.length > 0) {
      file = event.target.files[0];
      const fileName = file.name.toLowerCase();
      if (
        file &&
        (fileName.endsWith(".jpg") ||
          fileName.endsWith(".jpeg") ||
          fileName.endsWith(".png"))
      ) {
        const reader = new FileReader();
        reader.onload = (e) => {
          imageSrc = e.target.result;
          isImage = true;
        };
        reader.readAsDataURL(file);
      } else {
        alert("이미지 파일 형식을 넣어주세요.");
      }
    }
  }

  $: if (isImage && previewElement) {
    previewElement.src = imageSrc;
  }
</script>

<input
  type="file"
  id="fileInput"
  style="display:none;"
  accept=".jpg, .jpeg, .png"
  on:change={handleFileChange}
/>

<div class={_class} style={_style}>
  <h3 style="margin-bottom:20px;">1-1) 사진 업로드하기</h3>

  <button
    class="imageBox"
    style="text-align: center;"
    on:click={() => document.getElementById("fileInput").click()}
  >
    {#if isImage}
      <img
        bind:this={previewElement}
        alt="Preview Image"
        style="margin:20px; width: 100%; margin: 0 auto; flex:1;"
      />
    {:else}
      <img
        src={CameraIcon}
        alt="업로드 아이콘"
        style="margin:20px; width: 40%; margin: 0 auto; flex:1;"
      />
      <h4 class="d-none d-md-block">업로드할 사진을 골라주세요.</h4>
      <h4 class="d-sm-block d-md-none" style="margin-top:10px;">
        업로드할 사진을
      </h4>
      <h4 class="d-sm-block d-md-none" style="margin-top:10px;">골라주세요.</h4>
    {/if}
  </button>
</div>

<style>
  .imageBox {
    border: 1px solid gray;
    border-radius: 2%;
    opacity: 80%;
    background-color: transparent;
    height: 350px;
    overflow: hidden;
  }
  @media (min-width: 576px) {
    .imageBox {
      height: 300px;
    }
  }
</style>
