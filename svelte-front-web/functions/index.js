const functions = require("firebase-functions");
const { Storage } = require("@google-cloud/storage");
const vision = require('@google-cloud/vision');

const storage = new Storage();
const client = new vision.ImageAnnotatorClient();

exports.annotateImage = functions.https.onCall(async (data, context) => {
  if (context.auth) {
    const imageUrl = data.image_url;

    if (!imageUrl || typeof imageUrl !== 'string') {
      throw new functions.https.HttpsError("invalid-argument", "The function must be called with one argument 'imageUrl' containing the file path.");
    }

    const bucket = storage.bucket("gs://active-module-397909.appspot.com");
    const file = bucket.file(imageUrl);

    const [fileContents] = await file.download();

    // Text Detection
    const [result] = await client.textDetection(fileContents);
    const detections = result.textAnnotations;
    return { result: detections[0] ? detections[0].description : 'No text found' };
  } else {
    throw new functions.https.HttpsError("unauthenticated", "The function must be called while authenticated.");
  }
});