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

const tbody = $("tbody");
const template = $("#candy-row");
const disableAllCandiesButton = $("#disable-all");

disableAllCandiesButton.on("click", disableAllCandies);

export { candies, tbody, template };
