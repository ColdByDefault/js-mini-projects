// Detecting Button Press
let numberOfDrums = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOfDrums; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', function (){
        let btnInnerHtml = this.innerHTML;
        makeSound(btnInnerHtml);
        btnAnimation(btnInnerHtml);

    })
};

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    btnAnimation(event.key);
});

function makeSound(key){
    switch (key){
        case 'w':
            let tom1 = new Audio('/DrumKit/sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            let tom2 = new Audio('/DrumKit/sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            let tom3 = new Audio('/DrumKit/sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            let tom4 = new Audio('/DrumKit/sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            let crash = new Audio('/DrumKit/sounds/crash.mp3');
            crash.play();
            break;
        case 'k':
            let kick = new Audio('/DrumKit/sounds/kick-bass.mp3');
            kick.play();
            break;
        case 'l':
            let snare = new Audio('/DrumKit/sounds/snare.mp3');
            snare.play();
            break;

        default: console.log(this.innerHTML)

    }
};


function btnAnimation(currentKey) {
    let activeBtn = document.querySelector('.' + currentKey);
    activeBtn.classList.add('pressed');
    setTimeout(function(){
        activeBtn.classList.remove('pressed');
    }, 100);
}