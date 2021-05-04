/* Задание 5
Переписать консольное приложение из предыдущего юнита на классы. */

class Electro {
  constructor(
    // Protected 'name' to be seen from descendants
    protected readonly name: string = "Electro",
    // Private status On/Off - Off by default
    private turnedOn: boolean = false) {}

  // Switch methods
  turnOn() { this.turnedOn = true, this.sayStatus() }
  turnOff() { this.turnedOn = false, this.sayStatus() }

  // Say current status
  sayStatus() {
    console.log(`${this.name}: I am now '${this.turnedOn === true ? "ON" : "OFF"}'`)
  }

  // Introduce myself
  whoAmI() {
    console.log(`I am a '${this.name}'`)
  }
}

class Lamp extends Electro {
  // Create own property 'name'
  name: string = "Lamp"

  constructor(private readonly power: number = 60) { super() }

  // Couple words about my power
  myPower() {
    console.log(`${this.name}: My power is ${this.power} watt`)
  }
}

class Computer extends Electro {
  // Create specific props: CPU, MEM, HD
  constructor(private cpu: string, private mem: string, private hd: string) {
    // Initialize 'name' through Electro superclass
    super("Computer")
  }

  // Explain specific characteristics
  myCharacteristics() {
    console.log(`${this.name}: My charecteristics: CPU: '${this.cpu}', MEM: '${this.mem}', HD: '${this.hd}'`)
  }
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
