// for (let i = 0; i <= 1000; i++) {
//     console.log(i+ "."+ "Hello");
// }


// var old = 10;
// if (old >= 65) {
//     console.log('You get your income from pension')
// } else if (old < 65) {
//     if (old >= 18) {
//         console.log("Each month you get a salary")
//     } else if (old < 18) {
//         console.log("You get an allowance")
//     } else {
//         console.log("The value of the age variable is not numerical")
//     }
// } else {
//     console.log("The value of the age variable is not numerical")
// }


// var day = "Sunday";

// switch (day) {
//     case "Monday":
//         console.log("do something")
//         break;
//     case "Tuesday":
//         console.log("do something")
//         break;
//     case "Wednesday":
//         console.log("do something")
//         break;
//     case "Thursday":
//         console.log("do something")
//         break;
//     case "Friday":
//         console.log("do something")
//         break;
//     case "Saturday":
//         console.log("do something")
//         break;
//     case "Sunday":
//         console.log("do something")
//         break;
//     default:
//         console.log('There is no such day')
//         break;
// }

// var i = 10
// while (i > 0) {
//     console.log('ngu ko ngu')
//     i<20
// }

// for (var i = 5; i>=1;  i--) {
//     console.log(i)
// }

// var i=1
// while (i<5) {
//     console.log(i);
//     i++;
// }

// for (var i = 1; i<=2; i++) {
//     for (var j = 1; j<=7; j++) {
//         console.log("week" + i + "-" + 'day' + j )
//     } 
// }


// for(var i =1; i<=10; i++) {
//     switch (i) {
//         case 1:
//             console.log("Gold medal");
//             break;
//         case 2:
//             console.log("Silver medal");
//             break;
//         case 3:
//             console.log("Bronze medal");
//             break;
//         default:
//             console.log(i)
//     }
// }

// function plusValue(a, b) {
//     console.log(a + b)
// }

// for(var a = 0; a < 10; a++) {
//     for (var b = 0; b < 10; b++) {
//         console.log(a +b)
//     }
// }


// function letterFinder(word, match) {
//     for(var i=1; i < word.length; i++) {
//         if (word[i] == match) {
//             console.log('Found the', match, 'at', i)
//         } else {
//             console.log('---No match found at', i)
//         }
//     }
// }

// letterFinder("test", "t")

// function createArray (item1, item2, item3) {
//     var arr = [];
//     arr.push(item1);
//     arr.push(item2);
//     arr.push(item3);

// }

// createArray(cat, pen, pencilde)
// console.log(arr);

// var number = Math.random()*10
// var number2 = Math.ceil(number)
// console.log(number2);

// var word = 'trung ngu'
// console.log(word.length);
// word.slice(0,3);
// console.log(word)



// var clothes = [];
// clothes.push('shirt');
// clothes.push('short');
// clothes.push('barggy');
// clothes.push('tail');
// clothes.push('jeans');

// clothes.pop()
// clothes.push('skirt');

// console.log(clothes[4]);

// var favCar = {};
// favCar.color = 'red';
// favCar.item = Boolean;

// console.log(favCar);


// console.log("trung")


// function addTwoNums (a, b) {
//     console.log(a + b)
// }


// try {
//     addTwoNums('5', 5)
//     if (typeof a !== 'number') {
//         ReferenceError('the first argument is not a number')
//     }
//     else if (typeof b !== 'number') {
//         ReferenceError('the second argument is not a number')
//     } else {
//         console.log(a + b)
//     }
    
// } catch (err) {
//     console.log(err)
// }

// console.log('It still work')


// try {

//     function letterFinder(word, match) {
//         for(j = 0; j < word.length; j++) {
//             var condition1 = typeof(word) == 'string' && word.length >= 2;
//             var condition2 = typeof(match) == 'string' && match.length ==1;
    
//             if (condition1 && condition2) {
//                 for(i = 0; i < word.length; i++) {
//                     if(word[i] == match) {
//                         //if the current character at position i in the word is equal to the match
//                         console.log('Found the', match, 'at', i)
//                     } else {
//                         console.log('---No match found at', i)
//                     }
//                 }
//             } else {
//                 console.log('Please pass correct arguments to the function.')
//             }
//         }
//     }
// } catch (err) {
//     var number1 = Math.random()
//     var number2 = Math.random()
//     letterFinder(number1, number2)
// }

// letterFinder("cat", "c")





// var result = null;
// console.log(result);

// trung = (num1, num2) => {
//     console.log(num1, num2);
// }

// trung(1,2)

// let number = 4
// loopFunction = (num) => {
//     console.log(num)
//     num = num -1
//     if (num === 0) {
//         return
//     }
//     loopFunction(num)
// }

// loopFunction(number)

// var number3 = 1
// trung = () => {
//     var number3 = 4
// }

// console.log(number3)

// var item1 = {
//     quantity: 3,
//     price: 3,
//     totalPuchase: function () {
//         var totalPrice = item1.quantity * item1.price;
//         console.log("Total:", totalPrice);
//     }
// }

// item1.totalPuchase()


// class Animal {

// }

// class Cat extends Animal {
//   constructor() {
//     super();
//     this.noise = "meow";
//   }
// }

// var result = new Animal();
// console.log(result.noise);

// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name
        this.age = age
        this.energy = energy
    }
    sleep() {
       console.log(`I gained ${this.energy + 10} energy, cause I'm sleeping.`)
    }
    doSomethingFun() {
        console.log(`I still have ${this.energy - 10} energy let's keep dancing!`)
    }
}


// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(xp, hourlyWage);
        this.name = name
        this.xp = xp
        this.hourlyWage = hourlyWage
    }
    goToWork() {
        console.log(`${this.name}'s XP increased: ${this.xp + 10} points`)
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    const inter1 = new Worker('Bob', 21, 110, 0, 10)
    inter1.goToWork()
    return inter1
}
console.log(intern())

// Task 4: Code a manager object, methods
function manager() {
    const manager1 = new Worker('Alice', 30, 120, 100, 30)
    manager1.doSomethingFun()
    return manager1
}
console.log(manager())

