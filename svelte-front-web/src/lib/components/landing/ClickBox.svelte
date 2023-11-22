<script>
  import { onMount } from "svelte";
  import { fade, fly, blur } from "svelte/transition";
  import { typeKorean } from "../animations/typing copy";
  export let href;
  export let title = "title";
  export let text = "여기에 text를 입력해주세요.";

  onMount(() => {
    setTimeout(() => {
      typeKorean();
    }, 0);
  });
</script>

<div
  class="clickBoxBorder"
  in:fly={{ x: -500, delay: 500, duration: 500 }}
  out:fade={{ duration: 500 }}
>
  <a {href} class="clickBox" style="text-align:left;">
    <div style="">
      <h2>{title}</h2>
    </div>
    <div style="border: solid gray 1px; margin-bottom: 10px;" />
    <div typingBlock style="font-size: 135%; word-break:keep-all;">
      {text}
    </div>
  </a>
</div>

<style>
  .clickBoxBorder {
    width: 100%;
    margin: auto;
    transition: transform 0.2s ease-in-out; /* 애니메이션 효과 적용 */
    transform: translateX(0); /* 기본 위치 */
  }

  .clickBox {
    display: inline-block;
    width: 100%;
    margin: auto;
    border-style: solid;
    border-width: 2px;
    border-color: #777777;
    border-radius: 10px 10px 10px 10px;
    opacity: 0.8;
    padding: 15px 10px 15px 10px;
    text-decoration: none;
    color: inherit;
    transition: transform 1.0s ease-in-out; /* 애니메이션 효과 적용 */
  }

  .clickBoxBorder:hover {
    transform: translateX(calc(50px));
  }

  .clickBox:hover {
    background-color: #eeeeee;
  }

  @media (min-width: 576px) {
    .clickBoxBorder {
      width: 100%;
    }

    .clickBox {
      width: 50%;
    }
  }
</style>
