/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.getElementById("responsible").innerHTML = refreshString(
    responsibles
  );
  document.getElementById("action").innerHTML = refreshString(actions);
  document.getElementById("object").innerHTML = refreshString(object);
  document.getElementById("time").innerHTML = refreshString(time);
};

let responsibles = [
  "Aunt Jemima",
  "Slash",
  "Team Rocket",
  "The Denver Broncos",
  "Popeye",
  "Superman"
];
let actions = [
  "defeated",
  "played",
  "captured",
  "fought",
  "cooked for",
  "tickled"
];
let object = [
  "Pikachu",
  "Batman",
  "a samurai",
  "my pre-K teacher",
  "the Pope",
  "bugs bunny",
  "Spongebob"
];
let time = [
  "yesterday",
  "this morning",
  "before the entire school",
  "an hour ago",
  "2 years ago and everyone still remembers",
  "in my dreams, what do you think it means Doctor?"
];

function refreshString(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
