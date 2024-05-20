function openNav() {
    document.getElementById("mySidepanel").style.width = "calc(125px + (250 - 125) * ((100vw - 500px) / (1920 - 500)))";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}
