<script>
  export let textValue = "";
  let _class = ""
  let _style = ""
  export {_class as class};
  export {_style as style};
  export let boxStyle="";
</script>

<div class={_class} style={_style}>
  <h3 style="margin-bottom:20px;">1-2) 구문 입력하기</h3>
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
