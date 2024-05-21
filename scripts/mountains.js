"use strict";
import { mountainsArray } from "./data/mountainData.js";
/*
    You can remove the following console.log() lines.
    They are here to verify that we have access to the data
    The data script files are located in the scripts/data directory
*/
const card = document.querySelector("#card");

mountainsArray.forEach((data) => {
  card.innerHTML += `
  <div class="card " style="width: 18rem">
        <img src="${data.img}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">
           ${data.desc} </p>
          </p>
          <span class="card-text">Elevation:${data.elevation}</span>
        </div>`;
});
