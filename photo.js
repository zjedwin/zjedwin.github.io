function createImage(src) {
  const image = document.createElement('img');
  image.src = src;
  return image;
}

function onModalClick() {
  document.body.classList.remove('no-scroll');
  modalView.classList.add('hidden');
  modalView.innerHTML = '';
  document.removeEventListener("keyup", onKeyUp);
}

function onKeyUp(ev){
  if (ev.key === "Escape") {
    onModalClick();
  } else if (ev.key === "ArrowRight" || ev.key === "ArrowLeft") {
    const img = document.querySelector("#modal-view img");
    const imgIx  = PHOTO_LIST.indexOf(img.getAttribute("src"));
    
    if(imgIx === -1)
      return;

    if(ev.key === "ArrowRight"){
      if(imgIx < PHOTO_LIST.length - 1)
        img.src = PHOTO_LIST[imgIx + 1];
    } else {
      if(imgIx > 0)
        img.src = PHOTO_LIST[imgIx - 1];
    }
  }
}

function onThumbnailClick(event) {
  const image = createImage(event.currentTarget.getAttribute("src"));
  document.body.classList.add('no-scroll');
  modalView.style.top = window.pageYOffset + 'px';
  modalView.appendChild(image);
  modalView.classList.remove('hidden');
  document.addEventListener("keyup", onKeyUp);
}

// Main

const albumView = document.querySelector('#album-view');
for(const photoSrc of PHOTO_LIST){
  const image = createImage(photoSrc);
  image.addEventListener('click', onThumbnailClick);
  albumView.appendChild(image);
}

const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);
