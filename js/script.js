document.querySelector('.navbutton').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu()
});

function toggleMenu() {
  $('.sidebar').toggleClass('jsss');
}

var check = function () {
  if (document.getElementById('password').value ==
    document.getElementById('retype').value) {
      document.getElementById('retype').classList.add('good');
      document.getElementById('.retype').classList.remove('wrong')
  } else {
    document.getElementById('retype').classList.add('wrong');
    document.getElementById('retype').classList.remove('good');
  }
}