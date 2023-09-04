<script>
  import Main from "$lib/components/landing/Main.svelte";
  import MainBottom from "$lib/components/landing/MainBottom.svelte";
</script>

<section>
  <Main />
  <MainBottom />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

</style>
