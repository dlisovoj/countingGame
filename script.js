"use strict";

var target = document.getElementById("target");
var one = document.getElementById("one");
var two = document.getElementById("two");
var to = document.getElementById("to");
var time = document.getElementById("time");
var plrone = document.getElementById("plr-one");
var plrtwo = document.getElementById("plr-two");
var reset = document.getElementById("reset");
var border = document.getElementById("border");
var plronescore = 0;
var plrtwoscore = 0;
to.innerText = `Playing to: ${target.value}`
two.innerText = `${plrtwoscore}`
one.innerText = `${plronescore}`

setInterval(function(){
  var date = new Date();
  time.innerText = date.toLocaleTimeString();
}, 1000);

setInterval(function(){
    to.innerText = `Playing to: ${target.value}`
}, 100);



plrone.addEventListener("click", function() {
  if (plronescore >= target.value - 1) {
    one.style.color = "green";
    plrtwo.disabled = true;
    plrone.disabled = true;
    target.disabled = true;
    plronescore++;
    one.innerText = `${plronescore}`
    plrone.classList.add("disablegreen");
    plrtwo.classList.add("disablegreen");
    border.classList.add("borderone");
    setTimeout(function(){
      border.classList.remove("borderone");
    }, 250);
  } else {
  target.disabled = true;
  plronescore++;
  one.innerText = `${plronescore}`
  plrone.classList.add("clicked");
    setTimeout(function(){
      plrone.classList.remove("clicked");
    }, 75);
  }
});

plrtwo.addEventListener("click", function() {
  if (plrtwoscore >= target.value - 1) {
    two.style.color = "red";
    plrtwo.disabled = true;
    plrone.disabled = true;
    target.disabled = true;
    plrtwoscore++;
    plrone.classList.add("disable");
    plrtwo.classList.add("disable");
    two.innerText = `${plrtwoscore}`
    border.classList.add("bordertwo");
    setTimeout(function(){
      border.classList.remove("bordertwo");
    }, 250);
  } else {
  plrtwoscore++;
  target.disabled = true;
  two.innerText = `${plrtwoscore}`
  plrtwo.classList.add("clicked");
    setTimeout(function(){
      plrtwo.classList.remove("clicked");
    }, 75);
}
});

reset.addEventListener("click", function() {
  plronescore = 0;
  plrtwoscore = 0;
  one.style.color = "white";
  two.style.color = "white";
  target.value = 5;
  plrtwo.disabled = false;
  plrone.disabled = false;
  target.disabled = false;
  plrone.classList.remove("disable");
  plrtwo.classList.remove("disable");
  plrone.classList.remove("disablegreen");
  plrtwo.classList.remove("disablegreen");
  one.innerText = `${plronescore}`
  two.innerText = `${plrtwoscore}`
  reset.classList.add("clicked");
    setTimeout(function(){
      reset.classList.remove("clicked");
    }, 75);
});

target.addEventListener("click", function() {
    to.innerText = `Playing to: ${target.value}`
});
