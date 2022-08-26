const adviceText = document.querySelector('.text');
const adviceId = document.querySelector('.id');
const button = document.querySelector('#btn');

button.addEventListener('click', newAdvice);

window.onload = newAdvice;

function newAdvice() {
    fetch('https://api.adviceslip.com/advice').then(res => {
        return res.json();
    }).then(adviceData => {
        const adviceObjectText = adviceData.slip.advice;
        const adviceObjectId = adviceData.slip.id;
        adviceId.innerText = adviceObjectId;
        adviceText.innerText = `${adviceObjectText}`;
        console.log(adviceObjectText)
    }).catch(error => {
        console.log(error);
    })
}
