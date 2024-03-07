  import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyD0hSErBsZC1JN5K9ibt--SoHCew5isxDg",
  authDomain: "bitecycle-538c4.firebaseapp.com",
  projectId: "bitecycle-538c4",
  storageBucket: "bitecycle-538c4.appspot.com",
  messagingSenderId: "1024459802648",
  appId: "1:1024459802648:web:124297689d69c50b3bdb6d",
  measurementId: "G-SBTTH9L3LM"
};
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);