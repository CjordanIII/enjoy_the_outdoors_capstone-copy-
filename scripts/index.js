const firstCard = document.querySelector("#firstcard");
const secondCard = document.querySelector("#secondcard");
const thirdcard = document.querySelector("#thirdcard");
import { mountainsArray } from "./data/mountainData.js";
const washington = mountainsArray[0];
const adams = mountainsArray[1];
const jeff = mountainsArray[2];
firstCard.innerHTML = `
            <img src="${`../images/${washington.img}`}" class="d-block w-100 rounded" style="height:470px" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>${washington.name}</h5>
              <p>
                ${washington.desc}
              </p>
            </div>`;

secondCard.innerHTML = `
            <img src="${`../images/${adams.img}`}" class="d-block w-100 rounded" style="height:470px" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>${adams.name}</h5>
              <p>
                ${adams.desc}
              </p>
            </div>`;

thirdcard.innerHTML = `
         <img src="${`../images/${jeff.img}`}"  class="d-block w-100 rounded" style="height:470px" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>${jeff.name}</h5>
              <p>
               ${jeff.desc}
              </p>
            </div>`;
