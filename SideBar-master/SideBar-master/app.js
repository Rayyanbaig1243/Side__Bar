const openBtn = document.querySelector(".open-btn");
const ul = document.querySelector('.list');
const main = document.getElementById('main')
const closeBtn = document.querySelector(".close-btn");
openBtn.addEventListener("click", () => {
    ul.classList.toggle('show-item')
    openBtn.style.display = 'none';
});
closeBtn.addEventListener('click', () => {
    ul.classList.remove('show-item');
    openBtn.style.display = "block";
})