/*
function createHeader(){
    const header = document.createElement('header');   
    const nav = createNav();
    header.appendChild(nav);
    return header;
}

function createBtn(id,text){
    const btn = document.createElement('button');
    btn.setAttribute('id',id);
    btn.classList.add('btn');
    btn.textContent = text;
    return btn;
}

function createNav(){
    const nav = document.createElement('nav');

    const homeBtn = createBtn('home', 'Home');
    const menuBtn = createBtn('menu', 'Menu');
    const contactBtn =  createBtn('contact','Contact');

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    return nav
}

function createLink(textLogo){
    const socialLink = document.createElement('a');
    socialLink.setAttribute('href','#');
    socialLink.classList.add('social-link');

    const ioniconLogo = document.createElement('ion-icon');
    ioniconLogo.setAttribute('name', textLogo);
    socialLink.appendChild(ioniconLogo);

    return socialLink;
}

function createSocialContent(){
    const socialContent = document.createElement('div');
    socialContent.classList.add('socials-content');

    const socialTwitter = createLink('logo-twitter');
    const socialInstagram = createLink('logo-instagram');
    const socialLinkedin = createLink('logo-linkedin');

    return socialContent;
}

function createFooter(){
    const footer = document.createElement('footer');
   
    const footerLine = document.createElement('hr');
    footerLine.classList.add('footer-line');
    footer.appendChild(footerLine);

    const socialContent = createSocialContent();
    footer.appendChild(socialContent);

    return footer;

}

function loadPage(){
    const body = document.body;

    //header
    const header = createHeader();
    body.appendChild(header);
    
    //footer
    const footer = createFooter();
    body.appendChild(footer);

}

export default loadPage;
*/

