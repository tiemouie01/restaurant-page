import './style.css';
import homePage from './home.js';
import menuPage from './menu.js';
import contactPage from './contacts.js';

function createTabs() {
    const contentDiv = document.getElementById('content');

    const tabDiv = document.createElement('div');
    tabDiv.classList.add('tabs');
    
    const homeBtn = document.createElement('button');
    homeBtn.classList.add('home');
    homeBtn.textContent = 'HOME';
    
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'MENU';
    menuBtn.classList.add('menu');
    
    const contactBtn = document.createElement('button');
    contactBtn.classList.add('contact');
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

function removePreviousPage() {
    const contentDiv = document.getElementById('content');
    const oldMainDiv = document.querySelector('.main');
    contentDiv.removeChild(oldMainDiv);
    const newMainDiv = document.createElement('div');
    newMainDiv.classList.add('main');
    contentDiv.appendChild(newMainDiv);
}

function addEvent(page, pageFunction) {
    const tab = document.querySelector(`.tabs .${page}`);
    tab.addEventListener('click', () => {
        removePreviousPage();
        pageFunction();
    });
}

createTabs();
createMainDiv();
addEvent('home',homePage);
addEvent('menu',menuPage);
addEvent('contact',contactPage);