console.log("JavaScript is here");

const SideNav_open = document.getElementById("mySidenav");
const SideNav_close = document.getElementById("mySidenav");

console.log('listening');

SideNav_open.addEventListener('click',openNav);
SideNav_close.addEventListener('click',closeNav);

console.log("Operating Navigation Bar")

function openNav() {
    SideNav_open.style.width = "250px";
  }
  
  function closeNav() {
    SideNav_close.style.width = "0";
  }