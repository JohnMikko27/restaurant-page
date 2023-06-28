import './styles.css';
import food from './download.jpeg';

export const loadIn = () => {
    const body = document.querySelector('body');

    //create a header
    //with a div that has text content of "THE MASTER OF DISASTER'S FOOD"

    const header = document.createElement('header');
    const topMessage = document.createElement('div');

    topMessage.textContent = "THE MASTER OF DISASTER'S FOOD";
    header.appendChild(topMessage);

    //create a nav element
    //has 3 children divs
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

    //#content div
    //has an about message on the left
    //and an image on the right

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