let num = +prompt("Чётное Нечётное")
if (num % 2 == 0) {
    alert("Четное")
} else if (num % 2 == 1) {
    alert("Нечотное")
} else {
    alert("Error");
}

let random = Math.floor(Math.random() * 59)
alert(random)
if (random <= 0 || random <= 15) {
    alert("1 Часть")
} else if (random <= 16 || random <= 31) {
    alert("2 Часть")
} else if (random <= 31 || random <= 45) {
    alert("3 Часть")
} else if (random <= 46 || random <= 59) {
    alert("4 Часть")
} else {
    console.log("лох");
}


let num1 = +prompt("Первое число");
let num2 = +prompt("Второе число");
let op = prompt("Что делаем: + плюс  прибавить , -  отнять минус, *  x уможить , / делить разделить");
let result;

if (op == "+" || op == "плюс" || op == "прибавить") {
    result = num1 + num2;
}
else if (op == "-" || op == "отнять" || op == "минус") {
    result = num1 - num2;
}
else if (op == "*" || op == "x" || op == "уможить") {
    result = num1 * num2;
}
else if (op == "/" || op == "делить" || op == "разделить") {
    result = num1 / num2;
}
else {
    alert("Что-то пошло не так")
};
alert(`Нажмите ок и выйдет ответ`);
alert(result)

let car = confirm('Хотите узнаить о машиннах')

if (car === true) {
    let car1 = +prompt(`Введите номер  1.Gentra 2.Spark 3.Laseti 4.Malibu 5.Cobalt`)
    if (car1 === 1) {
        alert('Кота боларни мошинаси')
    } else if (car1 === 2) {
        alert('85 лошадиных сил')
    } else if (car1 === 3) {
        alert('Кота боларни мошинаси вахат qora bosa')
    } else if (car1 === 4) {
        alert('Машина для богатых')
    } else if (car1 === 5) {
        alert('Лучше не покупай эту машину')
    } else {
        alert('Что ты Вел')
    }
    let buy_car = confirm('Хотите купить машинну')
    if (buy_car === true) {
        alert(`Поздравляем c покупкой машины под номером-${car1}`)
    } else if (buy_car === false) {
        alert('Приходите еще')
    } else {
        alert('Что ты Вел')
    }

} else {
    alert('Приходите еще')
}
let name = prompt("Введите ваше имя:");
let age = +prompt("Введите ваш возраст:");
let money = +prompt("Введите количество денег в кармане:");

if (name.toLowerCase().startsWith("a")) {
    console.log("Добро пожаловать в клуб!");
} else if (age > 20 && age <= 40) {
    console.log("Добро пожаловать в клуб!");
} else if (money > 100) {
    console.log("Добро пожаловать в клуб!");
}
else {
    console.log("Извините, вы не проходите по условиям для входа в клуб.");
}


