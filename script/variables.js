const candies = [
  {
    name: "Пралине",
    price: 45,
    isDisabled: false,
  },
  {
    name: "Молочные",
    price: 25,
    isDisabled: true,
  },
  {
    name: "Карамельные",
    price: 96,
    isDisabled: false,
  },
  {
    name: "Крафтовые",
    price: 113,
    isDisabled: false,
  },
];

const tbody = document.querySelector("tbody");
const template = document.getElementById("candy-row");

export { candies, tbody, template };
