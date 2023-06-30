export const createAbout = () => {
    const div = document.createElement('div');
    const link = document.createElement('a');
    link.textContent = 'About';
    link.href = 'https://www.jollibeefoods.com/';
    div.appendChild(link);
    return div;
}