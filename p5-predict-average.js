function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
        return "Invalid Input";
    }

    let totalTime = waitingTimes.reduce((acc, time) => acc + time, 0);
    let avgTime = Math.round(totalTime / waitingTimes.length);

    let remainingPeople = serialNumber - waitingTimes.length;
    return remainingPeople > 0 ? remainingPeople * avgTime : 0;
}

console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7, 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
