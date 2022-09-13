"use-strict";
import { data } from "./emoji.js";
const cardsWrapper = document.querySelector(".js-wrapper");
console.log(cardsWrapper);

// let div = document.createElement("div");
// div.className = "cards";                                                                 //создаём DIV

// let img = document.createElement("img");                                                 //создаём IMG
// img.setAttribute("src", "./images/💯.svg");                                              //создаём IMG + указываем путь
// img.setAttribute("alt", "");                                                             // alt необходимо указывать!!!!

// let cardsTitle = document.createElement("h3");                                           //создаём заголовок
// cardsTitle.innerText = "100";                                                            //добовляем в пустой заголовок текст

// let cardParagraf = document.createElement("p");                                          //создаём параграф
// cardParagraf.innerText = "Hundred, points, symbol, wow, win, perfect, parties";          //добовляем в пустой параграф текс

// div.append(img);                                                                         // добовляем в див img
// div.append(cardsTitle);                                                                  // добовляем в див h3
// div.append(cardParagraf);                                                                // добовляем в див p
// console.log(div);

// cardsWrapper.append(div);                                                                // добавляем в разметке HTML в cardsWrapper наш созданный div

const enumeration = () =>
  data.map((elem) => {
    return {
      ...elem,
      keywords: [...new Set(elem.keywords.split(" "))].join(" "),
    };
  });
let sum = enumeration();

function createCards(object) {
  let div = document.createElement("div");
  div.className = "cards";
  let h5 = document.createElement("h5");
  h5.innerText = object.symbol;
  let cardsTitle = document.createElement("h3");
  cardsTitle.innerText = object.title;
  let cardParagraf = document.createElement("p");
  cardParagraf.innerText = object.keywords;
  div.append(h5);
  div.append(cardsTitle);
  div.append(cardParagraf);
  cardsWrapper.append(div);
}
for (let i = 0; i < sum.length; i++) {
  createCards(sum[i]);
}
