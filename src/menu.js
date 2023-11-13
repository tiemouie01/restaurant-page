export default function menuPage() {
    const mainDiv = document.getElementsByClassName('main');
    const menuDivs = [];

    for (let i = 0; i < 4; i++) {
        const menuDiv = document.createElement('div');
        menuDiv.classList.add('menu');
        menuDivs.push(menuDiv);
    }

    grilledChickenSalad(menuDivs[0]);
    margheritaPizza(menuDivs[1]);
    beefBurger(menuDivs[2]);
    penneAllaVodka(menuDivs[3]);
 
    for (let i = 0; i < 4; i++) {
        mainDiv.appendChild(menuDivs[i]);
    }
}

function grilledChickenSalad(menuDiv) {
    const heading = "Grilled Chicken Salad";
    const content = "A bed of fresh greens topped with grilled chicken, cherry tomatoes, and croutons. Served with your choice of dressing.";
    const price = "$12.99";

    createMenuCard(menuDiv, heading, content, price);
}

function margheritaPizza(menuDiv) {
    const heading = "Margherita Pizza";
    const content = "A classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil.";
    const price = "$14.99";

    createMenuCard(menuDiv,heading,content,price);
}

function beefBurger(menuDiv) {
    const heading = "Beef Burger";
    const content = "A juicy beef patty topped with cheddar cheese, lettuce, tomato, and onion. Served with a side of fries.";
    const price = "$14.99";

    createMenuCard(menuDiv,heading, content, price);
}

function penneAllaVodka(menuDiv) {
    const heading = "Penne alla Vodka";
    const content = "Penne pasta tossed in a creamy tomato sauce with a splash of vodka";
    const price = "$13.99";

    createMenuCard(menuDiv,heading,content,price);
}

function createMenuCard(menuDiv, heading, content, price) {
    const headingElement = document.createElement('h2');
    const contentElement = document.createElement('p');
    const priceDiv = document.createElement('div');

    headingElement.textContent = heading;
    contentElement.textContent = content;
    priceDiv.textContent = price;
    
    menuDiv.appendChild(headingElement);
    menuDiv.appendChild(contentElement);
    menuDiv.appendChild(priceDiv);
}