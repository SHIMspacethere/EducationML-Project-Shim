<script>
  import NarrowContainer from "$lib/components/NarrowContainer.svelte";
  import ToggleSwitch from "$lib/components/ToggleSwitch.svelte";
  import CameraIcon from "$lib/images/camera.png";
  import { fade, fly } from "svelte/transition";
  export let textValue = "";
  let _class = ""
  let _style = ""
  export {_class as class};
  export {_style as style};
</script>

<div class={_class} style={_style}>
  <h3 style="margin-bottom:20px;">1-2) 구문 입력하기</h3>
  <textarea
    class="sentence"
    value={textValue}
    placeholder="다음은 ㅇㅇ에 대한 자료이다."
    style="padding: 10px;"
  />
</div>

<style>
  .sentence {
    white-space: pre-wrap;
    width: 100%;
    height: 300px;
    resize: none;
  }
</style>
