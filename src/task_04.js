/* Задание 4
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

План:
1. Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
2. Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
3. У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
4. Создать экземпляры каждого прибора;
5. Вывести в консоль и посмотреть результаты работы, гордиться собой :)

Общие требования:
1. Имена функций, свойств и методов должны быть информативными
2. Соблюдать best practices:
    * использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
    * информативные имена (а не a, b);
    * четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
    * использование синтаксиса es6 (кроме функции-конструкторов) и т.д. */

function ElectroSuper(name = "Electro") {
  this.name = name
  this.turnedOn = false
}

ElectroSuper.prototype.myName = function () {
  return this.name
}

ElectroSuper.prototype.turnOn = function () {
  this.turnedOn = true
  this.myStatus()
}

ElectroSuper.prototype.turnOff = function () {
  this.turnedOn = false
  this.myStatus()
}

ElectroSuper.prototype.myStatus = function () {
  console.log(`${this.myName()}: I am now '${this.turnedOn === true ? "ON" : "OFF"}'`)
}

ElectroSuper.prototype.whoAmI = function () {
  console.log(`I am a '${this.myName()}'`)
}

function Lamp() {
  this.name = "Lamp"
  this.power = 600
}

Lamp.prototype = new ElectroSuper()

Lamp.prototype.myPower = function () {
  console.log(`${this.myName()}: My power is ${this.power} watt`)
}

function Computer(cpu, mem, hd) {
  this.cpu = cpu
  this.mem = mem
  this.hd = hd
}

Computer.prototype = new ElectroSuper("Computer")

Computer.prototype.myCharacteristics = function() {
  console.log(`${this.myName()}: My charecteristics: CPU: '${this.cpu}', MEM: '${this.mem}', HD: '${this.hd}'`)
}

const lamp = new Lamp()
const computer = new Computer("Intel Celeron N3350 1100 МГц", "6 ГБ LPDDR3 1600 МГц", "eMMC 64 ГБ")

lamp.whoAmI()
lamp.myPower()
lamp.turnOn()
computer.whoAmI()
computer.turnOn()
computer.myCharacteristics()
computer.turnOff()
lamp.turnOff()
