var buttonLoad = document.querySelector(".button--load--js");
console.log(buttonLoad);
const buttonSave = document.querySelector(".button--save--js");
console.log(buttonSave);
var textarea = document.querySelector(".textarea--js");
console.log(textarea);
const saved = localStorage.getItem("savedText");
console.log(saved);
function saveText() {
    const myText = document.querySelector(".textarea--js");
    localStorage.setItem("savedText", textarea.value);
    console.log(myText);
}
buttonSave.addEventListener("click", saveText);

//# sourceMappingURL=index.aa69868b.js.map
