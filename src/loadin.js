import './styles.css';
import food from './download.jpeg';

export const loadIn = () => {
    const body = document.querySelector('body');

    const header = document.createElement('header');
    const topMessage = document.createElement('div');

    topMessage.textContent = "THE MASTER OF DISASTER'S FOOD";
    header.appendChild(topMessage);

    const nav = document.createElement('nav');
    const div = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    div.textContent = 'Home';
    div2.textContent = 'About';
    div3.textContent = 'Contact';
    
    nav.appendChild(div);
    nav.appendChild(div2);
    nav.appendChild(div3);

    const content = document.querySelector('#content');
    const aboutMessage = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');

    
    aboutMessage.textContent = "This is one of The Master of Disaster's favorite foods";
    img.src = food;

    imgContainer.appendChild(img);
    content.appendChild(aboutMessage);
    content.appendChild(imgContainer);

    body.appendChild(header);
    body.appendChild(nav);
    body.appendChild(content);

}