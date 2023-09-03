<script>
	let className = '';
	export { className as class };
	export let style = '';
</script>

<div {...$$restProps} class={className} {style}>
	<slot />
</div>

<style>
	div {
		width: 100%;
		padding-right: 20px;
		padding-left: 20px;
		margin-right: auto;
		margin-left: auto;
	}

	@media (min-width: 576px) {
		div {
			width: 576px;
		}
	}
	@media (min-width: 768px) {
		div {
			width: 730px;
		}
	}
	@media (min-width: 992px) {
		div {
			width: 950px;
		}
	}
	@media (min-width: 1200px) {
		div {
			width: 950px;
		}
	}
	@media (min-width: 1400px) {
		div {
			width: 950px;
		}
	}
</style>
