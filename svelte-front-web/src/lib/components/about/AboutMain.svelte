<script>
  import { fade, fly } from "svelte/transition";
</script>

<div style="color:white; z-index: 10;">텍스트 입니다.</div>
<div
  class="black"
  in:fade={{ delay: 500, duration: 500 }}
  out:fade={{ duration: 500 }}
>
  
</div>

<style>
  .black {
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    background-color: black;
    opacity: 0.6;
    position: fixed;
    z-index: 1;
    display: flex;
    justify-content: center;
    vertical-align: middle;
  }
</style>
