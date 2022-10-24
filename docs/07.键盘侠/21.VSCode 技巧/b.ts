interface O<T = string> {
  name: T
  age: number
}

const getName = ({ name, age }: O) => {
  // return `${name} - ${age}`;
  return 'aaa'
}

const tm = 'a' + Math.random() + 'b'

const user = `aa`

const as = getName && getName({ name: 'a', age: 1 })

const date = new Date()
// this data will not be renamed
const year = date.getFullYear()
const month = date.getMonth()

// export default getValue

export default {
  getName
}
type NewType = {
  name: string
  age: number
  gender: string
}

// export function getValues() {}

function getInfo({ name, age, gender }: NewType) {
  return name + age + gender + 'a'
}

if (true) {
} else {
}

const fetchInfo = () => {
  return fetch('url')
    .then(response => response.json())
    .then(json => json.data)
}

function getValue() {
  return `(${this.getName()})`
}

const fun = n => new Promise(resolve => resolve(n))

const a = `a${new Date()}`

getName?.({ name: '.  a .', age: 1 })

var aaa = 1

aaa = 2

var bbb = 3
var cbb = 4
var dbb = 5

const splitStr = 'a  d'

;[1, 2].map(item => item + 1)

async function item() {
  await fun(1)
  await fun(2)
  await fun(3)
  return 3
}

enum UserInfo {
  Name = 'Name',
  Age = 'Age'
}
