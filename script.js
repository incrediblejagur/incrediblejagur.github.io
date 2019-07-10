var coverBtn = document.getElementById('cover-btn');
var coverEle = document.getElementById('cover-elem');
var portflio = document.getElementById('portfolio');
function pagetabs(evt, Names) {
  var i, tabcontent, tablinks;
 
 
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
}

document.getElementById(Names).style.display = "block";
evt.currentTarget.className += " active";
}

coverBtn.addEventListener('click', function(){
    coverEle.classList.add('hide')
    portflio.classList.remove('hide')
    portflio.classList.add('show')
})