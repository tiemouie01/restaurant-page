export default function contactPage() {
    const mainDiv = document.querySelector('.main');
    const contacts = [];

    contacts.push(createContact('Timothy Miamba','timal0361@gmail.com','+265997288584'));
    contacts.push(createContact('Faith Miamba','faimiamba@gmail.com','+265994256283'));
    contacts.push(createContact('Paul Miamba','pmiamba@gmail.com','+265993964145'));
    contacts.push(createContact('Milley Miamba','milleymiamba@gmail.com','+265999258360'));

    for (let i = 0; i < contacts.length; i++) {
        mainDiv.appendChild(contacts[i]);
    }
}

function createContact(name, email, number) {
    const contactCard = document.createElement('div');
    contactCard.classList.add('contact');

    const contactName = document.createElement('div');
    contactName.classList.add('name');
    contactName.textContent = name;

    const contactEmail = document.createElement('div');
    contactEmail.classList.add('email');
    contactEmail.textContent = email;

    const contactNumber = document.createElement('div');
    contactNumber.classList.add('number');
    contactNumber.textContent = number;

    contactCard.appendChild(contactName);
    contactCard.appendChild(contactEmail);
    contactCard.appendChild(contactNumber);

    return contactCard;
}