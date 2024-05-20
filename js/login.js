function sendform() {
    let login = document.getElementById('login');
    let password = document.getElementById('password');
    if(login.value == "123" && password.value == "123"){
        alert("Авторизация прошла успешно");
        window.location.href = 'index.html';
    }else{
        return false;
    }
}
