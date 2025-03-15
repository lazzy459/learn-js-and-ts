// 2. Konversi cm ke km dan sebaliknya
function convertLength(value: number, unit: "cm" | "km"): string {
    if (unit === "cm") return `${value / 100000} km`;
    else return `${value * 100000} cm`;
}
console.log(`100000 cm to km: ${convertLength(100000, "cm")}`);

export {}