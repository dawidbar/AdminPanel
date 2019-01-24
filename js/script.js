document.querySelector('.navbutton').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu()
});

function toggleMenu(visible) {
  $('.sidebar').addClass('jsss').removeClass('sidebar');
}
