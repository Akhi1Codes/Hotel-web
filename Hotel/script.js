var btns = document.querySelectorAll("a");
btns.forEach( id => {
    id.addEventListener("click", () => {
        var selected = document.getElementsByClassName("active");
        selected[0].className = selected[0].className.replace("active", "");
        id.className += " active";
    });
});