import json
import numpy as np
import tensorflow as tf
import random
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from sklearn.model_selection import train_test_split

# Switch - Model Creation Bool


global X, y, model, tokenizer, padded_sequences, questions, categories

# Get Json Data - GoogleDrive
file_path = "/content/drive/MyDrive/Colab Notebooks/data/data231031.json"

with open(file_path, "r") as f:
    data = json.load(f)

# Data Test 6:2:2
random.shuffle(data)

train_size = int(len(data) * 0.6)
val_size = int(len(data) * 0.2)

train_data = data[:train_size]
val_data = data[train_size:train_size+val_size]
test_data = data[train_size+val_size:]

print(f"전체 데이터 수: {len(data)}", "(6 : 2 : 2)")
print(f"훈련: {len(train_data)}", "/", f"검증: {len(val_data)}", "/", f"테스트: {len(test_data)}")

def setClass(rawData, train=False) :
  # Set Class
  global X, y, tokenizer, padded_sequences, questions, categories, max_length
  questions = [item['question'] for item in rawData]
  categories = [item['category'] for item in rawData]

  # Tokenization
  if train:  # train_data에서만 토크나이저 초기화
    tokenizer = Tokenizer(num_words=150, oov_token="<OOV>")
    tokenizer.fit_on_texts(questions)

  sequences = tokenizer.texts_to_sequences(questions)

  # Padding
  if train:  # train_data에서만 max_length 초기화
    max_length = max([len(seq) for seq in sequences])
  padded_sequences = pad_sequences(sequences, padding="post", maxlen=max_length)

  # Convert to NumPy array ()
  X = np.array(padded_sequences)
  y = np.array(categories)

def modelCreation():
  global X, y, model
  model = tf.keras.Sequential([
      tf.keras.layers.Embedding(input_dim=150, output_dim=300, input_length=X.shape[1]),
      tf.keras.layers.Conv1D(128, 10, activation='relu'), # 128 필터와 크기 5의 커널을 사용
      tf.keras.layers.GlobalMaxPooling1D(),  # GlobalMaxPooling을 사용해 모든 특징을 다운샘플링
      tf.keras.layers.Dense(128, activation='relu'),
      tf.keras.layers.Dense(5, activation='softmax')
  ])

  optimizer = tf.keras.optimizers.Adam(learning_rate=0.001)
  model.compile(loss='categorical_crossentropy', optimizer=optimizer, metrics=['accuracy'])

def modelTrain(validation_data=None):
    global X, y, model
    if validation_data:
        model.fit(X, y, epochs=5, validation_data=validation_data)
    else:
        model.fit(X, y, epochs=5)

# 예측 결과를 해석
def modelPrediction():
  global X, y, model, tokenizer, questions, categories
  # Tokenization 및 Padding
  new_sequences = tokenizer.texts_to_sequences(questions)
  new_padded_sequences = pad_sequences(new_sequences, padding="post", maxlen=X.shape[1])
  print("maxlen :", X.shape[1])

  # 예측 - Prediction
  predictions = model.predict(new_padded_sequences)
  count = 0

  for i, item in enumerate(predictions):
    prediction = predictions[i]
    predicted_category_index = np.argmax(prediction)
    predicted_category_prob = np.max(prediction)

    if (predicted_category_index == np.argmax(categories[i])) :
      count = count + 1

  print("전체:", len(predictions), " / 정답:", count, " ===> ", "정확도:", 100*count/len(predictions),"%")

# <------------------ <Test> ------------------->
setClass(train_data, train=True)
print("---------- <Train> ----------")
modelCreation()
modelTrain()

setClass(val_data)
print("---------- <Validation> ----------")
modelTrain(validation_data=(X, y))
modelPrediction()

setClass(test_data)
print("---------- <Test> ----------")
modelPrediction()
