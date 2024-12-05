function calcAverageCalories(days) {
  let valuesOfDays = [];
  let sumOfCalories = 0;

  for (let i = 0; i < days.length; i++) {
    valuesOfDays.push(days[i].calories);
  }

  for (let x = 0; x < valuesOfDays.length; x++) {
    sumOfCalories += valuesOfDays[x];
  }

  if (sumOfCalories === 0) {
    return 0;
  }

  let avarageCalories = sumOfCalories / valuesOfDays.length;
  return avarageCalories;
}


