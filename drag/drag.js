let offsetX = 0, offsetY = 0;
let x_start, y_start, x_end, y_end;
const box = document.querySelector(".box");
box.addEventListener("pointerdown", startDrag);
box.addEventListener("pointerup", ev => {
    ev.target.removeEventListener("pointermove", Dragging);
    offsetX += ev.clientX - x_start;
    offsetY += ev.clientY - y_start;
  });

function Dragging(ev){
/*  ev.target.addEventListener("pointerup", ev => {
    ev.target.removeEventListener("pointermove", Dragging);
    offsetX += ev.clientX - x_start;
    offsetY += ev.clientY - y_start;
  });*/

  x_stop = ev.clientX;
  y_stop = ev.clientY;
  ev.target.style.transform = `translate(${(x_stop - x_start) + offsetX}px, ${(y_stop - y_start) + offsetY}px)`;
}

function startDrag(ev){
  ev.preventDefault();
  ev.target.setPointerCapture(ev.pointerId);

  x_start = ev.clientX;
  y_start = ev.clientY;
  ev.target.addEventListener("pointermove", Dragging);
}

