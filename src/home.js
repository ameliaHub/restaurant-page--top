import menuImg from "../assets/images/comida-restaurante.jpg"
import loadMenu from "./menu";


function createLeftContent(){
    const leftContent = document.createElement('div');
    leftContent.classList.add('left-content');

    const subtitle = document.createElement('p');
    subtitle.textContent = "Discover your taste";
    leftContent.appendChild(subtitle);

    const title = document.createElement('p');
    title.textContent = "Eat healthy and Natural Food"
    leftContent.appendChild(title);

    const heroButton = createBtn("Discover Menu");
    leftContent.appendChild(heroButton);

    return leftContent;

}

function createRightContent(){
    const rightContent = document.createElement('div');
    rightContent.classList.add('right-content');

    const heroImg = document.createElement('img');
    heroImg.src = menuImg;
    heroImg.classList.add('hero-img');
    rightContent.appendChild(heroImg);

    return rightContent;

}

function createBtn(text){
    const btn = document.createElement('button');
    btn.classList.add('hero-btn');
    btn.textContent = text;

    btn.addEventListener('click', loadMenu);

    return btn;
}

function loadHome(){
    const content = document.getElementById('content');

    content.textContent = "";

    //left-content
    const leftContent = createLeftContent();
    content.appendChild(leftContent);

    //right-content
    const rightContent = createRightContent();
    content.appendChild(rightContent);
}

export default loadHome;

