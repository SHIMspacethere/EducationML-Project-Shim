<script>
  import BlackOut from "$lib/components/BlackOut.svelte";
  import NarrowContainer from "$lib/components/NarrowContainer.svelte";
  import ToggleSwitch from "$lib/components/ToggleSwitch.svelte";
  import TensorflowModel from "$lib/components/models/TensorflowModel.svelte";

  import RunImageBox from "$lib/components/run/RunImageBox.svelte";
  import RunSentenceBox from "$lib/components/run/RunSentenceBox.svelte";
  import { fade, fly } from "svelte/transition";
  let switchValue = 1;

  let isExtractSucceed = false;
  let isBusy = false;
  let isImage = false;
  let previewImage;
  let sampleText = "";
  let ocrText = "";

  $: if (isExtractSucceed) {
    sampleText = ocrText;
    isExtractSucceed = false;
  }
</script>

{#if isBusy}
  <BlackOut />
{/if}
<div style="margin-top:20px" />
<NarrowContainer style="">
  <div
    in:fade={{ delay: 0, duration: 1000 }}
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
  <!---- PC mode (from sm-size) -----> 
    <div class="d-none d-sm-flex" style="margin-top:20px;">
      <RunImageBox
        style="flex: 1; margin:10px;"
        bind:isBusy
        bind:isExtractSucceed
        bind:isImage
        bind:previewImage
        bind:textLog={ocrText}
        boxStyle="margin:20px; width: 100%; margin: 0 auto; flex:1;"
      />
      <RunSentenceBox
        bind:textValue={ocrText}
        style="flex: 1; margin:10px;"
        boxStyle="padding:15px; font-size:22px;"
      />
    </div>
    <!---- Mobile mode (to sm-size) -----> 
    <div class="d-sm-none" style="margin-top:20px; display:flex;">
      {#if switchValue}
        <div style="flex: 1;">
          <RunImageBox
            style="margin-bottom:5px;"
            bind:isBusy
            bind:isExtractSucceed
            bind:isImage
            bind:previewImage
            bind:textLog={ocrText}
            boxStyle="margin:20px; width: 100%; margin: 0 auto; flex:1;"
          />
          <b>- Recognition Text:</b>
          {ocrText}
        </div>
      {:else}
        <RunSentenceBox bind:textValue={ocrText} style="flex: 1;" boxStyle="padding:10px;" />
      {/if}
    </div>
  </div>
  <TensorflowModel />
</NarrowContainer>
