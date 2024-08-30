import "./style.css";

import loadPage from "./header-footer";
import loadHome from "./home";
import loadMenu from "./menu";


console.log("HOLA");

init();

function addEvents(){
    const homeBtn = document.getElementById('home');
    const menuBtn = document.getElementById('menu');

    homeBtn.addEventListener('click', loadHome);
    menuBtn.addEventListener('click', loadMenu);
}

function init(){
    addEvents();
    loadHome();
}

