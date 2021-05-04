/* Задание 1
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение. */

const ownProps = (obj: any): void => {
  for (let prop in obj)
    if (obj.hasOwnProperty(prop))
      console.log("Key=", prop, ", value=", obj[prop])
}

ownProps({
  one: 1,
  two: 2,
  three: 3,
  string: "string",
  "": "",
  undefined: undefined,
  NaN: NaN,
  null: null,
  false: false})
