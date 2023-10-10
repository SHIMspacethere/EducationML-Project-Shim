<script>
  import BackImage from '$lib/images/study.jpg';
  import BlackOut from '../BlackOut.svelte';

  let preFunction;

  function clickWindow() {

  }
  
</script>

<div on:click={clickWindow}>
  <div style="position:relative; z-index:10; color:white;">
    <h1 style="margin-top: 50px;">3kkkk</h1>
  </div>
  <div style="position:realtive; z-index:1;">
    <img class="imgBox" src={BackImage}/>
  </div>
  <BlackOut zIndex=2/>
</div>



<style>
  .imgBox {
    display:absolute;
    top: 0;
    left: 0;
    width: auto;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
    background-color: black;
    position: fixed;
    display: flex;
    justify-content: center;
    vertical-align: middle;
  }
  .progress-bar {
transition: all 2.0s;
}
</style>