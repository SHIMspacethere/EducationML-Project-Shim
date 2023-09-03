<script>
  import { fade, fly } from "svelte/transition";
  import NarrowContainer from "../NarrowContainer.svelte";
</script>

<NarrowContainer>
  <h1 class="container" in:fade={{ duration: 500 }} out:fade>환영합니다</h1>
</NarrowContainer>

<style>
  .container{
    margin-top: 50px;
    font-size: 250%;
  }

  @media (min-width: 576px) {
		.container {
			font-size: 400%;
		}
	}
	@media (min-width: 768px) {
		.container {
			font-size: 500%;
		}
	}
  @media (min-width: 1400px) {
		.container {
      margin-top: 70px;
			font-size: 600%;
		}
	}
</style>
