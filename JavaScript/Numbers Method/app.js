// const headButton = document.querySelector("head")
// const tailButton = document.querySelector("tail")
const tossPara = document.querySelector('#toss-p');
const tossDiv = document.querySelector('#toss-div');
const randomNum = Math.random()*2;
function toss(coin) {
    if (coin = 'head') {
        if (randomNum = 1) {
            tossPara.innerHTML = "You Win"
        } if (randomNum = 2) {
            tossPara.innerHTML = "You Lose"
        }
    } else {
    } if (randomNum = 1) {
        tossPara.innerHTML = "You Win"
    } if (randomNum = 2) {
        tossPara.innerHTML = "You Lose"
    }
}