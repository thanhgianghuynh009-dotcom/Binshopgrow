import { auth } from "./firebase.js";
import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
updateProfile,
signOut,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.register = async function(){

const username = document.getElementById("username").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const confirm = document.getElementById("confirm").value;

if(password != confirm){
alert("Mật khẩu không khớp");
return;
}

try{

const user = await createUserWithEmailAndPassword(auth,email,password);

await updateProfile(user.user,{
displayName:username
});

alert("Đăng ký thành công");

location.href="login.html";

}catch(err){

alert(err.message);

}

}

window.login = async function(){

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

try{

await signInWithEmailAndPassword(auth,email,password);

alert("Đăng nhập thành công");

location.href="index.html";

}catch(err){

alert(err.message);

}

}

window.logout = async function(){

await signOut(auth);

location.href="login.html";

}

onAuthStateChanged(auth,(user)=>{

if(user){

console.log(user.email);

}

});
