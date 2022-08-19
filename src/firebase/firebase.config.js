import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCm0INX_erHc_TZHkfqHXKJjRmCoGV9-sk",
  authDomain: "photo-tagging-app-fb44e.firebaseapp.com",
  projectId: "photo-tagging-app-fb44e",
  storageBucket: "photo-tagging-app-fb44e.appspot.com",
  messagingSenderId: "694453493042",
  appId: "1:694453493042:web:e7dc54272743fc368dcb2b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
