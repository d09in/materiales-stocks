import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

async function obtenerDatos() {
  const querySnapshot = await getDocs(collection(db, "materiales_laboratorio"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });
}

obtenerDatos();