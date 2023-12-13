import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getStorage,ref,uploadBytes,uploadBytesResumable, getDownloadURL  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";


// const firebaseConfig = {
//     apiKey: "AIzaSyCvFB82TeK-CZhpPwLuuj3V5FfXDpsW9B0",
//     authDomain: "sign-up-and-in-7a325.firebaseapp.com",
//     databaseURL: "https://sign-up-and-in-7a325-default-rtdb.firebaseio.com",
//     projectId: "sign-up-and-in-7a325",
//     storageBucket: "sign-up-and-in-7a325.appspot.com",
//     messagingSenderId: "184191318961",
//     appId: "1:184191318961:web:7eb3d6282a90282e34db90",
//     measurementId: "G-SRMHJDFEDM"
//   };


  const app = initializeApp(firebaseConfig);
const storage = getStorage(app);



let btn = document.querySelector('#btn')
btn.addEventListener('click',()=>{
let getfile = document.querySelector('#getFile')

const mountainsRef = ref(storage, `getFile`);
const uploadTask = uploadBytesResumable(storage,Don.jpeg);

uploadTask.on('state_change',(snapshot)=>{



    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    console.log('error'+error)
  }, 
  () => {

    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);


})




