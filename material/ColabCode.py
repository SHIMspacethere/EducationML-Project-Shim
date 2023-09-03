import json
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences

# Switch - Model Creation Bool
isModelCreation = 1
isTestDataListed = 1

# Test Sentence
new_question = ""
new_list = []

# Get Json Data - GoogleDrive
file_path = "/content/drive/MyDrive/Colab Notebooks/data/data.json"

with open(file_path, "r") as f:
    data = json.load(f)

# Set Class
questions = [item['question'] for item in data]
categories = [item['category'] for item in data]

# Tokenization
tokenizer = Tokenizer(num_words=100, oov_token="<OOV>")
tokenizer.fit_on_texts(questions)
sequences = tokenizer.texts_to_sequences(questions)

# Padding
padded_sequences = pad_sequences(sequences, padding="post")

# Convert to NumPy array
X = np.array(padded_sequences)
y = np.array(categories)

if (isModelCreation) : 
  model = tf.keras.Sequential([
      tf.keras.layers.Embedding(input_dim=100, output_dim=300, input_length=X.shape[1]),
      tf.keras.layers.Flatten(),
      tf.keras.layers.Dense(128, activation='relu'),
      tf.keras.layers.Dense(5, activation='softmax')  # category의 크기만큼 출력 노드 설정
  ])

  model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])
  print(len(X), len(y))

  model.fit(X, y, epochs=10)
  model.save('/content/drive/MyDrive/Colab Notebooks/model.h5')

else :
  model = load_model('/content/drive/MyDrive/Colab Notebooks/model.h5')

# 예측 결과를 해석
if(isTestDataListed):
  # Tokenization 및 Padding
  new_sequences = tokenizer.texts_to_sequences(new_list)  # [ ] 를 제거했습니다.
  new_padded_sequences = pad_sequences(new_sequences, padding="post", maxlen=X.shape[1])

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

  # 예측 - Prediction
  prediction = model.predict(new_padded_sequence)

  predicted_category_index = np.argmax(prediction)
  predicted_category_prob = np.max(prediction) 
  ia = [0 for _ in range(5)]
  ia[predicted_category_index] = 1
  
  print("문제 :", new_question)
  print(">> 인덱스 :", predicted_category_index, "  /  ", ia) 
  print(">> 확률 :", predicted_category_prob)