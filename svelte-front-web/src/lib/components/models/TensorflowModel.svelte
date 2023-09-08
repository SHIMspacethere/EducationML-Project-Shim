<script>
  import * as tf from "@tensorflow/tfjs";
  import token from "$lib/components/models/token.js";
  import predictButton from "$lib/images/predictButton.png";

  let model;
  let prediction;
  export let inputText = "";
  export let flexStyle = [1, 2];
  export let buttonStyle = "";
  export let pre_index = 0;
  export let pre_prob = 0;
  export let isBusy = false;
  export let preFunction;

  const wordIndex = token;

  async function loadModel() {
    model = await tf.loadLayersModel(
      "https://storage.googleapis.com/educationml-models/model.json"
    );
  }

  function tokenize(text) {
    return text.split(" ").map((word) => wordIndex[word] || wordIndex["<OOV>"]);
  }

  function padSequences(sequences) {
    const MAX_LENGTH = 105; /* Python에서 사용한 maxlen 값 */
    const padded = Array(MAX_LENGTH).fill(0);
    sequences.slice(0, MAX_LENGTH).forEach((val, index) => {
      padded[index] = val;
    });
    return padded;
  }

  function preprocess(text) {
    const tokenized = tokenize(text);
    const padded = padSequences(tokenized);
    return tf.tensor([padded]);
  }

  async function makePrediction() {
    if (isBusy || !model) {
      return;
    }
    isBusy = true;
    await preFunction();

    const inputData = preprocess(inputText); // 데이터 전처리
    const outputData = model.predict(inputData); // 비동기 예측

    // 데이터 후처리 (asynchronous)
    const outputArray = await outputData.array();
    prediction = postprocess(outputArray);
    pre_index = prediction.index;
    pre_prob = prediction.prob;

    isBusy = false;
  }

  function postprocess(outputArray) {
    // 최대 확률의 인덱스를 검색.
    const flatArray = outputArray.flat();
    const maxIndex = flatArray.indexOf(Math.max(...flatArray));
    const predictedCategoryProb = Math.max(...flatArray);
    return {
      index: maxIndex,
      prob: predictedCategoryProb,
    };
  }

  loadModel().catch((error) => {
    console.error("Something went wrong while loading the model: ", error);
  });
</script>

<div style="display:flex;">
  <button
    class="box"
    on:click={makePrediction}
  >
    <img src={predictButton} style={buttonStyle} />
  </button>
  <div class="pad" />
</div>

<style>
  .box {
    flex: 3;
    border:0; 
    text-align:left; 
    background-color:transparent; 
    width:auto;
  }
  .pad {
    flex: 1;
  }
  @media (min-width: 576px) {
		.box {
			flex: 1
		}
	}
  @media (min-width: 992px) {
		.pad {
			flex: 2;
		}
	}
</style>