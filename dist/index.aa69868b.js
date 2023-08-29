const buttonLoad = document.querySelector(".button--load--js");
console.log(buttonLoad);
const buttonSave = document.querySelector(".button--save--js");
console.log(buttonSave);
const textarea = document.querySelector(".textarea--js");
console.log(textarea);
function saveText() {
    const myText = document.querySelector(".textarea--js");
    localStorage.setItem("savedText", textarea.value);
}
buttonSave.addEventListener("click", saveText);
function loadText() {
    let yourText1 = localStorage.getItem("savedText");
    textarea.innerHTML = yourText1;
}
buttonLoad.addEventListener("click", loadText);
textarea.innerHTML = yourText;

//# sourceMappingURL=index.aa69868b.js.map
