import './styles.css';
import food from './download.jpeg';
import { createHome } from './home';
import { createContact } from './contact';
import { createAbout } from './about';

export const loadIn = () => {
    const body = document.querySelector('body');

    const header = document.createElement('header');
    const topMessage = document.createElement('div');

    topMessage.textContent = "THE MASTER OF DISASTER'S FOOD";
    header.appendChild(topMessage);

    const nav = document.createElement('nav');
    const div = createHome();
    const div2 = createAbout();
    const div3 = createContact();

    
    nav.appendChild(div);
    nav.appendChild(div2);
    nav.appendChild(div3);

    const content = document.querySelector('#content');
    const aboutMessage = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');

    
    aboutMessage.textContent = "This is one of The Master of Disaster's favorite foods! Rejoice and be glad as you now know!";
    img.src = food;

    imgContainer.appendChild(img);
    content.appendChild(aboutMessage);
    content.appendChild(imgContainer);

    body.appendChild(header);
    body.appendChild(nav);
    body.appendChild(content);

}