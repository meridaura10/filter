const renderPhotoList = () => {
  const photoListArray = getPhotoList();
  const photoList = document.querySelector(".main__photo-list");
  photoListArray[0].chosePreview = true
  imgDefault(photoListArray[0].img)
  photoListArray.forEach((obj) => {
    const html = createHtmlPhotoItem(obj);
    photoList.insertAdjacentHTML(`afterbegin`, html);
  });
  photoList.addEventListener("click", choosePicture);
};
const createHtmlPhotoItem = (obj) => {
  return `                   
    <li style="background-image: url('${obj.preview}');" id="${obj.id}" class="main__photo-item ${obj.chosePreview ? 'chosePreview' : ''}"></li>`;
};
const imgDefault = (imgSrc) =>{
    document.querySelector(".chose__wrap").style.backgroundImage =
    `url(${imgSrc})`;
}
renderPhotoList();

