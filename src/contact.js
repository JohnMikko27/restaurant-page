export const createContact = () => {
    const div = document.createElement('div');
    const link = document.createElement('a');
    link.textContent = 'Contact';
    link.href = 'https://www.jollibeefoods.com/';
    div.appendChild(link);
    return div;
}