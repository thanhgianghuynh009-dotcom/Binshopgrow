import { auth } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// =================
// ĐĂNG KÝ
// =================

const registerBtn = document.getElementById("registerBtn");

if(registerBtn){

registerBtn.onclick = () => {

let email = document.getElementById("registerEmail").value;
let password = document.getElementById("registerPassword").value;
let password2 = document.getElementById("registerPassword2").value;


if(password !== password2){

alert("Mật khẩu nhập lại không đúng!");
return;

}


createUserWithEmailAndPassword(auth,email,password)

.then(()=>{

alert("Đăng ký thành công!");

window.location.href="login.html";

})

.catch(error=>{

alert(error.message);

});


};


}




// =================
// ĐĂNG NHẬP
// =================


const loginBtn = document.getElementById("loginBtn");


if(loginBtn){

loginBtn.onclick = () => {


let email = document.getElementById("loginEmail").value;

let password = document.getElementById("loginPassword").value;



signInWithEmailAndPassword(auth,email,password)


.then(()=>{


// Lưu trạng thái đăng nhập

localStorage.setItem("login","true");

localStorage.setItem("email",email);



alert("Đăng nhập thành công!");

window.location.href="index.html";


})


.catch(error=>{

alert(error.message);

});


};


}
