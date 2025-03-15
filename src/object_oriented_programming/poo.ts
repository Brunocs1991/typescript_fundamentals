class User {
    name: string = 'Bruno'
    age: number = 34

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    showName() {
        console.log(this.name)
    }
}

const user1 = new User('Bruno', 34)
user1.showName()

const user2 = new User('Eduardo', 30)
user2.showName()