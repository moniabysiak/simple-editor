var buttonLoad = document.querySelector(".button--load--js");
console.log(buttonLoad);
var buttonSave = document.querySelector(".button--save--js");
console.log(buttonSave);
var textarea = document.querySelector(".textarea--js");
console.log(textarea);
function saveText() {
    myText = document.querySelector(".textarea--js");
    localStorage.setItem("savedText", myText);
    saveButton = localStorage.getItem("savedText");
}
buttonSave.addEventListener("clik", saveText);
console.log(myText);

//# sourceMappingURL=index.aa69868b.js.map
