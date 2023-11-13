import './style.css';
import homePage from './home.js';

function createTabs() {
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

    document.body.appendChild(tabDiv);
    tabDiv.appendChild(homeBtn);
    tabDiv.appendChild(menuBtn);
    tabDiv.appendChild(contactBtn);
}

createTabs();