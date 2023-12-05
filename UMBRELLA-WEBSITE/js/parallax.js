let city_behind = document.getElementById('city_behind');
let hometext = document.getElementById('hometext');
let btn = document.getElementById('btn');
let zombies_front = document.getElementById('zombies_front');

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  city_behind.style.top = value * 0 + 'px';
  zombies_front.style.top = value * 0.1 + 'px';
  hometext.style.marginRight = value * 0.2 + 'px';
  btn.style.marginTop = value * 0.4 + 'px';
  btn.style.marginLeft = value * 0.1 + 'px';
})