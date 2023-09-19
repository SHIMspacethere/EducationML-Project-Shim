<script>
  import BlackOut from "$lib/components/BlackOut.svelte";
  import NarrowContainer from "$lib/components/NarrowContainer.svelte";
  import ToggleSwitch from "$lib/components/ToggleSwitch.svelte";
  import TensorflowModel from "$lib/components/models/TensorflowModel.svelte";
  import { fade, fly } from "svelte/transition";

  import RunImageBox from "$lib/components/run/RunImageBox.svelte";
  import RunSentenceBox from "$lib/components/run/RunSentenceBox.svelte";
  import RunDescription from "$lib/components/run/RunDescription.svelte";
  import SearchBox from "$lib/components/contents/SearchBox.svelte";

  let switchValue = 1;
  let isDebugging = false;

  let isExtractSucceed = false;
  let isBusy = false;
  let isImage = false;
  let isOcrLatest = false;
  let isPredictionDone = false;

  let previewImage;
  let latestText = "";
  let boxText = "";
  let ocrText = "";
  let predictionData = [-1, -1];

  $: if (isExtractSucceed) {
    latestText = isOcrLatest ? ocrText : boxText;
    isExtractSucceed = false;
  }

  $: offOcrBool(), boxText;

  function updateLatestText() {
    latestText = isOcrLatest ? ocrText : boxText;
    isPredictionDone = true;
  }

  function clickRedo() {
    isPredictionDone = false;
  }

  function offOcrBool() {
    isOcrLatest = false;
  }

  function onOcrBool() {
    isOcrLatest = true;
    boxText = ocrText;
  }
</script>

{#if isDebugging}
  <div style="position:fixed;">
    <div style="margin-left:20px; color:blue;">
      <h5>latestText : {latestText}</h5>
      <h5>boxText : {boxText}</h5>
      <h5>ocrText : {ocrText}</h5>
      <h5>predictionData : {predictionData}</h5>
    </div>
    <div style="margin-left:20px; color:green;">
      <h5>isDebugging : {isDebugging}</h5>
      <h5>isExtractSucceed : {isExtractSucceed}</h5>
      <h5>isBusy : {isBusy}</h5>
      <h5>isImage : {isImage}</h5>
      <h5>isOcrLatest : {isOcrLatest}</h5>
    </div>
  </div>
{/if}

{#if isBusy}
  <BlackOut />
{/if}

<div style="margin-top:20px" />
<NarrowContainer style="overflow:hidden;">
  {#if !isPredictionDone || predictionData[0] == -1}
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
          preFunction={onOcrBool}
          boxStyle="margin:20px; width: 100%; margin: 0 auto; flex:1;"
        />
        <RunSentenceBox
          bind:textValue={boxText}
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
              preFunction={onOcrBool}
              boxStyle="margin:20px; width: 100%; margin: 0 auto; flex:1;"
            />
            <b>- Recognition Text:</b>
            {ocrText}
          </div>
        {:else}
          <RunSentenceBox
            bind:textValue={boxText}
            style="flex: 1;"
            boxStyle="padding:10px;"
          />
        {/if}
      </div>
    </div>
    {#if boxText}
      <div
        in:fly={{ delay: 500, x: -500, duration: 500 }}
        out:fly={{ x: 500, duration: 500 }}
      >
        <TensorflowModel
          bind:isBusy
          bind:inputText={boxText}
          bind:pre_index={predictionData[0]}
          bind:pre_prob={predictionData[1]}
          buttonStyle="width:100%;"
          preFunction={updateLatestText}
        />
      </div>
    {/if}
  {:else}
    <div
      in:fly={{ delay: 500, x: 1000, duration: 1000 }}
      out:fade={{ duration: 500 }}
      style="display:fix; margin-top:20px;"
    >
      <RunDescription bind:predictionData={predictionData} preFunction={clickRedo} />
    </div>
    <div>
      <SearchBox sentence={latestText} />
    </div>
  {/if}
</NarrowContainer>
