<script>
  import { fade, fly } from "svelte/transition";
  import gear from "$lib/images/gear.png";
  import BlackOut from "./BlackOut.svelte";
</script>

<BlackOut>
  <img class="loading" src={gear} alt="loading" />
</BlackOut>

<style>
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
