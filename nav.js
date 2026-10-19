// Toggle the Work dropdown on tap (touch devices have no hover).
(function(){
  var wrap=document.querySelector('.has-menu');
  if(!wrap) return;
  var btn=wrap.querySelector('.menu-toggle');
  btn.addEventListener('click',function(e){
    e.stopPropagation();
    var open=wrap.classList.toggle('open');
    btn.setAttribute('aria-expanded',open);
  });
  document.addEventListener('click',function(){
    wrap.classList.remove('open');
    btn.setAttribute('aria-expanded','false');
  });
})();
