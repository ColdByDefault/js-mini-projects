let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
let randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

let image1 = '/dice_game/assets/dice' + randomNumber1 + '.png'; //dice1.png - dice6.png

let image2 = '/dice_game/assets/dice' + randomNumber2 + '.png'; //dice1.png - dice6.png

document.querySelector('.img1').setAttribute('src', image1);
document.querySelector('.img2').setAttribute('src', image2);

if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').textContent = '🚩 Player 1 Wins!';
} else if (randomNumber2 > randomNumber1) {
  document.querySelector('h1').textContent = 'Player 2 Wins! 🚩';
} else {
  document.querySelector('h1').textContent = 'Draw!';
}