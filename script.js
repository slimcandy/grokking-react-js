var candies = [
  {
    name: "Пралине",
    price: 45,
  },
  {
    name: "Молочные",
    price: 25,
  },
  {
    name: "Карамельные",
    price: 96,
  },
  {
    name: "Крафтовые",
    price: 113,
  },
];

var tbody = document.getElementsByTagName("tbody")[0];
tbody.innerHTML = "";
const template = document.getElementById("candy-row");

candies.forEach((candy) => {
  const clone = template.content.cloneNode(true);

  clone.querySelector("th").textContent = candy.name;
  clone.querySelector(".price").textContent = `${candy.price} ₽`;

  tbody.appendChild(clone);
});
