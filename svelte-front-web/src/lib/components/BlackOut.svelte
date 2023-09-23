<script>
  import { fade, fly } from "svelte/transition";
  
  export let zIndex = 100;
  export let opacity = 0.6;
	export let onClose = () => {
		
	};
</script>

<div
  class="black"
  in:fade={{ delay: 0, duration: 500 }}
  out:fade={{ duration: 500 }}
  style="z-index:{zIndex}; opacity:{opacity}"
  on:click={onClose}
>
  <slot />
</div>

<style>
  .black {
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    background-color: black;
    position: fixed;
    display: flex;
    justify-content: center;
    vertical-align: middle;
  }

  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
</style>
