let rocket = document.getElementById("scroll-rocket");
rocket.style.visibility = "visible";
window.addEventListener("scroll", event => {
    let percent = window.scrollY/(document.body.clientHeight - window.innerHeight);
    rocket.style.left = percent*100 + "%";
});