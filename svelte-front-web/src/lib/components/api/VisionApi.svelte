<script>
  import { functions, httpsCallable } from "$lib/firebase/app.js";
  import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
  } from "firebase/storage";

  let files;
  const annotateImage = httpsCallable(functions, "annotateImage");

  function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }

  async function handleImageUpload() {
    if (files && files.length > 0) {
      try {
        const file = files[0]; // 첫 번째 파일 선택

        // Firebase Storage에 업로드
        const storage = getStorage();
        const storageRef = ref(storage, "images/" + file.name);
        await uploadBytes(storageRef, file);

        // 다운로드 URL을 얻습니다.
        const downloadURL = await getDownloadURL(storageRef);

        // Cloud Function 호출
        const result = await annotateImage({ image_url: downloadURL });
        console.log("Labels:", result.data);
      } catch (error) {
        console.error("Failed to upload image:", error);
      }
    } else {
      console.warn("No file selected");
    }
  }
</script>

<input type="file" bind:files accept="image/*" />
<button on:click={handleImageUpload}>Upload Image</button>
