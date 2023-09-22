<script>
  import GoogleLogo from "$lib/images/googleLogo.png";
  import { handleGoogleLogin } from "$lib/firebase/app";
  import { fade, fly } from "svelte/transition";
  import BlackOut from "../BlackOut.svelte";

  export let text = "OCR 기능을 이용하기 위해서는 구글 로그인을 해야합니다.";
  export let isPopup = true;
  let isBusy = false;
  let zIndex = 50;

  function closePopup() {
    if (!isBusy) isPopup = false;
  }

  async function clickLogin() {
    if (!isBusy) {
      isBusy = true;
      zIndex = 100;
      try {
        await handleGoogleLogin();
      } catch (error) {
        console.error("Error during login:", error);
        isBusy = false;
        zIndex = 50;
      }
      zIndex = 50;
      isBusy = false;
      closePopup();
    }
  }
</script>

<BlackOut {zIndex} onClose={closePopup} />
<div class="loginBox" in:fade={{ duration: 500 }} out:fade={{ duration: 500 }}>
  <h4 style="word-break: keep-all; line-height: 180%;">
    {text}
  </h4>
  <button
    on:click={clickLogin}
    style="margin-top:20px; border:0; background-color:transparent;"
  >
    <img src={GoogleLogo} style="width:100%;" alt="Google Login" />
  </button>
</div>

<style>
  .loginBox {
    top: 20%;
    left: 50%;
    transform: translate(-50%, -20%);
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

  @media (min-width: 576px) {
    .loginBox {
      top: 30%;
      left: 50%;
      width: 400px;
    }
  }
</style>
