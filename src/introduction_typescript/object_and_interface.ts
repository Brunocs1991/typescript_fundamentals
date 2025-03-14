interface Person {
  name: string;
  age: number;
  job?: string;
}

const person1: Person = {
  name: 'John',
  age: 30,
}

const person2: Person = {
  name: 'Jane',
  age: 25,
  job: 'Developer'
}

const arrayPerson: Array<Person> =[
  person1,
  person2
]
const arrayNumber: Array<number> = [1, 2, 3, 4, 5]
const arrayString: Array<string> = ['a', 'b', 'c', 'd', 'e']
