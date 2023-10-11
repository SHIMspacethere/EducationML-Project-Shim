<script>
  import { fade, fly } from "svelte/transition";
  let _style = "";
  let _class = "";
  export let sec = 500;
  export { _style as style };
  export { _class as class };
</script>

<h2
  class={_class}
  style={_style}
  in:fly={{ delay: 0, y: 200, duration: sec }}
  out:fade={{ duration: 500 }}
>
  <slot />
</h2>
