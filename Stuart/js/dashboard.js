const token = localStorage.getItem("token");

if(!token){

    window.location.href="index.html";

}

const username =
localStorage.getItem("username");

document.getElementById("welcome").innerText =
`Welcome ${username}`;

document
.getElementById("logoutBtn")
.addEventListener("click",function(){

    localStorage.removeItem("token");
    localStorage.removeItem("username");

    window.location.href="index.html";

});