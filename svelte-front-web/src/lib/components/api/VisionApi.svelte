<script>
  import { functions, httpsCallable } from "$lib/firebase/app.js";
  import {
    getStorage,
    ref,
    uploadBytes,
  } from "firebase/storage";
  import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
  } from "firebase/auth";
  import { refineText } from "$lib/components/api/refineText.js"

  let user = null;
  export let files;
  export let isUploadSucceed = false;
  export let isExtractSucceed = false;
  export let textLog = "";
  export let isBusy = false;
  export let preFunction;

  // Firebase 함수 설정
  const annotateImage = httpsCallable(functions, "annotateImage");

  // Firebase 인증 상태 확인
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  onAuthStateChanged(auth, (currentUser) => {
    user = currentUser;
  });

  async function handleGoogleLogin() {
    isBusy = true;
    try {
      const result = await signInWithPopup(auth, provider);
      user = result.user;
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
    isBusy = false;
  }

  async function handleImageUpload() {
    isBusy = true;
    if (user) {
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
      handleGoogleLogin();
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
