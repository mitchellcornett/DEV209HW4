const item = document.getElementById("foodTypeInput");
const cal = document.getElementById("calorieAmountInput");
const done = document.getElementById("submitButton");
const out = document.getElementById("totalCaloriesDisplay");
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
    getCals () {
        return this.calories;
    }
}
document.addEventListener("DOMContentLoaded", function (event) {
    let foods = [];
    let cals = 0;
    done.addEventListener("click", function () {
        f = new new food(item.value, cal.value);
        foods.push(f);
        cals += f.getCals();
        out.innerHTML = cals;
    });
    
});
