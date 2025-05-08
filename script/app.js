import {
  candies,
  tbody,
  template,
  disableAllCandiesButton,
} from "./variables.js";
import { disableCandy, disableAllCandies } from "./actions.js";

tbody.innerHTML = "";

candies.forEach((candy) => {
  const clone = template.content.cloneNode(true);

  clone.querySelector("th").textContent = candy.name;
  clone.querySelector(".price").textContent = `${candy.price} ₽`;
  clone.querySelector("button").addEventListener("click", () => {
    disableCandy(candy.name);
  });

  tbody.appendChild(clone);
});

disableAllCandiesButton.addEventListener("click", disableAllCandies);
