const screen = document.querySelector('.calculator-display');
const showUp = document.querySelectorAll('.show');
const remove = document.querySelector('.del');
const allClear = document.querySelector('.ac');


const clearingBtns = function () {
    if (allClear) {
        allClear.addEventListener('click', () =>  screen.textContent = '' )
    };
    if (remove){ 
        remove.addEventListener('click', () => screen.textContent = screen.textContent.toString().slice(0, -1))
    };
};

clearingBtns();

const displayContent = function(){
    showUp.forEach(button => {
        button.addEventListener('click', () => {
            screen.textContent += button.textContent;
        });
    });
};

displayContent();