import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};


const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export async function uploadImagesToFirebase(images) {
  const storage = getStorage();
  const uploadedUrls = [];

  for (const image of images) {
  
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-"); 
    const imageRef = ref(storage, `reviews/${timestamp}-${image.name}`);

    const response = await fetch(image); 
    const blob = await response.blob();

    await uploadBytes(imageRef, blob);
    const downloadUrl = await getDownloadURL(imageRef);

    uploadedUrls.push(downloadUrl);
  }

  return uploadedUrls;
}
