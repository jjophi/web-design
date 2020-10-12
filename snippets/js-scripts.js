/*header animation*/
window.onscroll = function() {scrollFunction()};
let topNav = document.querySelector('.site-brand');
function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    topNav.classList.add('shrink');
  } else {
    topNav.classList.remove('shrink');
  }
}