import {
  template,
  tbody,
  candies,
  disableAllCandiesButton,
} from "./variables.js";

function disableCandy(name) {
  const candy = candies.find((candy) => candy.name === name);
  if (candy) {
    candy.isDisabled = true;
  }

  renderTable(candies);
}

function disableAllCandies() {
  candies.forEach((candy) => {
    candy.isDisabled = true;
  });

  renderTable(candies);
}

function renderTable(candies) {
  disableAllCandiesButton.on("click", disableAllCandies);

  tbody.empty();

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
}

export { disableAllCandies, disableCandy, renderTable };
