const { Observable } = require('rxjs')
const { map } = require('rxjs/operators')

const users = {
    data: [
        {
            status: "active",
            age: 20,
        },
        {
            status: "inactive",
            age: 10,
        },
        {
            status: "inactive",
            age: 25,
        },
        {
            status: "active",
            age: 70,
        },
    ]
}


// how they get the Data so they have a subscriber to get the data 
const observable = new Observable((subscriber) => {
    subscriber.next(users)
}).pipe(
    map((value) => {
        console.log("1= Got data from Observable", value)
        return value.data
    }),
    map((value) => {
        console.log("2= Got data from first Operator", value)
        return value.filter(user => user.status === "active")
    }),
    map((value) => {
        console.log("3= Got data from third Operator", value)
        return value.reduce((sum, user) => sum + user.age, 0) / value.length
    }),
    map((value) => {
        console.log("4= Got data from four Operator", value)
        if (value > 30) {
            return "You are too old" + "-" + value
        }
    })
)


const observer = {
    next: (value) => { console.log("i am Observable and i got the value: " + value) },
    error: (error) => { console.log("i am Observable and i got the error: " + error) },
    complete: () => { console.log("i am Observable and i got the complete") }

}


observable.subscribe(observer)
