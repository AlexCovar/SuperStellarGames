dragElement(document.getElementById("weapons"));
let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
function dragElement(elmnt) {
  if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
      }
else {
   elmnt.onmousedown = dragMouseDown; 
}

function dragMouseDown(e) {
  e = e || window.event;
  e.preventDefault();
  pos3 = e.clientX;
  pos4 = e.clientY;
  document.onmouseup = closeDragElement;
  document.onmousemove = elementDrag;
}
  
function elementDrag(e) {
  e = e || window.event;
  e.preventDefault();
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  elmnt.style.top = (pos2 - elmnt.offsetLeft) + "px";
  elmnt.style.left = (pos1 - elmnt.offsetLeft) + "px";
}
  function closeDragElement() {
   document.onmouseup = null;
    document.onmousemove = null;
  }
}


