const item = document.getElementById("foodTypeInput");
const cal = document.getElementById("calorieAmountInput");
const done = document.getElementById("submitButton");
class food {
    calories;
    names;
    food (c, n) {
        calories = parseInt(c);
        names = n;
    }
    print () {
        return "This food is a " + names + ", and it contains " + calories + " calories.";
    }
}
document.addEventListener("DOMContentLoaded", function (event) {
    
    
});
