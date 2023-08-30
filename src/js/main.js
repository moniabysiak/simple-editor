const buttonLoad = document.querySelector('.button--load--js');
console.log(buttonLoad)

const buttonSave = document.querySelector('.button--save--js');
console.log(buttonSave)

const textarea = document.querySelector('.textarea--js');
console.log(textarea)



function saveText() {
   const myText = document.querySelector('.textarea--js');
   localStorage.setItem('savedText', textarea.value);
}

buttonSave.addEventListener('click', saveText)

function loadText() {
    let yourText = localStorage.getItem('savedText');   
    textarea.value = yourText;
}

buttonLoad.addEventListener('click', loadText);
    
const buttonCheck = document.querySelector('.check--js');

buttonCheck.addEventListener('click', () => {
    const textLength = textarea.value.length;
    textarea.classList.remove('text-black')
    if (textLength > 10) {
        textarea.classList.add('text-green-600')
        textarea.classList.remove('text-red-600')
    } else {
        textarea.classList.add('text-red-600')
        textarea.classList.remove('text-green-600')
    }
})






