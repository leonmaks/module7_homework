/* Задание 3
Написать функцию, которая создает пустой объект, но без прототипа. */

const createObjWithoutPrototype = (): {} => ({})

const objWithoutPrototype = createObjWithoutPrototype()

console.log("Object without prototype:", objWithoutPrototype)
console.log("Prototype of Object without prototype:", Object.getPrototypeOf(objWithoutPrototype))
