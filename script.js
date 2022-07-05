const screen = document.querySelector('.calculator-display');
const showUp = document.querySelectorAll('.show');

const displayContent = function(){
    showUp.forEach(button => {
        button.addEventListener('click', () => {
            screen.textContent = button.textContent;
        });
    });
};

displayContent();