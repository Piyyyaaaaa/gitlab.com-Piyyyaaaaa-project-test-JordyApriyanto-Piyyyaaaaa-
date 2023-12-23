var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("wrapper").classList.remove('show');
  }
  else { document.getElementById("wrapper").classList.add('show');
  }
  prevScrollpos = currentScrollPos;
}