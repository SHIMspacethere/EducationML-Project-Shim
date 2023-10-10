<script>
  import AboutMain from "$lib/components/about/AboutMain.svelte";
  import AboutPage01 from "$lib/components/about/AboutPage01.svelte";
  import AboutPage02 from "$lib/components/about/AboutPage02.svelte";
  import AboutProgressionBar from "$lib/components/about/AboutProgressionBar.svelte";
  import BlackOut from "$lib/components/BlackOut.svelte";

  let title = ["배경", "소개", "AI", "방법", "끝"];
  let index = 0;

  let proBarComponent;

  function plusIndex() {
    if (index != title.length - 1) index++;
    proBarComponent.clickButton(index);
  }
</script>

<div class="back" />
<AboutProgressionBar bind:this={proBarComponent} contents={title} bind:index />
{#if index == 0}
  <AboutPage01 onClose={plusIndex} />
{:else if index == 1}
  <AboutPage02 onClose={plusIndex} />
{:else if index == 2}{/if}

<style>
  .back {
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
    opacity: 0.7;
  }
</style>
