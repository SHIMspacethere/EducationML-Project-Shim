import json
import numpy as np
import tensorflow as tf
import random
import pandas as pd
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from sklearn.model_selection import train_test_split
from sklearn.model_selection import GridSearchCV



# Switch - Model Creation Bool
isGridSearch = 1
execution = 1

global train_data, val_data, test_data
global X, y, model, tokenizer, padded_sequences, questions, categories, results_df
results_df = pd.DataFrame(columns=['input_dim', 'output_dim',
  'epochs', 'conv1D_filter', 'conv1D_kernel', 'dense',
  'result_V', 'result_T'])

param_grid = {
    'input_dim' : [100, 150, 200],
    'output_dim' : [200, 300, 400],
    'epochs': [5, 10, 15],
    'conv1D_filter' : [64, 96, 128],
    'conv1D_kernel' : [5, 10, 15],
    'dense' : [64, 96, 128]
}

# Get Json Data - GoogleDrive
file_path = "/content/drive/MyDrive/Colab Notebooks/data/data231031.json"
excel_path = "/content/drive/MyDrive/Colab Notebooks/result_excel.xlsx"

def setData() :
  global train_data, val_data, test_data

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

def setClass(id, rawData, train=False) :
  # Set Class
  global X, y, tokenizer, padded_sequences, questions, categories, max_length
  questions = [item['question'] for item in rawData]
  categories = [item['category'] for item in rawData]

  # Tokenization
  if train:  # train_data에서만 토크나이저 초기화
    tokenizer = Tokenizer(num_words=id, oov_token="<OOV>")
    tokenizer.fit_on_texts(questions)

  sequences = tokenizer.texts_to_sequences(questions)

  # Padding
  if train:  # train_data에서만 max_length 초기화
    max_length = max([len(seq) for seq in sequences])
  padded_sequences = pad_sequences(sequences, padding="post", maxlen=max_length)

  # Convert to NumPy array ()
  X = np.array(padded_sequences)
  y = np.array(categories)

def modelCreation(id, od, cf, ck, d):
  global X, y, model
  model = tf.keras.Sequential([
      tf.keras.layers.Embedding(input_dim=id+1, output_dim=od, input_length=X.shape[1]),
      tf.keras.layers.Conv1D(cf, ck, activation='relu'), # filter, kernel
      tf.keras.layers.GlobalMaxPooling1D(),  # GlobalMaxPooling to DownSampling
      tf.keras.layers.Dense(d, activation='relu'),
      tf.keras.layers.Dense(5, activation='softmax')
  ])

  optimizer = tf.keras.optimizers.Adam(learning_rate=0.001)
  model.compile(loss='categorical_crossentropy', optimizer=optimizer, metrics=['accuracy'])

def modelTrain(e, validation_data=None):
    global X, y, model
    if validation_data:
        model.fit(X, y, epochs=e, validation_data=validation_data)
    else:
        model.fit(X, y, epochs=e)

# 예측 결과를 해석
def modelPrediction():
  global X, y, model, tokenizer, questions, categories
  # Tokenization 및 Padding
  new_sequences = tokenizer.texts_to_sequences(questions)
  new_padded_sequences = pad_sequences(new_sequences, padding="post", maxlen=X.shape[1])
  if (isGridSearch==0) :
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

  print("전체:", len(predictions), " / 정답:", count, " ===> ", "정확도:", 100.00*count/len(predictions),"%")
  return 100.00*count/len(predictions)


# <------------------ <Test> ------------------->
def modelTest(id, od, cf, ck, d, e):
  global results_df
  setClass(id, train_data, train=True)
  print("---------- <Train> ----------")
  modelCreation(id, od, cf, ck, d)
  modelTrain(e)

  setClass(id, val_data)
  print("---------- <Validation> ----------")
  modelTrain(e, validation_data=(X, y))
  a = modelPrediction()

  setClass(id, test_data)
  print("---------- <Test> ----------")
  b = modelPrediction()

  new_data = pd.DataFrame([{
       'input_dim' : input_dim,
       'output_dim' : output_dim,
       'epochs' : epochs,
       'conv1D_filter' : conv1D_filter,
       'conv1D_kernel' : conv1D_kernel,
       'dense' : dense,
       'result_V' : a,
       'result_T' : b
  }])

  results_df = pd.concat([results_df, new_data], ignore_index=True)

for _ in range(1, execution+1):
  setData()
  for input_dim in param_grid['input_dim']:
    for output_dim in param_grid['output_dim']:
      for epochs in param_grid['epochs']:
        for conv1D_filter in param_grid['conv1D_filter']:
          for conv1D_kernel in param_grid['conv1D_kernel']:
            for dense in param_grid['dense']:
              modelTest(input_dim, output_dim, conv1D_filter, conv1D_kernel, dense, epochs)
              results_df.to_excel(excel_path, index=False)
              print('---------------------------------------------')
              print(input_dim, output_dim, conv1D_filter, conv1D_kernel, dense, epochs)
              print('---------------------------------------------')
