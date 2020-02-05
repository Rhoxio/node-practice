// const a = [1,2,3,4,5]
// const b = [6,7,8,9,10]

// for (let i = 0; i < a.length; i++) {
//     var x = a[i]
// }
// for (let i = 0; i < b.length; i++) {
//     var y = b[i]
// }

// let callbacks = []
// for (let i = 0; i <= 2; i++) {
//     callbacks[i] = function () { return i * 2 }
// }
// console.log(x)
// console.log(y)
// callbacks[0]() === 0
// callbacks[1]() === 2
// callbacks[2]() === 4
// console.log(callbacks[2].call())

// let name = 'dog'

// let sentence = `${name} is a good boy!`

// console.log(sentence)

const people = [
  {name: "Kevin", age: 28},
  {name: "Laura", age: 58}
]

let name = "kevin"

let capitalizedName = `${name.charAt(0).toUpperCase()}${name.slice(1, name.length)}`

function palindrome(string){
  let reversed = string.split("").reverse().join("")
  return string == reversed
}

const ages = people.map((person) => person.name)
console.log(ages)