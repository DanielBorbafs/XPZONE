/* .card-nav{
    position: absolute;
    top: 0;
    right: 0;
    background: black;
    width: 626px;
    height: 950px;
}

.chama-navbar {
    font-size: 34px;
}
*/

const btnNav = document.querySelector('.chama-navbar')
const sidebar = document.querySelector('.card-nav')
const btnClose = document.getElementById('close-card')


btnNav.addEventListener('click', () => {
    if(sidebar.style.display === 'none' || sidebar.style.display === '') {
        sidebar.style.display = 'block';
        sidebar.classList.remove('leave');
        sidebar.classList.add('enter');
        sidebar.classList.add('visible');
    } else {
        sidebar.style.display = 'none';
        sidebar.classList.remove('enter');
        sidebar.classList.add('leave');
        sidebar.classList.remove('visible');
    }
});

btnClose.addEventListener('click', () => {
    sidebar.style.display = 'none';
    sidebar.classList.remove('enter');
    sidebar.classList.add('leave');
    sidebar.classList.remove('visible');
});