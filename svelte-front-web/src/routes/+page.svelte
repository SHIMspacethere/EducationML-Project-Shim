<script>
  import Main from "$lib/components/landing/Main.svelte";
  import MainBottom from "$lib/components/landing/MainBottom.svelte";
  import { fade, fly } from "svelte/transition";

  let isOpen = false;

  function mainClick() {
    isOpen = true;
  }

  setTimeout(mainClick, 1000);
</script>

{#if isOpen}
  <section
  out:fade={{ duration: 500 }}>
    <Main />
    <MainBottom />
  </section>
{:else}
  <div class="black" on:click={mainClick}
  in:fade={{ duration: 500 }}
  out:fade={{ duration: 500 }}/>
{/if}

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  .black {
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    background-color: black;
    opacity: 0.6;
    position: fixed;
    z-index: 10;
    display: flex;
    justify-content: center;
    vertical-align: middle;
  }
</style>
