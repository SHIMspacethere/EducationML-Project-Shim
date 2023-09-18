<script>
  import ProgressBar from "../ProgressBar.svelte";
  import RedoButton from "$lib/images/redoButton.png";
  import { fade, fly } from "svelte/transition";

  export let predictionData = [-1, -1];
  export let preFunction;
  
  const category = {
    0 : "Ⅰ. 생명 과학의 이해",
    1 : "Ⅱ. 사람의 물질대사",
    2 : "Ⅲ. 항상성과 몸의 조절",
    3 : "Ⅳ. 유전",
    4 : "Ⅴ. 생태계와 상호 작용"
  }

  function getStringByValue() {
    let value = predictionData[1] * 100;
    if (value >= 0 && value < 50) {
      return '"표본이 적어서 정확하질 않습니다..."';
    } else if (value >= 50 && value < 75) {
      return '"이 유형이 맞나요?"';
    } else if (value >= 75 && value < 90) {
      return '"이 유형일 확률이 높습니다."';
    } else if (value >= 90 && value < 99) {
      return '"무엇보다 정확합니다!"';
    }
      else if (value >= 99 && value <= 100) {
      return '"전재산 걸 수 있습니다!!!"';
    }
    return '';
  }

  let comment = getStringByValue();
</script>

<div
  style="display:flex; margin-bottom:20px;"
  in:fly={{ delay: 500, x: -500, duration: 1000 }}
  out:fly={{ x: -500, duration: 500 }}
>
  <button class="redoBox" style="" on:click={preFunction}>
    <img src={RedoButton} alt="redo" style="width:100%;" />
  </button>
  <div class="redoPad" style="" />
</div>

<h2>Index : {predictionData[0]}</h2>
<ProgressBar
  value={predictionData[1].toFixed(2) * 100}
  style="height: 50px;"
  style_child="font-size: 30px;"
/>
<div style="margin: 10px 0 10px 0;">
  <h1 style="text-align: left;">
    {category[predictionData[0]]}
  </h1>
</div>

<div style="font-style:italic; color:gray;">{comment}</div>

<style>
  .redoBox {
    flex: 3;
    border: 0;
    text-align: left;
    background-color: transparent;
  }
  .redoPad {
    flex: 1;
  }
  @media (min-width: 576px) {
    .redoBox {
      flex: 1;
    }
  }
  @media (min-width: 992px) {
    .redoPad {
      flex: 2;
    }
  }
</style>
