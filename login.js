//variables globales
let userName = document.querySelector("#username");
let password = document.querySelector("#password");
let btnLogin = document.querySelector(".btn-login");
let x = 3;
//evento al boton del login
btnLogin.addEventListener("click", ()=>{
    if( userName.value == "admin" && password.value == "1234"){
        alert("Bienvenido usuario Administrador");
        location.href = "./dashboard.html";
    }else{
        alert("El usuario y/o contraseña es incorrecto");
        x--;
        alert("tienes "+x+" intentos");
        if(x == 0){
            alert("Has realizado muchos intentos");
            location.href = "./index.html"; 
        }
        
    } 
});



