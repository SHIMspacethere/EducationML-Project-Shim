import json
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences

# Switch - Model Creation Bool
isTokenCreation = 0
isModelCreation = 1
isTestDataListed = 1


# Test Sentence
new_question = "ㄹㅇㄴㄻㄹㄴㄷㄷㄷㄷㄷㅇㄻ"
new_list = [
  "다음은 어떤 기러기에 대한 자료이다.",
  "다음은 사람에서 일어나는 물질대사에 대한 자료이다.",
  "다음은 호르몬 X에 대한 자료이다.",
  "사람의 질병에 대한 설명으로 옳은 것만을 <보기>에서 있는 대로 고른 것은?",
  "그림은 조건 Ⅰ～Ⅲ에서 뉴런 P의 한 지점에 역치 이상의 자극을 주고 측정한 시간에 따른 막전위를 나타낸 것이고, 표는 Ⅰ～Ⅲ에 대한 자료이다. ㉠과 ㉡은 Na＋과 K＋을 순서 없이 나타낸 것이다.",
  "그림 (가)는 사람 H의 체세포 세포 주기를, (나)는 H의 핵형 분석  결과의 일부를 나타낸 것이다. ㉠～㉢은 G1기, M기(분열기), S기를  순서 없이 나타낸 것이다.",
  "그림은 사람에서 혈중 티록신 농도에 따른 물질대사량을, 표는  갑상샘 기능에 이상이 있는 사람 A와 B의 혈중 티록신 농도,  물질대사량, 증상을 나타낸 것이다. ㉠과 ㉡은 ‘정상보다 높음’과  ‘정상보다 낮음’을 순서 없이 나타낸 것이다.",
  "표는 특정 형질에 대한 유전자형이 RR인 어떤 사람의 세포  (가)～(라)에서 핵막 소실 여부, 핵상, R의 DNA 상대량을 나타낸  것이다. (가)～(라)는 G1기 세포, G2기 세포, 감수 1 분열 중기 세포,  감수 2 분열 중기 세포를 순서 없이 나타낸 것이다. ㉠은 ‘소실됨’과  ‘소실 안 됨’ 중 하나이다.",
  "그림은 어떤 지역의 식물 군집에서 산불이 난 후의 천이 과정  일부를, 표는 이 과정 중 ㉠에서 방형구법을 이용하여 식물 군집을  조사한 결과를 나타낸 것이다. ㉠은 A와 B 중 하나이고, A와 B는  양수림과 음수림을 순서 없이 나타낸 것이다. 종 Ⅰ과 Ⅱ는 침엽수  (양수)에 속하고, 종 Ⅲ과 Ⅳ는 활엽수(음수)에 속한다.",
  "그림은 중추 신경계의 구조를 나타낸  것이다. ㉠～㉣은 간뇌, 소뇌, 연수, 중간뇌를  순서 없이 나타낸 것이다.",
  "그림 (가)는 정상인의 혈중 항이뇨 호르몬(ADH) 농도에 따른  ㉠을, (나)는 정상인 A와 B 중 한 사람에게만 수분 공급을 중단하고  측정한 시간에 따른 ㉠을 나타낸 것이다. ㉠은 오줌 삼투압과 단위  시간당 오줌 생성량 중 하나이다.",
  "그림은 생존 곡선 Ⅰ형, Ⅱ형, Ⅲ형을, 표는 동물 종 ㉠, ㉡, ㉢의  특징과 생존 곡선 유형을 나타낸 것이다. ⓐ와 ⓑ는 Ⅰ형과 Ⅲ형을  순서 없이 나타낸 것이며, 특정 시기의 사망률은 그 시기 동안 사망한  개체 수를 그 시기가 시작된 시점의 총개체 수로 나눈 값이다.",
  "다음은 검사 키트를 이용하여 병원체 P와 Q의 감염 여부를  확인하기 위한 실험이다.",
  "어떤 동물 종(2n＝6)의 유전 형질 ㉮는 2쌍의 대립유전자 A와 a,  B와 b에 의해 결정된다. 그림은 이 동물 종의 개체 Ⅰ과 Ⅱ의 세포  (가)～(라) 각각에 들어 있는 모든 염색체를, 표는 (가)～(라)에서  A, a, B, b의 유무를 나타낸 것이다. (가)～(라) 중 2개는 Ⅰ의 세포  이고, 나머지 2개는 Ⅱ의 세포이다. Ⅰ은 암컷이고 성염색체는  XX이며, Ⅱ는 수컷이고 성염색체는 XY이다.",
  "다음은 골격근의 수축 과정에 대한 자료이다",
  "다음은 어떤 집안의 유전 형질 (가)와 (나)에 대한 자료이다.",
  "다음은 어떤 가족의 유전 형질 (가)～(다)에 대한 자료이다.",
  "다음은 동물 종 A와 B 사이의 상호 작용에 대한 자료이다.",
  "다음은 사람의 유전 형질 (가)와 (나)에 대한 자료이다.",
  "다음은 동물 종 A에 대해 어떤 과학자가 수행한 탐구이다"
]

