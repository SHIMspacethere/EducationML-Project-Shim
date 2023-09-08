<script>
  export let value = 50;
  let _class = "";
  let _style = "";
  let _child_style = "";
  // export { _class as class };
  export { _style as style };
  export { _child_style as style_child };

  let container;
  let containerWidth;

  function getClassByValue(value) {
    if (value >= 0 && value < 25) {
      return "bg-danger";
    } else if (value >= 25 && value < 50) {
      return "bg-warning";
    } else if (value >= 50 && value < 75) {
      return "bg-info";
    } else if (value >= 75 && value <= 100) {
      return "bg-success";
    }
    return "";
  }

  $: _class = getClassByValue(value);
</script>

<div
  bind:this={container}
  class="progress"
  role="progressbar"
  aria-valuenow={value}
  aria-valuemin="0"
  aria-valuemax="100"
  style="{_style} border: 2px solid white;"
>
  <div
    class="progress-bar progress-bar-striped progress-bar-animated {_class}"
    style="width: {value}%; {_child_style};"
  >
    {value}%
  </div>
</div>

<style>
  .progress-bar {
    transition: all 2.0s;
  }
</style>

