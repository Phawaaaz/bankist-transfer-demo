// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
//     ['Naira', 'Nigeria Naira']
//   ]);
  
  
  
//   // console.log(accounts);
  
// //   const account = accounts.find(acc => acc.owner === 'Akinola Fawaz')
  
//   // console.log(account);
  
//   // for (acc of accounts){
//   //   if (accc.owner === "Akinola Fawaz"){
//   //     console.log(acc);
//   //   }
//   // }
  
  
  
//   const arr = [[1,2,3], [4,5,6], 7,9]
//   console.log(arr.flat())
  
//   const arrDeep = [[[ 1 , 2 ] , 3 ] , [ 4 , [ 5 , 6 ]  ], 7, 9]
//   console.log(arrDeep.flat())
  
//   // const accountsMovements = accounts.map(acc => acc.movements)
//   // const allMovement = accountsMovements.flat()
  
//   // const overallMovement = allMovement.reduce ((acc, mov)=> acc + mov, 0)
//   // console.log(overallMovement);
//   // console.log(allMovement);
//   // console.log(accountsMovements);
  
//   // Flat
//   const overralBalance = accounts.map(acc => acc.movements)
//   .flat()
//   .reduce ((acc, mov)=> acc + mov, 0)
  
  
  
//   // Flatmap
//   const overralBalanced = accounts.flatMap(acc => acc.movements)
//   .reduce ((acc, mov)=> acc + mov, 0)
  
  
//   // Sorting Array
  
//   const owner = ['Jonas', 'Zach', 'Adam', 'Matha', 'Fawaz']
//   // console.log(owner.sort())
  
//   // REturn < 0 A, B (keep order)
//   // Return > 0 B, A (Switch order)
  
//   // Assending
//   movements.sort((a,b) => a-b )
  
//   // Desending
//   movements.sort((a,b) =>{
//     if (a > b) return -1
//     if (a < b) return 1
//   })
  
//   movements.sort((a,b) => b-a )
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   /////////////////////////////////////////////////
//   // let arr = ['a', 'b', 'c', 'd', 'e' ]
  
//   // // Slice
//   // console.log(arr.slice(2)); 
  
//   // console.log(arr.slice(0, -3));
//   // console.log(arr.slice());
//   // console.log([...arr]);
  
//   // // console.log(arr.splice(2));
//   // // console.log(arr.splice(-1));
  
//   // // splice
//   // console.log(arr);
//   // arr.splice(1, 3)
//   // console.log(arr);
  
//   // // Reverse
//   // arr = ['a', 'b', 'c', 'd', 'e' ]
//   // const arr2 = ['j','i','h','w','g', 'e']
//   // console.log(arr2.reverse());
  
//   // // Concat
//   // const letters = arr.concat(arr2)
//   // console.log(letters);
  
//   // console.log([...arr , ...arr2]);
  
//   // // join
//   // console.log(letters.join('-'));
  
  
//   // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  
//   // // for(const movement of movements){
//   // for(const [i, movement] of movements.entries()){
//   //   if (movement >0 ){
//   //     console.log(`movement ${i+1}: You deposited ${movement}`);
//   //   }
//   //   else{
//   //     console.log(`movement ${i+1}: You withdrew ${Math.abs(movement) }`);
//   //   }
//   // }
  
//   // console.log(`
//   //   for forEach method
//   //   lets see how it work
//   //   `);
//   // movements.forEach( (movement) => {
//   //   if (mov >0 ){
//   //     console.log(`movement ${i+1}: You deposited ${mov, i, arr}`);
//   //   }
//   //   else{
//   //     console.log(`movement ${i+1}: You withdrew ${Math.abs(mov) }`);
//   //   }
//   // })
  
//   // const currencies = new Map([
//   //   ['USD', 'United States dollar'],
//   //   ['EUR', 'Euro'],
//   //   ['GBP', 'Pound sterling'],
//   // ]);
  
//   // MAP()
  
//   // const rest = new Map()
//   // rest.set('name', 'Classico Italiano')
//   // rest.set(1, 'Firenze, Italy')
//   // console.log(rest.set(2, 'Lisbon, Portugal')); 
  
