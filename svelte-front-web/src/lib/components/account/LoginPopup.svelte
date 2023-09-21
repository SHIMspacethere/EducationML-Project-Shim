<script>
  import GoogleLogo from "$lib/images/googleLogo.png";
  import { handleGoogleLogin } from "$lib/firebase/app";
  import { fade, fly } from "svelte/transition";

  export let text = "OCR 기능을 이용하기 위해서는 구글 로그인을 해야합니다.";
  export let isPopup = true;

  function closePopup() {
    isPopup = false;
  }
</script>

<div
  class="black"
  on:click={closePopup}
  in:fade={{ duration: 500 }}
  out:fade={{ duration: 500 }}
/>
<div
  class="loginBox"
  in:fade={{ duration: 500 }}
  out:fade={{ duration: 500 }}
>
  <h4 style="word-break: keep-all; line-height: 180%;">
    {text}
  </h4>
  <button
    on:click={handleGoogleLogin}
    style="margin-top:20px; border:0; background-color:transparent;"
  >
    <img src={GoogleLogo} style="width:100%;" alt="Google Login" />
  </button>
</div>

<style>
  .loginBox {
    top: 20%;
    left: 0;
    display: absolute;
    position: fixed;
    justify-content: center;
    vertical-align: middle;
    width: 100%;
    z-index: 51;
    background-color: aliceblue;
    opacity: 90%;
    text-align: center;
    padding: 50px 30px 50px 30px;
    border: 2px solid gray;
    border-radius: 5%;
  }

  .black {
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    background-color: black;
    opacity: 0.6;
    position: fixed;
    z-index: 50;
    display: flex;
    justify-content: center;
    vertical-align: middle;
  }

  @media (min-width: 576px) {
		.loginBox {
      top: 30%;
    left: 50%;
    width: 400px;
		}
	}
</style>
