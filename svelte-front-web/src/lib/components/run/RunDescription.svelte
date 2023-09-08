<script>
  import ProgressBar from "../ProgressBar.svelte";

  export let predictionData = [-1, -1];
</script>

<h2>Index : {predictionData[0]}</h2>
<ProgressBar
  value={predictionData[1].toFixed(4) * 100}
  style="height: 35px;"
  style_child="font-size: 24px;"
/>
