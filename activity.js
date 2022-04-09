
/* Beginner Challenge */

/* Do all of these using proper ES6 syntax
Using the following array of objects,
(1) Write an arrow function that adds a new entry to bookList
(2) Write an arrow function that removes a specific book from the bookList
(3) Write an arrow function that lists out all the books or all the authors in the book list */

const bookList = [
    { title: "Don Quixote", author: "Miguel de Cervantes" },
    { title: "Ulysses", author: "James Joyce" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Moby Dick", author: "Herman Melville" },
];

/* 1 */

const addBook = (list, title, author) => {
  const book = {
    title: title,
    author: author,
  }

  list.push(book)
}

/* 2 */

const removeBook = (list, title) => {
  list.forEach(b => {
    if(b.title === title){
        list.splice(list.indexOf(b), 1)
    }
  })
}   

/* 3 */

const printBooks = (list) => {
  list.forEach(book => {
    console.log("Title: " + book.title)
    console.log("Author: " + book.author) 
  });
}

/* Intermediate Challenge */
  
/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */

const posOrNeg = (num) => {
  return (num > 0 ? "positive" : "negative")
}
  
/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */

const dailyMessage = (day) => {
  switch(day){
    case "Monday":
      console.log("good luck")
      break;
    case "Tuesday":
      console.log("Taco Tuesday!")
      break;
    case "Wednesday":
      console.log("hump day!!")
      break;
    case "Thursday":
      console.log("Almost Friday")
      break;
    case "Friday":
      console.log("party time")
      break;
    case "Saturday":
      console.log("Who doesn't love Saturday")
      break;
    case "Sunday":
      console.log("lazy Sunday")
      break;
    default:
      console.log("Invalid day")
  }
}
  
/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */

const sumUpTo = (num) => {
  let sum = 0
    for (let i = 1; i <= num; i++){
      sum += i
    }
  return sum
}
  
/* Harder Challenge */

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
    me what I should wear accordingly */

const whatToWear = (temp) => {
  let fTemp = (1.8*temp) + 32 
    if(fTemp>= 90){
      console.log("Bathing suit!");
    }
    else if(fTemp >= 80){
      console.log("Shorts and t-shirt");
    }
    else if(fTemp >= 70){
      console.log("Pants and t-shirt"); 
    }
    else if(fTemp >= 60){
      console.log("Pants and long-sleeve shirt");
    }
    else if(fTemp >= 50){
      console.log("Pants and sweater");
    }
    else if(fTemp >= 40){
      console.log("Pants and jacket");
    }
    else
      console.log("Bundle Up!")
}

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */
  
const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

const numTruthy = (arr) => {
  let num = 0;
  arr.forEach(e => {
    if(e){
      num++;
    }
  })
  return num;
}
  
/* (9) Using the map function and arrow syntax, return an array of object that contain a fullName field
  and an averageGrade field representing the letter grade that corresponds to their GPA */
  
const attendance = [
  { firstName: "Clay", lastName: "Tondreau", gpa: 4.0 },
  { firstName: "Tucker", lastName: "Wilson", gpa: 2.0 },
  { firstName: "Eliza", lastName: "Tobin", gpa: 3.7 },
  { firstName: "Sofia", lastName: "Ackerman", gpa: 1.1 },
  { firstName: "Thomas", lastName: "Beddow", gpa: 2.3 },
  { firstName: "Jackson", lastName: "Wolf", gpa: 4.0 },
  { firstName: "Jared", lastName: "Nguyen", gpa: 4.0 },
];

const convertGrade = (grade) => { //sorry it's ugly!
  if(grade >= 3.8)
    return 'A'
  else if(grade >= 3.5)
    return 'A-'
  else if(grade >= 3.3)
    return 'B+'
  else if(grade >= 3)
    return 'B'
  else if(grade >= 2.7)
    return 'B-'
  else if(grade >= 2.3)
    return 'C+'
  else if(grade >= 2)
    return 'C'
  else if(grade >= 1.7)
    return 'C-'
  else if(grade >= 1.3)
    return 'D+'
  else if(grade >= 1)
    return 'D'
  else if(grade >= .7)
    return 'D-'
  else  
    return 'F'
}

const findLetterGrades = (list) => {
  return list.map(e => {
    const student = {
      name: e.lastName + " " + e.firstName,
      letter_grade: convertGrade(e.gpa),
    }
    return student
  })
}

/* Hardest Challenge (Don't do this without completing harder challenges) */

  /* Write a function that solves the "every number eventually equals 4" puzzle. The output should be
    an array of the path you took to make it equal four
    ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
    For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

// assuming num < 1,000,000. Pattern holds with higher numbers but just requires more checks
// does not support leading zeros

const digToNumLetters = (num) => {
  if(num === '6' || num === '1' || num === '2' || num === '10')
    return 3
  else if(num === '4' || num === '5' || num === '9'){
    return 4    
  }
  else if(num === '8' || num === '3' || num === '7'){
    return 5
  }
  else if(num === '11' || num === '12'){
    return 6
  }
  else if(num === '15' || num === '16'){
    return 7
  }
  else if(num === '13' || num === '14' || num === '18'  || num === '19'){
    return 8
  }
  else if(num === '17'){
    return 9
  }
  else
    return 0
}

const tenToNumLetters = (dig) => { //for 20, 30, 40, etc
  if(dig === '2' || dig === '3' || dig === '8' || dig === '9'){
    return 6
  }
  else if(dig === '4' || dig === '5' || dig === '6'){
    return 5
  }
  else if(dig === '7'){
    return 7
  }
  else if(dig === '1'){
    return 3
  }
  else if(dig === '0'){
    return 0
  }
}

const eventuallyFour = (num, path) => {
  
  if(num === 4){
    path.push(num)
    return path
  }

  const n = num.toString()
  const len = n.length 
  let newNum = 0
  let i = len-1

  while(n.charAt(i) !== ''){
    
    if(i === len-1){
      if(len > 1){
        if(n[len-2]==='1'){
          newNum += digToNumLetters(n.substring(len-2, len))
        }
        else{
          newNum += digToNumLetters(n[len-1]) + tenToNumLetters(n[len-2])
        }
        i -= 2;
        continue;
      }
      else{
        newNum = digToNumLetters(n)
      }
    }

    if(i===len-3 && n[len-3] !== '0'){
      newNum += 7 + digToNumLetters(n[len-3])
    }

    if(i===len-4){
      newNum += 8 + digToNumLetters(n[len-4])
    }

    if(i===len-5){
      newNum += tenToNumLetters(n[len-5])
    }

    if(i===len-6){
      newNum += 7 + digToNumLetters(n[len-6])
    }

    i--;
  }  
  path.push(num)
  path = eventuallyFour(newNum, path) //recursion!
  return path
}

// need to call the function with an empty array 
// eg: console.log(eventuallyFour(1234, []))