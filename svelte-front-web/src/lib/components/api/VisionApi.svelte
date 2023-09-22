<script>
  import { functions, httpsCallable } from "$lib/firebase/app.js";
  import {
    getStorage,
    ref,
    uploadBytes,
  } from "firebase/storage";
  import { refineText } from "$lib/components/api/refineText.js"
  import { userStore } from "$lib/store.js";

  let isUserLogin = false;
  export let files;
  export let isUploadSucceed = false;
  export let isExtractSucceed = false;
  export let textLog = "";
  export let isBusy = false;
  export let preFunction;
  
  userStore.subscribe(v => {
    isUserLogin = v? true : false;
  });

  // Firebase 함수 설정
  const annotateImage = httpsCallable(functions, "annotateImage");

  async function handleImageUpload() {
    isBusy = true;
    if (isUserLogin) {
      // 로그인 확인
      if (files && files.length > 0) {
        try {
          const file = files[0];
          const storage = getStorage();
          const storageRef = ref(storage, "images/" + file.name);
          isUploadSucceed = true;
          await uploadBytes(storageRef, file);

          const result = await annotateImage({
            image_url: "images/" + file.name,
          });
          textLog = refineText(result.data.result);
          await preFunction();
          isExtractSucceed = true;
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
</script>

<input
  id="fileInput"
  type="file"
  bind:files
  accept="image/*"
  style="display:none;"
  on:change={handleImageUpload}
/>
