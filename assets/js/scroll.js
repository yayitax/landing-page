var topButton = document.getElementsByClassName("scroll-to-top")[0];
window.onscroll = function() {
  scrollFunction()
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}