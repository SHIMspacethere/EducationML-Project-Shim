<script>
  import AboutMain from "$lib/components/about/AboutMain.svelte";
  import AboutPage01 from "$lib/components/about/AboutPage01.svelte";

  let n = 5;
  let v = 50;
</script>

<div style="width:100%; text-align:center; position:absolute; z-index:10;">
  <div style="width: 80%">
    <div style="width: 50px; height:50px; border-radius: 50%; background-color:gray;"/>
  </div>
  <div
  class="progress"
  role="progressbar"
  aria-valuenow={v}
  aria-valuemin="0"
  aria-valuemax="100"
  style="width: 80%; 
  border: 2px solid white; 
  margin-left:auto;
  margin-right:auto;"
>
  <div
    class="progress-bar progress-bar-striped progress-bar-animated"
    style="width: {v}%;"
  >
    %
  </div>
</div>
</div>

<AboutPage01 />
