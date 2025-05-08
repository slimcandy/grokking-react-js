import { tbody } from "./variables.js";

function disableCandy(name) {
  const rows = tbody.querySelectorAll("tr");

  rows.forEach((row) => {
    const nameCell = row.querySelector("th");

    if (nameCell.textContent === name) {
      nameCell.innerHTML = `<s>${name}</s>`;

      const button = row.querySelector("button");
      button.disabled = true;
    }
  });
}

function disableAllCandies() {
  const rows = tbody.querySelectorAll("tr");

  rows.forEach((row) => {
    const nameCell = row.querySelector("th");
    nameCell.innerHTML = `<s>${nameCell.textContent}</s>`;

    const button = row.querySelector("button");
    button.disabled = true;
  });
}

export { disableAllCandies, disableCandy };
