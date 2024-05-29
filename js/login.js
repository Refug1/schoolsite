/* old
window.addEventListener('load', () => {
    if(accessLvl === true){
        document.getElementById("loginId").style.visibility = "hidden";
        alert("Я скрыл кнопку входа");
    } else {
        alert("Пока без авторизации")
    }
  });
*/
function sendform() {
    let login = document.getElementById('login');
    let password = document.getElementById('password');
    if (login.value == "123" && password.value == "123") {
        alert("Авторизация пользователя")
        window.location.href = './main.html';
    } else if (login.value == "admin" && password.value == "admin") {
        alert("Авторизация администратором");
        window.location.href = './bp/index.html';
    } else {
        alert("Неверный логин или пароль");
        return false;
    }
}
