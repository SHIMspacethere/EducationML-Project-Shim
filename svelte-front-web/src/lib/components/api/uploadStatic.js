import { functions, httpsCallable } from "$lib/firebase/app.js";
  import { getStorage, ref, uploadBytes } from "firebase/storage";
  import { refineText } from "$lib/components/api/refineText.js";
  import { userStore } from "$lib/store.js";

  let isUserLogin = false;
  let isUploadSucceed = false;
  let isExtractSucceed = false;
  let textLog = "";
  let isBusy = false;

  userStore.subscribe((v) => {
    isUserLogin = v ? true : false;
  });

  // Firebase 함수 설정
  const annotateImage = httpsCallable(functions, "annotateImage");

  async function handleStaticUpload(obj, name) {
    isBusy = true;
    if (isUserLogin) {
      console.log(obj);
      if (obj) {
        try {
          const file = obj;
          const storage = getStorage();
          const storageRef = ref(storage, "images/" + name);
          console.log(name);
          isUploadSucceed = true;
          await uploadBytes(storageRef, file);
          const result = await annotateImage({
            image_url: "images/" + name,
          });
          textLog = refineText(result.data.result);
          isExtractSucceed = true;
          return [isUploadSucceed, isExtractSucceed, textLog];
        } catch (error) {
          console.error("Failed to upload image:", error);
        }
      } else {
        console.warn("No file selected");
      }
    } else {
      console.warn("You must be logged in to upload an image.");
    }
    isBusy = false;
  }

  export { handleStaticUpload }