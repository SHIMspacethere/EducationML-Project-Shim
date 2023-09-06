<script>
  import NarrowContainer from "$lib/components/NarrowContainer.svelte";
  import ToggleSwitch from "$lib/components/ToggleSwitch.svelte";
  import VisionApi from "$lib/components/api/VisionApi.svelte";
  import RunImageBox from "$lib/components/run/RunImageBox.svelte";
  import RunSentenceBox from "$lib/components/run/RunSentenceBox.svelte";
  import CameraIcon from "$lib/images/camera.png";
  import { fade, fly } from "svelte/transition";
  let switchValue = 1;
  let textValue = "";

  let file = null;
  let previewElement = "";
  let imageSrc = "";
  let isImage = false;
</script>

<div style="margin-top:20px" />
<NarrowContainer style="">
  <div
    in:fade={{ delay: 500, duration: 500 }}
    out:fade={{ duration: 500 }}
    class="d-sm-none"
    style="display:flex; align-items: center; margin:10px;"
  >
    <h2 style="margin-top:0.5px;">OCR 모드</h2>
    <ToggleSwitch
      bind:value={switchValue}
      label=""
      fontSize={24}
      design="slider"
    />
  </div>
  <div style="margin-top:20px" />
  <h3
    class="d-none d-sm-block"
    in:fly={{ delay: 500, y: 500, duration: 1000 }}
    out:fly={{ x: 500, duration: 500 }}
  >
    둘 중 하나를 택하시면 됩니다.
  </h3>
  <div
    in:fly={{ delay: 700, y: 500, duration: 1000 }}
    out:fly={{ y: 500, duration: 500 }}
  >
    <div class="d-none d-sm-flex" style="margin-top:20px;">
      <RunImageBox style="flex: 1; margin:10px;" bind:previewElement bind:imageSrc bind:isImage bind:file/>
      <RunSentenceBox {textValue} style="flex: 1; margin:10px;" />
    </div>
    <div class="d-sm-none" style="margin-top:20px; display:flex;">
      {#if switchValue}
        <RunImageBox style="flex: 1;" bind:previewElement bind:imageSrc bind:isImage bind:file/>
      {:else}
        <RunSentenceBox {textValue} style="flex: 1;" />
      {/if}
    </div>
  </div>
  <VisionApi bind:imageData={imageSrc}/>
</NarrowContainer>
