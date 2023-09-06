<script>
  import { fade, fly } from "svelte/transition";
  import gear from "$lib/images/gear.png";
</script>

<div
  class="black"
  in:fade={{ delay: 500, duration: 500 }}
  out:fade={{ duration: 500 }}
>
  <img class="loading" src={gear} alt="loading" />
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
    z-index: 100;
    display: flex;
    justify-content: center;
    vertical-align: middle;
  }

  .loading {
    margin: 100px;
    animation: rotate_image 6s linear infinite;
    transform-origin: 50% 50%;
    position: fixed;
    opacity: 1;
    flex: 1;
    width: 33%;
  }

  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
</style>
