const { Observable } = require('rxjs')


// how they get the Data so they have a subscriber to get the data 
const observable = new Observable((subscriber) => {
    subscriber.next(10)
})


const observer = {
    next: (value) => { console.log("i am Observable and i got the value: " + value) },
    error: (error) => { console.log("i am Observable and i got the error: " + error) },
    complete: () => { console.log("i am Observable and i got the complete") }

}


observable.subscribe(observer)
