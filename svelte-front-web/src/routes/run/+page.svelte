<script>
  import NarrowContainer from "$lib/components/NarrowContainer.svelte";
  import ToggleSwitch from "$lib/components/ToggleSwitch.svelte";
  import CameraIcon from "$lib/images/camera.png";
  import { fade, fly } from "svelte/transition";
  let switchValue = 0;
  let textValue = "";

</script>

<div style="margin-top:20px" />

<NarrowContainer style="">
  <ToggleSwitch
    bind:value={switchValue}
    label=""
    fontSize={24}
    design="slider"
  />
  <div style="margin-top:20px" />
  <h3
    in:fly={{ delay: 700, x: -500, duration: 1000 }}
    out:fly={{ x: 500, duration: 500 }}
  >
    둘 중 하나를 택하시면 됩니다.
  </h3>
  <div style="margin-top:20px; display:flex;">
    <div style="flex:1; margin:10px;">
      <h2>1) 구문 입력하기</h2>
      <textarea class="sentence" value={textValue} style="flex:1;" />
    </div>
    {#if switchValue }
      <div style="flex:1; margin:10px;">
        <h2>2) 사진 업로드하기</h2>
        <card class="card" style="flex:1; text-align: center;">
          <div style="margin-top:20px" />
          <img
            src={CameraIcon}
            alt="업로드 아이콘"
            style="margin:20px; width: 40%; margin: 0 auto;"
          />
          <h4>업로드할 사진을 골라주세요.</h4>
        </card>
      </div>
    {/if}
  </div>
</NarrowContainer>

<style>
  .sentence {
    white-space: pre-wrap;
    width: 100%;
    height: 300px;
    resize: none;
  }

  .card {
    border: 1px, gray;
    opacity: 80%;
    background-color: transparent;
    height: 300px;
  }
</style>
