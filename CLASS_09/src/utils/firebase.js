import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCuhY47N4wKd3CkgzgdWcni_Zp_8itq1V4",
  authDomain: "product-catalogue-b229a.firebaseapp.com",
  projectId: "product-catalogue-b229a",
  storageBucket: "product-catalogue-b229a.firebasestorage.app",
  messagingSenderId: "317554818945",
  appId: "1:317554818945:web:c2aec759ed698ff4367280"
};


export const app = initializeApp(firebaseConfig);

export const auth = getAuth();