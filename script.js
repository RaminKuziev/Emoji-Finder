"use-strict";
import { data } from "./emoji.js";
//сюда вставляються все карточки
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

//удаляет дубликаты слов в ключе keywords
const enumeration = () =>
  data.map((elem) => {
    return {
      ...elem,
      keywords: [...new Set(elem.keywords.split(" "))].join(" "),
    };
  });

// sum хранит новый маcив без дубликатов в ключе keywords
let sum = enumeration();

// создаём новую карточку
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

//проходим по массиву с данными и отрисовываем все карточки
//в переменной sum хранятся все карточки
function repetition(parametr) {
  for (let i = 0; i < parametr.length; i++) {
    createCards(parametr[i]);
  }
}
repetition(sum);

function serchInInput(event) {
  // переменная для хранения отфильтрованных карточек
  let newMass = [];
  if (!event.target.value) {
    repetition(sum);
  } else {
    for (let i = 0; i < sum.length; i++) {
      if (sum[i].title.toLowerCase().trim()===event.target.value.toLowerCase().trim()
      ) {
        newMass.push(sum[i]);
      }
    }
    cardsWrapper.innerHTML = "";
    // тут мы отрисовываем отфильтрованые карточки
    repetition(newMass);
  }
}

let globalSerch = document.querySelector(".serch");
globalSerch.addEventListener("input", serchInInput);


// newMass = sum.filter(function())
