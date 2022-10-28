const choosePicture = (e) => {
  const photoList = document.querySelectorAll(".main__photo-item");
  photoList.forEach((e) => {
    e.classList.remove("chosePreview");
  });
  const chose = document.getElementById(e.target.id);
  const imgArray = getPhotoList().filter((e) => {
    return e.id == chose.id;
  });
  const imgChose = imgArray[0].img;
  imgChose && chose.classList.add("chosePreview");
  document.querySelector(".chose__wrap").style.backgroundImage =
    `url(${imgChose})`;
};
