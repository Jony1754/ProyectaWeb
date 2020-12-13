let hamburguer = document.getElementsByClassName("hamb_menu");
let close = document.getElementById("goback");
let pageContent = document.querySelectorAll("header, main, footer");
console.log(pageContent);
hamburguer[0].onclick = function (event) {
  openNav();
};

close.onclick = (event) => {
  closeNav();
};

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  pageContent[0].style.visibility = "hidden";
  pageContent[1].style.visibility = "hidden";
    pageContent[2].style.visibility = "hidden";
}

function closeNav() { 
  document.getElementById("mySidenav").style.width = "0";
  pageContent[0].style.visibility = "";
  pageContent[1].style.visibility = "";
  pageContent[2].style.visibility = "";
}