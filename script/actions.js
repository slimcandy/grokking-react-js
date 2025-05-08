import { tbody } from "./variables.js";

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

export { disableAllCandies, disableCandy };
