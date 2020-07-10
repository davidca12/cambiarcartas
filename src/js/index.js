/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  let card = document.querySelector("#a");
  card = addEventListener("click", function() {
    let cd = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
    let cho = Math.floor(Math.random() * 4);

    document.querySelector("#b").innerHTML = cd[cho];
    document.querySelector("#d").innerHTML = cd[cho];

    let num = [
      "A",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let cho1 = Math.floor(Math.random() * 14);

    document.querySelector("#c").innerHTML = num[cho1];
  });
};
