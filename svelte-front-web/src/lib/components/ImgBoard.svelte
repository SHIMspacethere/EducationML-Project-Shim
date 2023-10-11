<script>
  import BorderImg from '$lib/images/imgBoard.png';
  import Test from '$lib/images/backImage.png';
  import { fade, fly } from "svelte/transition";

  let _src = Test;
  export let width = "400px";
  export {_src as src};
</script>

<div
in:fly={{ delay: 0, y: 200, duration: 500 }}
out:fade={{ duration: 500 }}>
  <div style="width:{width}; margin: auto; position:relative; overflow:hidden; ">
    <img src={_src} style="width:{width}; height:350px; object-fit: cover; position:absolute;"/>
    <img src={BorderImg} style="width:{width}; height:auto; position:relative; z-index:3;"/>
  </div>
  <div class="d-none d-md-flex" style="display:flex; height:100px; justify-content:center; position:relative; margin-top:35px;">
    <div style="position:absolute; width: {width}; height: 25px; border-radius:50%; background-color:black; opacity:0.4;"></div>
  </div>
</div>


    

