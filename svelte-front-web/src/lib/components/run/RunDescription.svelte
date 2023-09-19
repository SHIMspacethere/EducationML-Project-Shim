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

<div style="font-style:italic; color:gray;"></div>

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
