import './style.css';
import homePage from './home.js';
import menuPage from './menu.js';

function createTabs() {
    const contentDiv = document.getElementById('content');
    const tabDiv = document.createElement('div');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    tabDiv.classList.add('tabs');
    homeBtn.classList.add('home');
    menuBtn.classList.add('menu');
    contactBtn.classList.add('contact');

    homeBtn.textContent = 'HOME';
    menuBtn.textContent = 'MENU';
    contactBtn.textContent = 'CONTACTS';

    contentDiv.appendChild(tabDiv);
    tabDiv.appendChild(homeBtn);
    tabDiv.appendChild(menuBtn);
    tabDiv.appendChild(contactBtn);
}

function createMainDiv() {
    const contentDiv = document.getElementById('content');
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main');
    contentDiv.appendChild(mainDiv);
}

createTabs();
createMainDiv();
// homePage();
menuPage();