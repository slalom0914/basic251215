let name = 'apple'
let color = 'red'
let display = '🍎'

let apple = {
  name: 'apple',
  color: 'red',
  display: '🍎'
}

console.log(apple)
console.log(apple.name)
console.log(apple['name'])
console.log(apple.color)
console.log(apple['color'])
console.log(apple.display)
console.log(apple['display'])

let orange = {
  name: '오렌지',
  color: 'orange',
  display: '🍊'
}

orange = apple 
console.log(orange)
orange.name = "Orange"
console.log(apple)