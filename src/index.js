import { initializeApp } from "firebase/app";
import {
  getFirestore,
  query,
  onSnapshot,
  orderBy,
  collection,
  where,
  getDocs,
  getDoc,
  snapshotEqual,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-KlGrKnX-AgJrXJ4GL-7L_Qku5JiJcI0",
  authDomain: "living-well-through-music.firebaseapp.com",
  projectId: "living-well-through-music",
  storageBucket: "living-well-through-music.appspot.com",
  messagingSenderId: "17279163269",
  appId: "1:17279163269:web:c6d75e0369111bf5af02ec",
};

//---------- initialize firebase App ---------------
initializeApp(firebaseConfig);

//------------ initialize services --------------
const db = getFirestore();
// const authRef = getAuth();

//-------------- initialize collection -------------
const colRef = collection(db, "Users Information");

//--------------- queries ------------
// const q = query(colRef,
//     orderBy("createdAt", "asc")
//     );

//------------- get collection data -------------

// getDocs(colRef)
//   .then((snapshot) => {
//     let users = [];
//     snapshot.docs.forEach((doc) => {
//       users.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(users);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
onSnapshot(colRef, (snapshot) => {
  let users = [];
  snapshot.docs.forEach((doc) => {
    users.push({ ...doc.data(), id: doc.id });
  });
  console.log(users);
});

//--------------- adding documents -------------

const addUser = document.querySelector(".add");
addUser.addEventListener("submit", (e) => {
  e.preventDefault();

  addDoc(colRef, {
    firstName: addUser.firstName.value,
    secondName: addUser.lastName.value,
    email: addUser.email.value,
    mobile: addUser.mobile.value,
    message: addUser.message.value,
    createdAt: serverTimestamp(),
  })
    .then(() => {
      addUser.reset();
    })
    .catch((err) => {
      console.log(err.message);
    });
});