//   // const question = new Map([
//   //   ['Question', 'What is the best programming language in the wolrd?'],
//   //   [1, 'c'],
//   //   [2, 'Java'],
//   //   [3, 'JavaScript'],
//   //   ['correct', 3],
//   //   [true, 'Correct😉'],
//   //   [false, 'Try again']
//   // ])
//   // console.log(question);
  
//   // console.log(question.get('Question'));
//   // for (const [key, value] of question){
//   //   if (typeof key === 'number'){
//   //     console.log(`Answer ${key}: ${value}`);
//   //   }
//   // }
//   // currencies.forEach((value, key, map)=>{
//   //     console.log(`${key}: ${value}`);
//   // })
  
//   // const cuurenciesUnique = new Set('USD', 'GBP', 'USD', 'NAIRA', 'GBP')
//   // console.log(cuurenciesUnique);
  
//   // cuurenciesUnique.forEach((value, key, map)=>{
//   //   console.log(`${key}: ${value}`);
//   // })
  
//   /* 
//   Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each).
//   For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's
//   less than 3 years old.
  
//   Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
  
//   1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the 
//   cat ages from that copied array (because it's a bad practice to mutate function parameters)
//   2. Create an array with both Julia's (corrected) and Kate's data
//   3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
//   4. Run the function for both test datasets
  
//   HINT: Use tools from all lectures in this section so far 😉
  
//   TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
//   TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
  
//   GOOD LUCK 😀
//   */
  
  
//   // const checkDogs = (dogsJulia, dogsKate) =>{
//   //   const dogsJuliaCorrected = dogsJulia.slice()
//   //   dogsJuliaCorrected.splice(0,1)
//   //   dogsJuliaCorrected.splice(-2)
//   //   console.log(dogsJuliaCorrected);
  
//   //   const dog = [...dogsJuliaCorrected , ...dogsKate]
  
//   //   dog.forEach((dog,i)=>{
//   //       if (dog >= 3){
//   //         console.log(`dog number ${i+1} is an adult and is ${dog} year old`);
//   //       }else{
//   //         console.log(`dog number ${i+1} is still a puppy and is ${dog} year old`);
//   //       }
//   //   })
  
//   // }
//   // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
//   // checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])
  
//   // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  
//   // const eurToUsd = 1.1
  
//   // // const movementsUsd = movements.map(function(mov){
//   // //   return mov * eurToUsd
//   // // })
  
//   // const movementsUsdfor = []
//   // for (const mov of movements){
//   //   movementsUsdfor.push(mov * eurToUsd)
    
//   // }
//   // console.log(movementsUsdfor);
  
//   // const movementUsd = movements.map((mov) => mov * eurToUsd)
//   // console.log(movementUsd);
  
//   // movement.map((mov, i ,arr)=>{
  
//   // })
  
//   /* 
//   Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog
//   ages to human ages and calculate the average age of the dogs in their study.
  
//   Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), 
//   and does the following things in order:
  
//   1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years 
//   old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
//   2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs 
//   that are at least 18 years old)
//   3. Calculate the average human age of all adult dogs (you should already know from other 
//   challenges how we calculate averages 😉)
//   4. Run the function for both test datasets
  
//   TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
//   TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
//   */
  
//   // const calcHumanDogAge = (dogs) => {
//   //   const humanAge = dogs.map((dog)=> dog<2? dog*2: 16+dog*4)
//   //   console.log(humanAge);
  
//   //   const adultDog = humanAge.filter(dog => dog >= 18)
//   //   console.log(adultDog);
  
//   //   const dogCumAge = adultDog.reduce((acc, dog, i, arr)=> acc + dog / arr.length, 0)
  
//   //   console.log(dogCumAge);
//   // }
//   // calcHumanDogAge([5, 2, 4, 1, 15, 8, 3], [16, 6, 10, 5, 6, 1, 4])
  
//   const eurToUsd = 1.1
//   movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov)=> acc + mov)
  
//   // Include methode
  
//   // To check for equality
//   // console.log(movements.includes(-130))
//   // console.log(movements.some(acc => acc === -130));
  
//   // // Check for Condition and check for many stament
//   // const anyDeposits =  movements.some(mov => mov > 0)
  
