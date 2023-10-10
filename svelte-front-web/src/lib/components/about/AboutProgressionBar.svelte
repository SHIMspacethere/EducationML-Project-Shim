<script>
  import { fade, fly } from "svelte/transition";
  export let contents = [1, 2, 3, 4, 5];
  export let index = 0;

  const dia = 30;
  const diaRatio = 0.8;
  const buttonColor = ["#aaaaaa", "#ffffff", "#555555"];
  const buttonColorArr = new Array(contents.length).fill(buttonColor[1]);
  const textColor = ["#888888", "#ffffff"];
  const textColorArr = new Array(contents.length).fill(textColor[0]);

  buttonColorArr[0] = buttonColor[2];
  textColorArr[0] = textColor[1];

  $: val = (index * 100) / (contents.length - 1);

  export function clickButton(i) {
    index = i;
    buttonColorArr.fill(buttonColor[1]);
    textColorArr.fill(textColor[0]);
    for (let a = 0; a < i + 1; a++) {
      buttonColorArr[a] = buttonColor[2];
    }
    textColorArr[i] = textColor[1];
  }
</script>

<div
  in:fade={{ delay: 500, duration: 1000 }}
  out:fade={{ duration: 500 }}
  style="width:100%; text-align:center; position:absolute; z-index:10; margin-top:20px;"
>
  <div style="display:flex; justify-content:center;">
    <div
      style="z-index:10; width: 80%; display: flex; justify-content: space-between; opacity:100%;"
    >
      {#each contents as item, i}
        <div
          on:click={() => clickButton(i)}
          style="top:0%; margin-left:-{dia / 2}px; margin-right:-{dia /
            2}px; position:relative; width: {dia}px; height:{dia}px; border-radius: 50%; background-color:{buttonColor[0]}; display:flex; align-items:center; justify-content:center; cursor:pointer;"
        >
          <div
            class="innerCircle"
            style="width: {dia * diaRatio}px; height:{dia *
              diaRatio}px; border-radius: 50%; background-color:{buttonColorArr[
              i
            ]}; text-align:center; transform:translate(0%, 0%)"
          />
          <h4
            style="position:absolute; width: 50px; margin-top:{dia *
              3}px; color:{textColorArr[i]};"
          >
            {item}
          </h4>
        </div>
      {/each}
    </div>

    <div
      class="progress"
      role="progressbar"
      aria-valuenow={val}
      aria-valuemin="0"
      aria-valuemax="100"
      style="
    z-index:1;
    width: 80%; 
    top:50%;
    transform:translate(0, -50%); 
  border: 2px solid white; 
  margin-left:auto;
  margin-right:auto;
  position:absolute;"
    >
      <div
        class="progress-bar progress-bar-striped bg-dark progress-bar-animated"
        style="width: {val}%;"
      />
    </div>
  </div>
</div>

<style>
  .innerCircle {
    transition: all 2s;
  }

  .progress-bar {
    transition: all 1.5s;
  }
</style>
