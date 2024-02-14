"use strict"

let a = 33;
let b = 3;
let c = 9;
console.log( a, b, c );
 

console.log(nnull, null, nundefined, undefined ,nstring, str, ninteger, 12 );


 try{
        num = Number.parseInt("abc");
    }
    catch(ex){
        return `Задание 3: \n${ex.name} ":" + ${ex.message} \n ${ex.stack}`;
    }

function CalculationWithPI(){
    const PI = 3.14;

    let radius = 10;
    let result = radius * (2 * PI);

    return `Задание 4: Длинна окружности по радиусу ${radius}: ${result}`;
}

function AdditionIntsFromString(){
    let a = '10';
    let b = '20';

    return `Задание 5: ${Number.parseInt(a) + Number.parseInt(b)}`;
}

function AdditionsIntsFromStringByPlus(){
    let a = +'2';
    let b = +'3'

    return "Задание 6: " + (a + b);
}

function AdditionPxInt(){
    let a = '5px';
    let b = '6px'

    return `\"Задание 7: \" ${(Number.parseInt(a) + Number.parseInt(b))}'px'`;
}

function AdditionPxFloat(){
    let a = '5.5px';
    let b = '6.25px'

    return `\"Задание 8: \" ${(Number.parseFloat(a) + Number.parseFloat(b))}'px'`;
}

function FindDigitsCount(num){
    return num.toString().length;
}

function FindDigitCountInInteger(){
    let int = 1234567

    return `Задание 10: Кол-во цифр в числе ${int}: ${FindDigitsCount(int)}`;
}

function FindDigitCountInIntegers(){
    let int1 = 123456;
    let int2 = 123;

    return `Задание 11: ${FindDigitsCount(int1) + FindDigitsCount(int2)}`;
}

function GetSpecifiedChar(){
    let str = 'abcde';

    return "Задание 12: " + str[0] + str[2] + str[4];
}

function GetReverseCharCollection(){
    let str = 'abcde';

    return "Задание 13: " + str.split('').reverse().join('');
}

function GetCharByCode(){
    let str = 'abcde';
    let num = 'c'.charCodeAt(0);

    return "Задание 14: " + str.split('').find((ch)=> ch.charCodeAt(0) == num)[0];
}


function GetLastStringSymbol(){
    let str = 'fewrfg43g24gddds3fdfadfv'

    return "Задание 15: " + str[str.length - 1];
}

function GetPreLastStringSymbol(){
    let str = 'fewrfg43g24gddds3fdfadfv'

    return "Задание 16: "+ str[str.length - 2];
}

function FindSumOfDigitsString(){
    let str = '12345';
    let result = 0;

    str.split('').forEach((val)=>{result = Number.parseInt(val)});
    return `Задание 17: ${result}`;
}

function ReverseDigits(){
    let nums = 12345;

    return `Задание 18: ${nums.toString().split('').reverse().join('')}`;
}

function ReducedOperations(){
    let num = 47;

    num += 7;
    num -= 18;
    num *= 10;
    num /= 15;

    return `Задание 19: ${num}`;
}

function IncDecOperations(){
    let num = 10;

    num++;
    num++;
    num--;

    return `Задание 20: ${num}`;
}

function GetAge(){
    let age = prompt("Введите свой возраст:" );

    return `Задание 21: Возраст: ${age}`;
}

function SumPropmt(){
    let int1 = prompt('Введите первое число:');
    let int2 = prompt('Введите второе число:');


   return `Задание 22: Сумма введённых чисел: ${parseInt(int1) + parseInt(int2)}`;
}

function CalcSquareArea(){
    let squareSide = prompt('Введите сторону квадрата:');

    squareSide = parseFloat(squareSide);

    return `Задание 23: ${isNaN(squareSide) ? "Ошибка!" : squareSide * squareSide}`;
}

function CalcRectanglePerimeter(){
    let a = prompt('Введите a:');
    let b = prompt('Введите b:');

    a = parseFloat(a);
    b = parseFloat(b);

    return `Задание 24: ${isNaN(a) && isNaN(b) ? "Ошибка!" : 2 * (a + b)}`;
}

function CursiveText(){
    let p = document.createElement('p');
    let div = document.getElementsByClassName("cursive_place")[0];

    p.style.fontStyle = 'italic';
    p.innerText = "Text"

    div.appendChild(p);
}

function CodeReviewSumOfNumber(){
    let num1 = 1;
    let num2 = 2;
    return 'Задание 26: сумма: ' + (num1 + num2);
}

function CodeReviewFindFirstDigit(){
    let num = 123;
    return `Задание 27: ${num.toString()[0]}`;
}

function CodeReviewPreIncrement(){
    let a = 0;
    return "Задание 28: " + (++a);
}

function CodeReviewFindSecondsInDay(){
    let a = 24 * 60 * 60;
    return "Задание 29: " + a;
} 

function CoreReviewDigitsCountInInteger(){
    let num = 123;
    let str = String(num);
    return "Задание 30: " + str.length;
}

function FindSecondsIn30Days(){
    let sec = 60, min = 60,week = 24,day = 30;

    return `Задание 31: ${sec * min * week * day}c`;
}

function FindMinutesInDay(){
    let min = 60;
    let day = 24;
    
    return `Задание 32: ${min * day}min`;
}

function FindBytesIn1Mb(){
    let Mb = 2;
    let byte = 1024 ** 2;

    return `Задание 33: ${Mb * byte}bytes`;
}

function FindBytesIn10Gb(){
    let Gb = 10;
    let bytes = 1024 ** 3;

    return `Задание 34: ${Gb * bytes}bytes`;
}

function CircleArea(){
    let r = 5;

    let pi = Math.PI;

    return `Задание 35: Площадь круга с радиусом ${r} равна ${pi * Math.pow(r, 2)}`;
}

function RectangleArea(){
    let a = 5,b = 10; 

    return `Задание 36: Площадь прямоугольника со сторонами ${a} и ${b} равна ${a * b}`;
}

function ConvertToFr(){
    let tc = 25,fr = (9/5) * tc + 32;

    return `Задание 37: Температура в градусах Фаренгейта: ${fr}`;
}