//   // Fill method 
//   // its use to fill array created an empty method
//   // From method
//   createRandom = ( ) =>{ 
//     const random = Math.random( )*6
//     // const absRandom = Math.abs(random)
//     const floorRandom = Math.ceil(random)
//     return floorRandom
//   }
  
  
//   const randomDiceScore = Array.from({length : 100}, createRandom)
// //   console.log(randomDiceScore);
  
  
//   labelBalance.addEventListener('click', ()=>{
//     const movementUi = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('€', ' ')))
//     // console.log(movementUi)
//   })
  
//   // Coding Challenge #4
  
//   /* 
//   Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
//   Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
//   Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion 
//   (see hint).
  
//   1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object 
//   as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. 
//   (The result is in grams of food, and the weight needs to be in kg)
//   2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, 
//   so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
//   3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs 
//   who eat too little ('ownersEatTooLittle').
//   4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and 
//   "Sarah and John and Michael's dogs eat too little!"
//   5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
//   6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
//   7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
//   8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the
//    portions are inside the array's objects)
  
//   HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
//   HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
  
//   TEST DATA:
//   const dogs = [
//     { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//     { weight: 8, curFood: 200, owners: ['Matilda'] },
//     { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//     { weight: 32, curFood: 340, owners: ['Michael'] }
//   ];
//   */
  
//   const dogs = [
//     { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//     { weight: 8, curFood: 200, owners: ['Matilda'] },
//     { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//     { weight: 32, curFood: 340, owners: ['Michael'] }
//   ];
  
//   const gramTokilogram = (gram)=>{
//     return gram / 1000
//   }
  
//   // Solution one
//   dogs.forEach((dog) =>{
//     dog.recommendedFood =Math.trunc(dog.weight ** 0.75 * 28)
  
//   })
  
//   console.log(dogs);
  
//   // Solution two
//   const sarahDog  = dogs.find(dog => dog.owners = 'Sarah')
//   const dogSarah = dogs.includes('Sarah')
// //   console.log(`Sarah dog is eating too ${dogSarah.recommendedFood > dogSarah.curFood? 'much' : 'little' }`);
// //   console.log(sarahDog);
  
//   // Solution Three
//   const ownerEatTooMuch = dogs.filter(dog => dog.recommendedFood > dog.curFood )
//   const ownerEatTooLittle = dogs.filter(dog => dog.recommendedFood < dog.curFood )
//   // console.log(ownerEatTooMuch);
//   // console.log(ownerEatTooLittle);
  
//   // Solution three
//   const ownerEatTooLittleName = ownerEatTooLittle.flatMap(dog => dog.owners).join(" and ")
// //   console.log(ownerEatTooLittleName);
// //   console.log(`${ownerEatTooLittleName} eat too little`);
  
//   const ownerEatTooMuchName = ownerEatTooMuch.flatMap(dog => dog.owners).join(' and ')
// //   console.log(ownerEatTooMuchName);
// //   console.log(`${ownerEatTooMuchName} eat too Much`);
  
//   // solution 5
// //    console.log(dogs.some(dog => dog.recommendedFood === dog.curFood )); 
  
//   //  Solution 6 
//   const checkingOkayFood = (dog) =>  dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10)
// //   console.log(dogs.some(checkingOkayFood)); 
  
//   // Solution 7
//   const ownerEatOkay = dogs.filter(checkingOkayFood)
// //   console.log(ownerEatOkay);
  
//   const newDogs = dogs.slice().sort((a,b)=> a.recommendedFood - b.recommendedFood)
// //   console.log(newDogs);  
  
  
  
//   // ////////////////////////////////////////////////////////////////////////////////////////////////
//   // Working with Numbers
  
//   // ////////////////////////////////////////////////////////////////////////////////////////////////
//   // Conversion
//   console.log(23n);
//   console.log(+'23');
  
//   // Parsing
//   // console.log(parseInt('30px', 10));
  
//   // console.log(Number.isNaN('20x'));
  
//   // Number.isFinite(20)
  
//   const RandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min)
//   // Alway return a value btween min and max
//   // console.log(RandomInt(10, 20));
  
//   // Rounding interger ()
//   Math.round()
  
//   Math.ceil()
  
//   Math.floor()
//   Math.trunc()
  
