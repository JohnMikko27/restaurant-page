export const createHome = () => {
    const div = document.createElement('div');
    const link = document.createElement('a');
    link.textContent = 'Home';
    link.href = 'https://www.jollibeefoods.com/';
    div.appendChild(link);
    return div;
}