// see it live https://codepen.io/Jenn007/pen/vYGPmWq \\

function letterGuesser() {
  let alb = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];
  let num = Math.floor(Math.random() * alb.length);
  let guess = prompt(`Your letter is ${alb[num]}, guess ${alb[num]} index number`);
  console.log(guess);
  let answer = Number.parseInt(guess);
  if (answer === num) {
    alert(`genius at the alphabet`);
  } else if (Number.isNaN(answer)) {
    alert(`must enter number`);
  } else if (answer !== num) {
    alert(`need to learn your ABCs, the answer is ${num}`);
  }


}
letterGuesser();



