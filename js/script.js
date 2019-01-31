document.querySelector('.navbutton').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu()
});

function toggleMenu(visible) {
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

function closeModal() {
  document.getElementById('overlay').classList.remove('show')
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault()
    closeModal()
  })
})

document.querySelector('#overlay').addEventListener('click', function (e) {
  if (e.target === this) {
    closeModal()
  }
})

document.addEventListener('keyup', function (e) {
  if (e.keyCode === 27) {
    closeModal()
  }
})

var btnlog = getElementById("btnlogout");

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function (modal) {
    modal.classList.remove('show')
  })
  btnlog.onclick = function() {
    document.querySelector('#overlay').classList.add('show')
    document.querySelector(modal).classList.add('show')
  }
}