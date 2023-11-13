export default function homePage() {
    const mainDiv = document.getElementsByClassName('main');
    const heading = document.createElement('h1');
    const paragraph = document.createElement('p');

    heading.textContent = "JOSE'S SPECIAL TREATS";
    paragraph.textContent = "This restaurant is special for its stellar dishes and word class deserts. The line up of exquisite daily specials perfected by the great chef Joseph Miamba. The iconic work of this great chef will live amongst us for eternity.";

    mainDiv.appendChild(heading);
    mainDiv.appendChild(paragraph);
}