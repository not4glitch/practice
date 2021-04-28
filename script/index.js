"use strict";
/*Tabs*/
function openTab(evt, tabName) {
  let tabcontent = document.getElementsByClassName("tabcontent");
  let tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
/*Hamburger menu*/
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");
const navBtn = document.querySelectorAll(".nav-btn");
openMenu.addEventListener("click", function () {
  mobileMenu.classList.remove("unactive");
  closeMenu.style.display = "block";
});
closeMenu.addEventListener("click", function () {
  mobileMenu.classList.add("unactive");
  closeMenu.style.display = "none";
});
navBtn.forEach(function (menuLink) {
  menuLink.addEventListener("click", function () {
    mobileMenu.classList.add("unactive");
  });
});
/* partner carousele*/
let i = 1;
for (let li of partnerCarousel.querySelectorAll("li")) {
  li.style.position = "relative";
}

const width = 100;
const count = 6;

const list = partnerCarousel.querySelector("ul");
const listElems = partnerCarousel.querySelectorAll("li");

let position = 0;

partnerCarousel.querySelector(".prev").onclick = function () {
  position += width;
  position = Math.min(position, 0);
  list.style.marginLeft = position + "px";
};

partnerCarousel.querySelector(".next").onclick = function () {
  position -= width;
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + "px";
};
/*clients carousele*/
let iter = 1;
for (let li of clientsCarousel.querySelectorAll(".client-card")) {
  li.style.position = "relative";
}

const widthClient = 300;
const countClient = 3;

const listClient = clientsCarousel.querySelector(".clients-cards");
const listElemsClient = clientsCarousel.querySelectorAll(".client-card");

let positionClients = 0;

clientsCarousel.querySelector(".prev-client").onclick = function () {
  positionClients += widthClient;
  positionClients = Math.min(positionClients, 0);
  listClient.style.marginLeft = positionClients + "px";
};

clientsCarousel.querySelector(".next-client").onclick = function () {
  positionClients -= widthClient;
  positionClients = Math.max(
    positionClients,
    -widthClient * (listElemsClient.length - countClient)
  );
  listClient.style.marginLeft = positionClients + "px";
};
