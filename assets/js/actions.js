const actions = () => {
  let font = "font-family: domine;";
  let size = 16;
  const input = document.querySelector(".formText-input");
  document.querySelector(".font__range").addEventListener("input", (e) => {
    size = e.target.value;
    input.style.fontSize = size + "px";
  });
  document.querySelector(".actions").addEventListener("click", (e) => {
    const data = e.target.dataset.actions;
    data === "addText"
      ? actionsText()
      : data === "addImg" &&
        addImages(
          {
            input: ".actions__input",
            preview: ".chose__wrap",
          },
          {
            multi: false,
            accept: [".jpg", ".png", ".svg"],
          }
        );
  });
  const edit = document.querySelector(".edit-screen");
  const actionsText = () => {
    edit.classList.toggle("showEdit");
    document.getElementById("formText").addEventListener("submit", setText);
  };
  document.querySelectorAll(".edit-font-item").forEach((e) => {
    e.addEventListener("click", (e) => {
      font = e.target.style.cssText.replace(/"/g, "");
      const fontInput = font.replace("font-family: ", "").replace(";", "");
      input.style.fontFamily = fontInput;
    });
  });
  const setText = (e) => {
    e.preventDefault();
    hiddenEdit(edit);
    const value = input.value;
    document
      .querySelector(".chose__wrap")
      .insertAdjacentHTML(
        `afterbegin`,
        `<span class="customTextWrap" style="${
          font ? font : "font-family: domine;"
        } font-size: ${size + "px"}" >${value}</span>`
      );
    input.value = "";
    movement(".customTextWrap");
    // zoom('.customTextWrap')
  };
};
const hiddenEdit = (edit) => {
  edit.classList.remove("showEdit");
};
actions();
