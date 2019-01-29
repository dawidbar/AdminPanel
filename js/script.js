document.querySelector('.navbutton').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu()
});

function toggleMenu(visible) {
  $('.sidebar').addClass('jsss').removeClass('sidebar');
}

var check = function() {
  if (document.getElementById('password').value ==
    document.getElementById('retype').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'not matching';
    }
  }