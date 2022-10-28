const actions = () => {
  document.querySelector(".actions").addEventListener("click", (e) => {
    const data = e.target.dataset.actions;
    data === "addText" ? actionsText() : data === "addImg" && actionsImg();
  });
  const edit = document.querySelector(".edit-screen");
  const actionsText = () => {
    edit.classList.toggle("showEdit");
    document.getElementById("formText").addEventListener("submit", setText);
  };
  const setText = (e) => {
    e.preventDefault();
    edit.classList.toggle("showEdit");
    const value =  e.target.querySelector(".formText-input").value
    document.querySelector('.chose__wrap').insertAdjacentHTML(`afterbegin`, `<span>${value}</span>`);
}
};
const actionsImg = () => {
  triggerClickInput();
};
const triggerClickInput = () => {
  document.querySelector(".actions__input").click();
};
actions();
