import { tbody } from "./variables.js";

export function disableCandy(name) {
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
