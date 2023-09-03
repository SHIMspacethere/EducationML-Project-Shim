import json
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences

file_path = "/content/drive/MyDrive/Colab Notebooks/data/data.json"

with open(file_path, "r") as f:
    data = json.load(f)

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

"""
model = tf.keras.Sequential([
    tf.keras.layers.Embedding(input_dim=100, output_dim=64, input_length=X.shape[1]),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dense(5, activation='softmax')  # category의 크기만큼 출력 노드 설정
])

model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])
print(len(X), len(y))

model.fit(X, y, epochs=10)
model.save('/content/drive/MyDrive/Colab Notebooks/model.h5')
"""

model = load_model('/content/drive/MyDrive/Colab Notebooks/model.h5')

# 새로운 문장
new_question = "그림은 중추 신경계의 구조를 나타낸 것이다. ㉠∼㉤은 대뇌, 간뇌, 중간뇌, 척수, 연수를  순서 없이 나타낸 것이다."

# Tokenization 및 Padding
new_sequence = tokenizer.texts_to_sequences([new_question])
new_padded_sequence = pad_sequences(new_sequence, padding="post", maxlen=X.shape[1])

# 예측
prediction = model.predict(new_padded_sequence)

# 예측 결과를 해석
predicted_category_index = np.argmax(prediction)  # 가장 높은 확률을 가진 카테고리 인덱스
predicted_category_prob = np.max(prediction)  # 가장 높은 확률

print(f"예측된 카테고리 인덱스: {predicted_category_index}, 확률: {predicted_category_prob}")
