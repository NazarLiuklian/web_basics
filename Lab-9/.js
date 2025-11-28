// homework Lek.4
// 1) За допомогою цикла реалізувати код, який виводить наступну картину
var pattern = [9, 16, 23, 27, 29, 29, 27, 23, 16, 9];

for (var i = 0; i < pattern.length; i++) {
    var stars = "";
    for (var j = 0; j < pattern[i]; j++) {
        stars += "*";
    }
    console.log(stars);
}

// 2) За допомогою циклу while / do-while реалізувати timer на 10 секунд. 
// Зверніть увагу на властивості обєкту/Конструктора Date (не використовуючи JS timer - setTimeOut, setInterval)
var startTime = new Date();
var currentTime = new Date();

while ((currentTime - startTime) < 10000) {
    currentTime = new Date();
}

console.log("10 секунд минуло!");



// homework Lek.7
// 1) Використовуючи літеральну нотацію створити обєкт car з властивістю speedometer = 0; 
// 2) Використовуючи методи Object додати до обєкту car наступні методи:
// setSpeedometer, що оновлює дані speedometer (сеттер)
// getSpeedometer, що повертає вміст speedometer (геттер)
// clearSpeedometr, що очищує вміст speedometer 
var car = {
    speedometer: 0
};

car.setSpeedometer = function(speed) {
    this.speedometer = speed;
};

car.getSpeedometer = function() {
    return this.speedometer;
};

car.clearSpeedometr = function() {
    this.speedometer = 0;
};

// Приклад використання:
console.log("Початкова швидкість: " + car.getSpeedometer()); // 0
car.setSpeedometer(120);
console.log("Після встановлення: " + car.getSpeedometer()); // 120
car.clearSpeedometr();
console.log("Після очищення: " + car.getSpeedometer()); // 0

// 3) Модифікувати код таким чином, щоб можна було зробити наступне:
// car.setSpeed(200).setSpeed(300).getSpeed().clearSpeed() // Ланцюжковий виклик
var car = {
    speedometer: 0,
    
    setSpeedometer: function(speed) {
        this.speedometer = speed;
        return this;
    },
    
    getSpeedometer: function() {
        console.log(this.speedometer);
        return this;
    },
    
    clearSpeedometr: function() {
        this.speedometer = 0;
        return this;
    }
};

// Ланцюжковий виклик:
car.setSpeedometer(200).setSpeedometer(300).getSpeedometer().clearSpeedometr();



// Щодо лекції 7 (ООП в JS) завдання наступне:
// - створити щонайменше 3 функції конструктори (класи), Можна застосовувати, навіть бажано, ES6 синтаксис
// - проілюструвати на прикладі трьох і більше класах прототипне наслідування в JS
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    introduce() {
        console.log(`Привіт, мене звати ${this.name}, мені ${this.age} років`);
    }
}

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    
    getInfo() {
        console.log(`${this.brand} ${this.model} ${this.year} року`);
    }
}

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    
    getDescription() {
        console.log(`"${this.title}" написана ${this.author}, ${this.pages} сторінок`);
    }
}

// Приклади використання:
var person1 = new Person("Назар", 18);
person1.introduce();

var car1 = new Car("Toyota", "Camry", 2020);
car1.getInfo();

var book1 = new Book("Кобзар", "Тарас Шевченко", 240);
book1.getDescription();


// 3. Як ви знаєте, викликавши метод toString на будь-якому обєкті, наприклад ({}).toString () отримаємо " [object Object]". ! Увага Д, чорна скринька в студію:
// - опишіть як ми можемо інтерпретувати (пояснити) значення вищезгаданого результату "[object Object]"
// чому [].toString() не виводить "[object Array]"
// реалізувати вивід "[object Array]" для масиву
console.log("--- Демонстрація toString() ---");

var obj = {};
console.log(obj.toString());

var arr = [1, 2, 3];
console.log(arr.toString());

// Пояснення:
// Array.prototype має свій власний метод toString(), який перевизначає Object.prototype.toString()
// Масив успадковує toString() від Array.prototype, а не від Object.prototype
// Тому arr.toString() виводить елементи масиву через кому, а не "[object Array]"

// Щоб отримати "[object Array]", потрібно викликати Object.prototype.toString():
console.log(Object.prototype.toString.call(arr));

// Реалізувати вивід "[object Array]" для масиву:
Array.prototype.toStringCustom = function() {
    return "[object Array]";
};

console.log(arr.toStringCustom());