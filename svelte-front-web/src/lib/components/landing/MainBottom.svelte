<script>
  import NarrowContainer from "./../NarrowContainer.svelte";
  import SvelteIcon from "$lib/images/svelte.png";
  import GoogleSDK from "$lib/images/googlesdk.png";
  import TensorFlow from "$lib/images/tensorflow.png";
  import Firebase from "$lib/images/firebase.png";
  import { fade, fly } from "svelte/transition";

  const items = [SvelteIcon, GoogleSDK, TensorFlow, Firebase];
</script>

<NarrowContainer class="container" style="margin-top:20px;">
  <h3
    in:fly={{ delay: 500, y: 200, duration: 2000 }}
    out:fly={{ y: 500, duration: 500 }}
    class="d-sm-none"
  >
    - 사용된 프레임워크
  </h3>
  <h1
  in:fly={{ delay: 500, y: 200, duration: 2000 }}
  out:fly={{ y: 500, duration: 500 }}
  class="d-none d-sm-block"
  style="flex:1; text-align:left; margin-top:30px;"
>
  - 사용된 프레임워크
</h1>
  {#each items as item, i}
    <img
      class="imageCard"
      in:fly={{ delay: 700 + i * 150, y: 200, duration: 2000 }}
      out:fly={{ y: 500, duration: 500 }}
      src={item}
      alt={item}
    />
  {/each}
</NarrowContainer>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
  }

  .imageCard {
    margin-top: 30px;
    flex: 1;
    max-width: 50%;
  }
</style>