//   // Check your note for explanation
//   // Rounding decimal
//   //Return 3.45, in two decimal place but it return string, so we use our converter
//   // console.log((3.45).toFixed(2) );
//   // console.log( 5 % 2)
  
//   // const evenChecker = [2,3,4,5,6,7,8,9,0]
  
//   // for (const even of evenChecker){
//   //   if (even % 2 === 0){
//   //     console.log(even);
//   //   }
  
//   // }
//   // const isEven = n => n % 2=== 0
  
//   // console.log(evenChecker.some(arr => arr % 2 === 0));
  
//   // const row =document.querySelectorAll('.movements__row')
  
//   // console.log(row);
//   // labelBalance.addEventListener('click', () => {
//   //    row.forEach(row, i)  => {
//   //   if ( i % 2 === 0) row.style.backgroundColor = 'orangered'
//   // }})
//   // for every nth time use the reminder operator
  
//   // 2 ** 53 -1
//   // 2 ** 53
//   // //////////////////////////////////////////////////////
  
//   // 100000000n + 20  // give error, unless we change it to big int
//   // BigInt(Number)
  
//   // Create a date
  
//   // const now = new Date()
//   // console.log(now);
//   // console.log(new Date('Jul 09 2024 15:13:34'))
  
//   // console.log(new Date('October 16 2002'))
  
//   // Working With date
//   // const future  = new Date(2037, 10 , 19 , 15, 23)
//   // future.getFullYear()
//   // future.getMonth()
//   // future.getDate()
//   // future.getDay()
//   // future.getHours()
//   // future.getMinutes()
//   // future.getSeconds()
//   // future.getTime()
  
//   // future.setFullYear()
  
  
//   // const calcDaysPassed = (date1, date2)=> Math.abs((date2 - date1) / (1000 *60 *60 *24))
  
//   // const day1 = calcDaysPassed(new Date(2024, 9, 16), new Date(2002, 9, 16))
//   // console.log(day1);
  
//   const num =2343425532.45
  
//   const option = {
//     style: 'unit',
//     unit: 'mile-per-hour'
//   }
//   console.log('NG: ' , new Intl.NumberFormat('en-NG').format(num));
//   console.log('US: ' , new Intl.NumberFormat('en-US').format(num));
//   console.log('Syria: ' , new Intl.NumberFormat('ar-SY').format(num));
//   console.log('Germany: ' , new Intl.NumberFormat('de-DE').format(num));
//   console.log('Browser: ' , new Intl.NumberFormat(navigator.language).format(num));

//   const max = movements.reduce((acc, mov) => acc > mov? acc : mov
// , movements[0])

// console.log(max);
const ingredients = ['olive', 'spinach']
 const pizzaTimer = setTimeout( (ing1, ing2) => console.log(`Here is your pizza ${ing1} and ${ing2}` ) , 3000, ...ingredients)
console.log('waiting....');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer)

        // To Display Current Date
    //  const now = new Date()
      // const day = `${now.getDate()}`.padStart(2 , 0)
      // const month = `${now.getMonth() + 1}`.padStart(2 , 0)
      // const year = `${now.getFullYear()}`.padStart(2 , 0)
      // const hour = `${now.getHours()}`.padStart(2 , 0)
      // const min = `${now.getMinutes()}`.padStart(2 , 0)
      // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`

      // Filter Method

// const deposit = movements.filter(mov =>mov > 0)

// console.log(deposit);
// console.log(accounts);

// const withdrawal = movements.filter(mov => mov < 0)

// console.log(withdrawal);


// Reduce Method

// const balance = movements.reduce((acc, cur) => acc + cur, 0)

// console.log(balance); 
// Maximum value of the array using the string

// DAys

    //   const day = `${date.getDate()}`.padStart(2 , 0)
    //   const month = `${date.getMonth() + 1}`.padStart(2 , 0)
    //   const year = `${date.getFullYear()}`.padStart(2 , 0)
    // return `${day}/${month}/${year}`

    // setInterval(()=> {
    //     const now = new Date()
    //     const hour = now.getHours().padStart(2,0)
    //     const mins = now.getMinutes().padStart(2 , 0)
    //     const secs = now.getSeconds().padStart(2,0)
    //     console.log(`${hour}: ${mins}: ${secs}`);
    // }, 6000)

    // console.log(hour , mins, secs);
