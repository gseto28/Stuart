const API_URL = "https://your-api.com/login";

document
.getElementById("loginForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    const message =
        document.getElementById("message");

    message.innerText = "";

    try{

        const response = await fetch(API_URL,{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                username,
                password
            })

        });

        const data = await response.json();

        if(data.success){

            localStorage.setItem("token",data.token);

            localStorage.setItem(
                "username",
                username
            );

            window.location.href="dashboard.html";

        }else{

            message.innerText =
                "Invalid username or password.";

        }

    }catch(err){

        console.error(err);

        message.innerText =
            "Unable to connect to the server.";

    }

});