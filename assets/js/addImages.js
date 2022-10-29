const addImages = (selector, options) => {
  const input = document.querySelector(selector.input);
  const preview = document.querySelector(selector.preview);
  input.click();
  if (options.multi) {
    input.setAttribute("multiple", true);
  }

  if (options.accept && Array.isArray(options.accept)) {
    input.setAttribute("accept", options.accept.join(","));
  }
  const changeHandler = (event) => {
    if (!event.target.files.length) {
      //  console.log('error')
      return;
    }

    const files = Array.from(event.target.files);
    files.forEach((file) => {
      if (!file.type.match("image")) {
        //console.log('error');
        return;
      }
      // console.log('ok');
      const reader = new FileReader();

      reader.onload = (ev) => {
        const src = ev.target.result;
        preview.insertAdjacentHTML(
          "afterbegin",
          `<div class="custom-img"><img  style="width: 100%; height: 100%;" src="${src}" alt="custom-img"><input class="img-size-input" step="1" min="8" max="80" value="21" type="range"></div>`
        );
        movement(".custom-img");
      };
      reader.readAsDataURL(file);
    });
  };
  input.addEventListener("change", changeHandler);
};
