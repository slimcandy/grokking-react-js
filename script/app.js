import { candies, disableAllCandiesButton } from "./variables.js";
import { disableAllCandies, renderTable } from "./actions.js";

renderTable(candies);

disableAllCandiesButton.on("click", disableAllCandies);
