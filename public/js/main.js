const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const zero = document.getElementById('zero')
const add = document.getElementById('add')
const substract = document.getElementById('substract')
const divide = document.getElementById('divide')
const multiply = document.getElementById('multiply')
const point = document.getElementById('point')
const equal = document.getElementById('equal')
const clear = document.getElementById('clear')
const del = document.getElementById('delete')
const upper = document.getElementById('upperScreen')
const under = document.getElementById('underScreen')

one.addEventListener('click', () => {
    upper.innerHTML += 1
})

two.addEventListener('click', () => {
    upper.innerHTML += 2
})

three.addEventListener('click', () => {
    upper.innerHTML += 3
})

four.addEventListener('click', () => {
    upper.innerHTML += 4
})

five.addEventListener('click', () => {
    upper.innerHTML += 5
})

six.addEventListener('click', () => {
    upper.innerHTML += 6
})

seven.addEventListener('click', () => {
    upper.innerHTML += 7
})

eight.addEventListener('click', () => {
    upper.innerHTML += 8
})

nine.addEventListener('click', () => {
    upper.innerHTML += 9
})

zero.addEventListener('click', () => {
    upper.innerHTML += 0
})

add.addEventListener('click', () => {
    upper.innerHTML += '+'
})

substract.addEventListener('click', () => {
    upper.innerHTML += '-'
})

divide.addEventListener('click', () => {
    upper.innerHTML += '/'
})

multiply.addEventListener('click', () => {
    upper.innerHTML += 'x'
})

equal.addEventListener('click', () => {
})

clear.addEventListener('click', () => {
    upper.innerHTML = ""
    under.innerHTML = ""
})