const buttonLoad = document.querySelector('.button--load--js')
console.log(buttonLoad)

const buttonSave = document.querySelector('.button--save--js')
console.log(buttonSave)

const textarea = document.querySelector('.textarea--js')
console.log(textarea)


function saveText() {
   const myText = document.querySelector('.textarea--js');
   localStorage.setItem('savedText', textarea.value);
}

buttonSave.addEventListener('click', saveText)

// function loadText() {
//     let yourText = localStorage.getItem('savedText');   
//     textarea.innerHTML = yourText;
// }

// buttonLoad.addEventListener('click', loadText);
    
buttonLoad.addEventListener('click', textarea.innerHTML = localStorage.getItem('savedText'))





