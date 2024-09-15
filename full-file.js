//problem 1
function calculateTax(income, expense) {
  if (income < 0 || expense < 0 || income < expense) {
    return "Invalid Input";
  }
  let taxableAmount = income - expense;
  let tax = taxableAmount * 0.2;
  return tax;
}

//problem 2
function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }

  let parts = email.split("@");
  if (parts.length !== 2) {
    return "Invalid Email";
  }

  let username = parts[0];
  let domain = parts[1];

  return `${username} sent you an email from ${domain}`;
}

//problem 3
function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }

  for (let char of name) {
    if (!isNaN(char) && char !== " ") {
      return true;
    }
  }
  return false;
}

//problem 4
function calculateFinalScore(obj) {
  if (
    typeof obj !== "object" ||
    obj === null ||
    !obj.name ||
    typeof obj.testScore !== "number" ||
    typeof obj.schoolGrade !== "number" ||
    typeof obj.isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }

  let testScore = obj.testScore;
  let schoolGrade = obj.schoolGrade;
  let isFFamily = obj.isFFamily;

  if (testScore > 50 || schoolGrade > 30) {
    return "Invalid Input";
  }

  let finalScore = testScore + schoolGrade;
  if (isFFamily) {
    finalScore += 20;
  }

  return finalScore >= 80;
}

//problem 5
function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
        return "Invalid Input";
    }

    let totalTime = waitingTimes.reduce((acc, time) => acc + time, 0);
    let avgTime = Math.round(totalTime / waitingTimes.length);

    let remainingPeople = serialNumber - waitingTimes.length;
    return remainingPeople > 0 ? remainingPeople * avgTime : 0;
}