/* Задание 2
Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false. */

const propInObj = (prop: string, obj: any): boolean => prop in obj

const obj_ = {
  one: 1,
  two: 2,
  three: 3,
  string: "string",
  "": "",
  undefined: undefined,
  NaN: NaN,
  null: null,
  false: false
}

console.log("Is true:", propInObj("one", obj_))
console.log("Is false:", propInObj("non-existent-prop", obj_))
console.log("Is true:", propInObj("false", obj_))
