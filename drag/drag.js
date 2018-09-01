function stopDrag(ev){
  ev.target.addEventListener("pointerup", ev => {
    ev.target.removeEventListener("pointermove", stopDrag);
  });

  x_stop = ev.clientX;
  y_stop = ev.clientY;
  ev.target.style.transform = `translate(${x_stop - x_start}px, ${y_stop - y_start}px)`;
}

function startDrag(ev){
  ev.preventDefault();
  ev.target.setPointerCapture(ev.pointerId);

  x_start = ev.clientX;
  y_start = ev.clientY;
  ev.target.addEventListener("pointermove", stopDrag);
}

let x_start, y_start, x_end, y_end;
const box = document.querySelector(".box");
box.addEventListener("pointerdown", startDrag);
