/* Задание 5
Переписать консольное приложение из предыдущего юнита на классы. */

function Electro(name = "Electro") {
  this.name = name
  this.turnedOn = false
}

Electro.prototype.turnOn = function () {
  this.turnedOn = true
  this.sayStatus()
}

Electro.prototype.turnOff = function () {
  this.turnedOn = false
  this.sayStatus()
}

Electro.prototype.sayStatus = function () {
  console.log(`${this.name}: I am now '${this.turnedOn === true ? "ON" : "OFF"}'`)
}

Electro.prototype.whoAmI = function () {
  console.log(`I am a '${this.name}'`)
}

function Lamp() {
  this.name = "Lamp"
  this.power = 60
}

Lamp.prototype = new Electro()

Lamp.prototype.myPower = function () {
  console.log(`${this.name}: My power is ${this.power} watt`)
}

function Computer(cpu, mem, hd) {
  this.cpu = cpu
  this.mem = mem
  this.hd = hd
}

Computer.prototype = new Electro("Computer")

Computer.prototype.myCharacteristics = function() {
  console.log(`${this.name}: My charecteristics: CPU: '${this.cpu}', MEM: '${this.mem}', HD: '${this.hd}'`)
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
