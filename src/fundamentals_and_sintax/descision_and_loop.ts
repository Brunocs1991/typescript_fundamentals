const num: number = 15

if (num > 15) {
  console.log('Number is greater than 10')
} else if(num == 15) {
  console.log('Number is 15')
}else {
  console.log('Number is less than 10')
}

const typeUser = {
    'admin': 'Admin',
    'student': 'Student',
    'viewer': 'Viewer'
}

function validUser(user:string){
    console.log(`User is ${typeUser[user  as keyof typeof typeUser]}`)
}

let user = 'admin'
validUser(user)
// Output: User is Admin
user = 'student'
validUser(user)
// Output: User is Student
user = 'viewer'
validUser(user)
// Output: User is Viewer