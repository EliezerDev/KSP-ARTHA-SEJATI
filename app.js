// hero images change background img
const headerHero = document.querySelector('header');
const imgList = ['bg1', 'bg2', 'bg3'];
let selectImg = 0;
setInterval(() => {
  selectImg >= imgList.length ? selectImg = 0 : selectImg;
  headerHero.style.backgroundImage = `url(./img/${imgList[selectImg]}.jpg)`;
  selectImg++
}, 1000 * 10);

// scroll to up
window.addEventListener('scroll', () => {
  if (window.scrollY >= document.getElementById('tentang').scrollHeight) {
    document.querySelector('.scroll-to-up').classList.add('show-btn');
  } else {
    document.querySelector('.scroll-to-up').classList.remove('show-btn');
  }
});