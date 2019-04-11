function pagetabs(Names) {
  var i, tabcontent, tablinks;
 
 
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  document.getElementById(Names).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("About").click();
