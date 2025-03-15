// 2. Konversi cm ke km dan sebaliknya
function convertLength(value, unit) {
    if (unit === "cm")
        return "".concat(value / 100000, " km");
    else
        return "".concat(value * 100000, " cm");
}
console.log("100000 cm to km: ".concat(convertLength(100000, "cm")));
