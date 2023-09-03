<script>

  import BaseNavBar from "$lib/components/nav/BaseNavBar.svelte";
  import "./styles.css";
</script>

<div class="app">
  <BaseNavBar />
  <slot />
  <head>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
    />
  </head>

  <footer />
</div>
