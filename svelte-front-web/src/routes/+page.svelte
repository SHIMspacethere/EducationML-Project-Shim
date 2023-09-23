<script>
  import BlackOut from "$lib/components/BlackOut.svelte";
  import Main from "$lib/components/landing/Main.svelte";
  import MainBottom from "$lib/components/landing/MainBottom.svelte";
  import { fade, fly } from "svelte/transition";

  let isOpen = false;

  function mainClick() {
    isOpen = true;
  }

  setTimeout(mainClick, 500);
</script>

{#if isOpen}
  <section
  out:fade={{ duration: 500 }}>
    <Main />
    <MainBottom />
  </section>
{:else}
  <BlackOut onClose={mainClick} zIndex=30 opacity=0.1 />  
{/if}

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }
</style>
