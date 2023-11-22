<script>
  import ClickBox from "./ClickBox.svelte";
  import { fade, fly, blur } from "svelte/transition";
  import NarrowContainer from "../NarrowContainer.svelte";
</script>

<NarrowContainer>
  <h1
    class="container"
    in:blur={{ delay: 500, duration: 500 }}
    out:fade={{ duration: 500 }}
  >
    환영합니다
  </h1>
  <ClickBox
    href="/run"
    title=">> AI 모델 이용하기"
    text="생명과학 I 문제 이미지를 업로드해서, 유형을 선별하고 풀이에 도움이 되는 정보를 찾을 수 있어요."
  />
  <div style="margin-top:20px;" />
</NarrowContainer>

<style>
  .container {
    margin: 50px 0 50px 0;
    font-size: 250%;
  }

  @media (min-width: 576px) {
    .container {
      font-size: 400%;
      letter-spacing: 5px;
    }
  }
  @media (min-width: 768px) {
    .container {
      font-size: 500%;
      letter-spacing: 10px;
    }
  }
  @media (min-width: 1400px) {
    .container {
      margin-top: 70px;
      font-size: 600%;
      letter-spacing: 20px;
    }
  }
</style>
