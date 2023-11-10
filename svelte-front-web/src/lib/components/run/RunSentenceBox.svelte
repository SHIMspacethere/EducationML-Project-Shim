<script>
  import InfoBox from "../infoBox.svelte";

  export let textValue = "";
  let _class = ""
  let _style = ""
  export {_class as class};
  export {_style as style};
  export let boxStyle="";

  const title = "1-2) 구문 입력";
  const content = "OCR 기능을 이용하지 않고 구문을 직접 작성합니다. 또는 사진을 통해 받아온 텍스트 문구를 수정할 수도 있습니다."
</script>

<div class={_class} style={_style}>
  <div style="display: flex; align-items:center; margin-bottom:10px;">
    <h2 style="margin-top:10px; display:inline-block">{title}</h2>
    <InfoBox {title} {content} />
  </div>
  <textarea
    class="sentence"
    bind:value={textValue}
    placeholder="다음은 ㅇㅇ에 대한 자료이다."
    style={boxStyle}
  />
</div>

<style>
  .sentence {
    white-space: pre-wrap;
    width: 100%;
    height: 300px;
    resize: none;
  }
  @media (min-width: 576px) {
    .sentence {
      height: 400px;
    }
  }
</style>
