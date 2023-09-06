const functions = require("firebase-functions");
const { Storage } = require("@google-cloud/storage");

const storage = new Storage();

exports.annotateImage = functions.https.onCall(async (data, context) => {
  const imageUrl = data.image_url; // 이 부분에서 Firebase Storage의 파일 경로를 받을 수 있습니다.

  // 예를 들어, imageUrl이 "images/my-image.jpg" 같은 형태로 들어왔다면
  const bucket = storage.bucket("gs://active-module-397909.appspot.com");
  const file = bucket.file(imageUrl);

  // 파일을 읽어들입니다.
  const [fileContents] = await file.download();

  // fileContents에는 파일의 바이트 데이터가 Buffer 형태로 들어있습니다.
  // 이 데이터를 사용해서 원하는 작업을 수행할 수 있습니다.

  return { result: "이미지 처리 결과나 레이블 등" };
});
