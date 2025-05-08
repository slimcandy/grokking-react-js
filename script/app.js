import {
  candies,
  tbody,
  template,
  disableAllCandiesButton,
} from "./variables.js";
import { disableCandy, disableAllCandies } from "./actions.js";

tbody.empty();

candies.forEach((candy) => {
  const clone = $(template.prop("content").cloneNode(true));
  const row = clone.find("tr");

  row.find("th").text(candy.name);
  row.find(".price").text(`${candy.price} ₽`);
  row.find("button").on("click", () => disableCandy(candy.name));

  tbody.append(clone);
});

disableAllCandiesButton.on("click", disableAllCandies);
