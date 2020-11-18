(function clickTxtHandler() {
    const element = document.querySelector('.txt');
    element.addEventListener('click', () => {
        element.textContent = 'Clicked';
    })
})();

(function clickBtnHandler() {
    const buttons = document.querySelectorAll('.btn');
    // const buttonsArray = Array.from(buttons);
    // console.log(buttons);
    // console.log(buttonsArray);
    for (let i = 0; i < buttons.length; i += 1) {
        buttons[i].addEventListener('click', (event) => {
            console.log(event.target.textContent);
            console.log('Clicked button', i);
        })
    }
})();

const logCurrentTarget = (event) => {
    console.log(event.currentTarget);
}

// changeStyle
// logTarget
// doSmething
// clikckHabdler (changeStyle,logTarget,doSmething)
// show, hide

(function bubbling() {
    const divs = document.querySelectorAll('.first, .second, .third');
    const events = ['click', 'mouseover'];
    for (let i = 0; i < divs.length; i++) {
        for (let j = 0; j < events.length; j += 1) {
            divs[i].addEventListener(events[j], logCurrentTarget)
        }
    }
})()