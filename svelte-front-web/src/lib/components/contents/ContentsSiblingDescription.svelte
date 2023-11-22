<script>
  import { fade } from "svelte/transition";
  import cancel from "$lib/images/cancel.png";
  import BlackOut from "../BlackOut.svelte";
  export let dataList;
  export let predictionData;
  export let isPopup;
  export let onClose = () => {};
</script>

<BlackOut zIndex="30" {onClose} />
<div
  class="contentsCard"
  in:fade={{ delay: 500, duration: 1000 }}
  out:fade={{ duration: 500 }}
  style="z-index: 40;"
>
  <div>
    <div
      on:click={onClose}
      style="position:relative; right:0;"
    >
      <img src={cancel} alt="Close" style="width:30px; float:right;" />
    </div>
    <h3 class="contentsTitle1" style="">
      유사문제 : <b style="color:black;"
        >총 {dataList.length} 문제가 발견되었습니다!</b
      >
    </h3>
    <div style="border:solid 1px #aaaaaa;" />
    <div
      class="dataCards"
    >
      {#each dataList as item, i}
        <div class="wordBorder">
          <div
            class="wordCard"
            style="margin-top: 5px; background-color: #eeeeee; border-radius: 15px; overflow: hidden;"
          >
            <b class="contentsTitle2">
              {item[0]}
              {item[1] + 1}번
            </b>
            <img
              src={item[2]}
              style="width: 100%; display: block;"
              alt="문제 이미지"
            />
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .contentsTitle1 {
    color: gray;
    word-break: keep-all;
    margin-top: 5px;
    margin-bottom: 10px;
  }

  .contentsTitle2 {
    color: black;
    font-size: 125%;
  }

  .contentsCard {
    top: 50%;
    left: 50%;
    width: 98%;
    height: 73vh;
    position: fixed;
    display: flex; /* 플렉스박스로 설정 */
    justify-content: center; /* 수평 중앙 정렬 */
    align-items: center; /* 수직 중앙 정렬 */
    background-color: #eeeeee;
    margin: 4px 2px 4px 2px;
    padding: 10px;
    border-style: solid;
    border-width: 3px;
    border-color: #dddddd;
    border-radius: 20px 10px 20px 10px;
    transform: translate(-50%, -50%);
  }

  .dataCards {
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    height: 56vh;
    margin: 10px 0px 10px 0px
  }

  .wordBorder {
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    margin-bottom : 10px;
  }

  .wordCard {
    letter-spacing: -0.5px;
    font-size: 100%;
  }

  @media (min-width: 576px) {
    .contentsTitle1 {
      font-size: 125%;
    }
    .contentsTitle2 {
      font-size: 125%;
    }
    .contentsCard {
      top: 50%;
      left: 50%;
      width: 90%;
      height: 75vh;
      margin: 8px 4px 8px 4px;
      padding: 12px;
      border-radius: 20px;
    }
    .dataCards {
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    height: 65vh;
  }
    .wordBorder {
      width: 100%;
      box-sizing: border-box;
      padding: 15px;
    }
    .wordCard {
      letter-spacing: 0px;
      word-break: keep-all;
      font-size: 125%;
    }
  }

  @media (min-width: 768px) {
    .contentsTitle2 {
      font-size: 125%;
    }

    .wordBorder {
      width: 50%;
      box-sizing: border-box;
      padding: 15px;
    }

    .contentsCard {
      top: 50%;
      left: 50%;
      width: 90%;
    }
    .wordCard {
      letter-spacing: 0px;
      word-break: keep-all;
      font-size: 115%;
    }
  }

  @media (min-width: 1200px) {
    .contentsTitle1 {
      font-size: 125%;
    }
    .contentsTitle2 {
      font-size: 150%;
    }
    .contentsCard {
      top: 50%;
      left: 50%;
      width: 70%;
      margin: 24px 4px 24px 4px;
      padding: 12px;
    }
    .wordCard {
      letter-spacing: 0px;
      word-break: keep-all;
      font-size: 120%;
    }
  }
</style>
