<script>
  import * as tf from '@tensorflow/tfjs';
  
  let model;
  let prediction;
  let inputText = '';

  async function loadModel() {
    model = await tf.loadLayersModel('http://localhost:5173/run/tsjs_model.h5/model.json');
  }

  async function makePrediction() {
    if (!model) {
      return;
    }
    
    // 데이터 전처리 (예를 들어, 텍스트 토큰화, 패딩 등)
    const inputData = preprocess("가나");
    
    // 모델 예측
    const outputData = model.predict(inputData);
    
    // 데이터 후처리
    prediction = postprocess(outputData);
  }

  // 모델 로드
  loadModel();
</script>

<input bind:value={inputText} placeholder="Enter text" />
<button on:click={makePrediction}>Predict</button>

{#if prediction !== undefined}
  <p>Prediction: {prediction}</p>
{/if}