"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
let originalExpression = "2 + 3 * 2 - 4 * 6";
let originalResult = 2 + 3 * 2 - 4 * 6;

let modifiedExpression = "2 + (3 * 2) - (4 * 6)";
let modifiedResult = 2 + (3 * 2) - (4 * 6);
printOut(`Original Expression: ${originalExpression} = ${originalResult}`);
printOut(`Modified Expression: ${modifiedExpression} = ${modifiedResult}`);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
const millInInch = 25.4;
const millInMeters = 1000;
const meters = 25.34;
const answer = (meters * millInMeters) / millInInch;
const exactAnswer = answer.toFixed(2);
printOut("exactAnswer = " + exactAnswer.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const part3_Answer =
    (3 * hoursInDay * minutesInHour) +
    (12 * minutesInHour) +
    14 +
    (45 / secondsInMinute);
printOut("Part3_Answer = " + part3_Answer.toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
const numberOfMinutes = 6322.52;
let part4_Calc = numberOfMinutes / (60 * 24);
const part4_Days = Math.floor(part4_Calc);
printOut("Days = " + part4_Days);

part4_Calc = part4_Calc - part4_Days;
part4_Calc = part4_Calc * hoursInDay;
const part4_Hours = Math.floor(part4_Calc);
printOut("Hours = " + part4_Hours);

part4_Calc = part4_Calc - part4_Hours;
part4_Calc = part4_Calc * minutesInHour;
const part4_Minutes = Math.floor(part4_Calc);
printOut("Minutes = " + part4_Minutes);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
const NOK = 76 / 8.6;
const USD = 8.6 / 76;
let amountUSD = 54;
const amountNOK = Math.round(amountUSD * NOK);
printOut(amountUSD + " dollars is " + amountNOK + " kroner");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
let text = "There is much between heaven and earth that we do not understand.";

let numberOfCharacters = text.length;
printOut("Number of characters: " + numberOfCharacters);

let charAtPosition19 = text.charAt(18);
printOut("Character at position 19: " + charAtPosition19);

let substringFromPosition35 = text.substr(34, 8);
printOut("Characters from position 35, 8 characters forward: " + substringFromPosition35);

let indexOfEarth = text.indexOf("earth");
printOut("Index where 'earth' starts: " + indexOfEarth);

printOut(newLine);


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
let isFiveGreaterThanThree = 5 > 3;
printOut("Is 5 greater than 3? " + isFiveGreaterThanThree);

let isSevenGreaterThanOrEqualToSeven = 7 >= 7;
printOut("Is 7 greater than or equal to 7? " + isSevenGreaterThanOrEqualToSeven);

let isAgreaterThanB = "a" > "b";
printOut('Is "a" greater than "b"? ' + isAgreaterThanB);

let isOneLessThanA = "1" < "a";
printOut('Is "1" less than "a"? ' + isOneLessThanA);

let is2500LessThanAbcd = "2500" < "abcd";
printOut('"2500" less than "abcd"? ' + is2500LessThanAbcd);

let isArneNotEqualToThomas = "arne" !== "thomas";
printOut('"arne" is not equal to "thomas"? ' + isArneNotEqualToThomas);

let isTwoEqualToFive = 2 === 5;
printOut("(2 equals 5) is this statement true? " + isTwoEqualToFive);

let isAbcdGreaterThanBcd = "abcd" > "bcd";
let isAbcdGreaterThanBcdFalse = !isAbcdGreaterThanBcd;
printOut('("abcd" is greater than "bcd") is this statement false? ' + isAbcdGreaterThanBcdFalse);

printOut(newLine);


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
let textToNumber1 = parseInt("254", 10);
printOut('Convert "254" to a number: ' + textToNumber1);

let textToNumber2 = parseFloat("57.23");
printOut('Convert "57.23" to a number: ' + textToNumber2);

let textToNumber3 = parseFloat("25 kroner");
printOut('Convert "25 kroner" to a number: ' + textToNumber3);

printOut(newLine);


printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
let r = Math.floor(Math.random() * 360) + 1;

printOut('Random number r between 1 and 360: ' + r);

printOut(newLine);


printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

const totalDays = 131;

const weeks = Math.floor(totalDays / 7);

const days = totalDays % 7;

printOut('Number of weeks in 131 days: ' + weeks);
printOut('Number of days remaining after full weeks: ' + days);

printOut(newLine);

