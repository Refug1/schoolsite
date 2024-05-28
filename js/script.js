function openNav() {
    document.getElementById("mySidepanel").style.width = "calc(140px + (280 - 140) * ((100vw - 500px) / (1920 - 500)))";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}