# Get Json Data - GoogleDrive
file_path = "/content/drive/MyDrive/Colab Notebooks/data/data.json"

with open(file_path, "r") as f:
    data = json.load(f)

# Set Class
questions = [item['question'] for item in data]
categories = [item['category'] for item in data]

# Tokenization
tokenizer = Tokenizer(num_words=150, oov_token="<OOV>")
tokenizer.fit_on_texts(questions)
sequences = tokenizer.texts_to_sequences(questions)

if (isTokenCreation) :
  word_index = tokenizer.word_index
  with open('/content/drive/MyDrive/Colab Notebooks/word_index.json', 'w', encoding='utf-8') as f:
    json.dump(word_index, f, ensure_ascii=False, indent=4)

# Padding
padded_sequences = pad_sequences(sequences, padding="post")

# Convert to NumPy array
X = np.array(padded_sequences)
y = np.array(categories)

if (isModelCreation): 
  model = tf.keras.Sequential([
      tf.keras.layers.Embedding(input_dim=150, output_dim=300, input_length=X.shape[1]),
      tf.keras.layers.Conv1D(128, 10, activation='relu'), # 128 필터와 크기 5의 커널을 사용
      tf.keras.layers.GlobalMaxPooling1D(),  # GlobalMaxPooling을 사용해 모든 특징을 다운샘플링
      tf.keras.layers.Dense(128, activation='relu'),
      tf.keras.layers.Dense(5, activation='softmax')
  ])

  optimizer = tf.keras.optimizers.Adam(learning_rate=0.001)
  model.compile(loss='categorical_crossentropy', optimizer=optimizer, metrics=['accuracy'])
  print(len(X), len(y))

  model.fit(X, y, epochs=5)
  model.save('/content/drive/MyDrive/Colab Notebooks/model.h5')

else :
  model = load_model('/content/drive/MyDrive/Colab Notebooks/model.h5')

# 예측 결과를 해석
if(isTestDataListed):
  # Tokenization 및 Padding
  new_sequences = tokenizer.texts_to_sequences(new_list)  # [ ] 를 제거했습니다.
  new_padded_sequences = pad_sequences(new_sequences, padding="post", maxlen=X.shape[1])
  print("maxlen :", X.shape[1])

  # 예측 - Prediction
  predictions = model.predict(new_padded_sequences)

  for i, item in enumerate(new_list):
    prediction = predictions[i]
    predicted_category_index = np.argmax(prediction)
    predicted_category_prob = np.max(prediction)

    ia = [0 for _ in range(5)]
    ia[predicted_category_index] = 1

    print(i+1,")", item)
    print(">> 인덱스 :", predicted_category_index, "  /  ", ia)
    print(">> 확률 :", predicted_category_prob,"\n")


else :
  # Tokenization 및 Padding
  new_sequence = tokenizer.texts_to_sequences([new_question])
  new_padded_sequence = pad_sequences(new_sequence, padding="post", maxlen=X.shape[1])
  print("maxlen :", X.shape[1])


  # 예측 - Prediction
  prediction = model.predict(new_padded_sequence)

  predicted_category_index = np.argmax(prediction)
  predicted_category_prob = np.max(prediction)
  ia = [0 for _ in range(5)]
  ia[predicted_category_index] = 1

  print("문제 :", new_question)
  print(">> 인덱스 :", predicted_category_index, "  /  ", ia)
  print(">> 확률 :", predicted_category_prob)