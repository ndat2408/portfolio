var contentArray = ["Coder", "Designer", "Student", "Web Developer"]
var i=0

var interval = setInterval(function(){
    document.getElementById("txt").innerText = contentArray[i]
    i++
    if (i>=contentArray.length) i=0;
},2000)


// scroll ef
window.onscroll = function(){
    sticky = document.querySelector(".header").offsetTop
    if (window.pageYOffset > sticky) {
        document.querySelector(".header").classList.add("sticky");
    } else {
        document.querySelector(".header").classList.remove("sticky");
    }
}


// menubtn
document.getElementById("menu").onclick = function(){
    document.querySelector("#navbar ul").style.left = 0;
}

document.querySelector("#navbar ul li:first-child").onclick = function(){
    document.querySelector("#navbar ul").style.left = -100 + "%"
}
