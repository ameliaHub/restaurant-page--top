

function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu-container');

    const title = createTitle();
    menu.appendChild(title);
    

    const platesContainer = document.createElement('div');
    platesContainer.classList.add('all-plates-container');
    
    const mainCourse = createPlateKind("Main Course", 
        "Super Delicious Zuppa", "$40", "Chicken + Rice + Sausage + Spinach",
        "Bacon Coli Baked Australian Beef", "$40", "Chiken + Rice + Sausage + Spinach"
    );

    const soupsSalad = createPlateKind("Soups & salads", 
        "Salat Banana Flower", "$40", "Chicken + Rice + Sausage + Spinach",
        "Gourmet Mushroom Risotto", "$40", "Chiken + Rice + Sausage + Spinach"
    );

    const desserts = createPlateKind("Desserts", 
        "Ice Cream Tarte Apple", "$40", "Chicken + Rice + Sausage + Spinach",
        "Fruit Mile Feuile", "$40", "Chiken + Rice + Sausage + Spinach"
    );

    const drinks = createPlateKind("Drinks", 
        "Double Chocolate Mud Pie", "$40", "Chicken + Rice + Sausage + Spinach",
        "Panmacotte Cream Cake", "$40", "Chiken + Rice + Sausage + Spinach"
    );

    platesContainer.appendChild(mainCourse);
    platesContainer.appendChild(soupsSalad);
    platesContainer.appendChild(desserts);
    platesContainer.appendChild(drinks);

    menu.appendChild(platesContainer);

    

    return menu;

}

function createTitle(){
    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    const menuTitle = document.createElement('p');
    menuTitle.classList.add('menu-title');
    menuTitle.innerHTML = "Discover";

    const titleBig = document.createElement('p');
    titleBig.classList.add('title');
    titleBig.innerHTML = "Our Food Menu";

    textContainer.appendChild(menuTitle);
    textContainer.appendChild(titleBig);

    return textContainer
}

function createPlateKind(kindTitleText, plateName1, platePrice1, plateIngredients1, plateName2, platePrice2, plateIngredients2){
    const plateKind = document.createElement('div');
    plateKind.classList.add('plate-kind');

    const kindTitle = document.createElement('p');
    kindTitle.classList.add('menu-title');
    kindTitle.innerHTML = kindTitleText;

    const platesContainer = document.createElement('div');
    platesContainer.classList.add('plates-container');

    const plate1 = createPlate(plateName1, platePrice1, plateIngredients1);

    const plate2 = createPlate(plateName2, platePrice2, plateIngredients2);

    platesContainer.appendChild(plate1);
    platesContainer.appendChild(plate2);

    plateKind.appendChild(kindTitle);
    plateKind.appendChild(platesContainer);

    return plateKind;
}

function createPlate(plateNameText, platePriceText, ingredientsText){
    const plate = document.createElement('div');
    plate.classList.add('plate');

    const namePriceContainer = document.createElement('div');
    namePriceContainer.classList.add('name-price-container');

    const plateName = document.createElement('p');
    plateName.classList.add('plate-name');
    plateName.innerHTML = plateNameText;

    const hr = document.createElement('hr');

    const platePrice = document.createElement('p');
    platePrice.classList.add('plate-name');
    platePrice.innerHTML = platePriceText;

    namePriceContainer.appendChild(plateName);
    namePriceContainer.appendChild(hr);
    namePriceContainer.appendChild(platePrice);

    const plateIngredients = document.createElement('p');
    plateIngredients.classList.add('plate-ingredients');
    plateIngredients.innerHTML = ingredientsText;

    plate.appendChild(namePriceContainer);
    plate.appendChild(plateIngredients);

    return plate;
}

function loadMenu(){
    const content = document.getElementById('content');

    content.textContent = "";

    const menu = createMenu();

    content.appendChild(menu);
}

export default loadMenu;