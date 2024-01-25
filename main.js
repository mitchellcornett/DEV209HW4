const item = document.getElementById("foodTypeInput");
const cal = document.getElementById("calorieAmountInput");
const done = document.getElementById("submitButton");
const out = document.getElementById("totalCaloriesDisplay");

let food = function(ptype,pcalories) {
    this.type = ptype;
    this.calories = parseInt(pcalories);
}

document.addEventListener("DOMContentLoaded", function (event) {
    let foodArray = [];
    let cals = 0;
    done.addEventListener("click", function () {
        foodObject = new food(item.value, cal.value);

        foodArray.push(foodObject);

        console.log(foodArray);

        cals += foodObject.calories;
        out.value = cals;
    });
    
});
