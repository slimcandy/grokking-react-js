import { template, tbody, disableAllCandiesButton } from "./variables.js";
import { disableCandy, disableAllCandies } from "./actions/index.js";

export function renderTable(candies) {
  // Очищаем таблицу
  tbody.empty();

  // Заполняем таблицу заново
  candies.forEach((candy) => {
    const clone = $(template.prop("content").cloneNode(true));
    const row = clone.find("tr");

    row.find("th").text(candy.name);
    row.find(".price").text(`${candy.price} ₽`);
    row.find("button").on("click", () => disableCandy(candy.name));

    if (candy.isDisabled) {
      row.find("th").html(`<s>${candy.name}</s>`);
      row.find("button").prop("disabled", true);
    }

    tbody.append(clone);
  });

  // Прочее
  disableAllCandiesButton.on("click", disableAllCandies);
}
