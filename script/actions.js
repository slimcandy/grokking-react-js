import { template, tbody } from "./variables.js";

function disableCandy(name) {
  const rows = tbody.find("tr");

  rows.each(function () {
    const row = $(this);
    const nameCell = row.find("th");

    if (nameCell.text() === name) {
      nameCell.html(`<s>${name}</s>`);
      row.find("button").prop("disabled", true);
    }
  });
}

function disableAllCandies() {
  const rows = tbody.find("tr");
  rows.each(function () {
    const row = $(this);
    const nameCell = row.find("th");

    nameCell.html(`<s>${nameCell.text()}</s>`);
    row.find("button").prop("disabled", true);
  });
}

function renderTable(candies) {
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
