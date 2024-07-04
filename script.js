// 'use strict';

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// // Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'Akinola Fawaz',
  movements: [4300, 1000, 7000, 500, 900, -500, 390],
  interestRate: 2,
  pin: 5555, 

}
const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements);

// Implementing The depos/withdrawer display
const displayMovement = function(movements){

  containerMovements.innerHTML = '';

  movements.forEach((mov, i) => {

    const type = mov> 0? 'deposit': 'withdrawal';
    
    const html =`
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

const calcDisplayBalance =  (acc) => {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// calcDisplayBalance(accounts)

const calcDisplaySummary = (acc) => {

  // For the money coming in
  const  incomes = acc.movements
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov , 0)

  labelSumIn.textContent = `${incomes}€`


//  For the Out going money
  const outcomes = acc.movements
  .filter(mov => mov < 0)
  .reduce((acc, mov) => acc + mov, 0)

  labelSumOut.textContent = `${Math.abs(outcomes)}€`

  // For the interest
  const interest = acc.movements
  .filter(mov => mov > 0)
  .map( (deposit)  => deposit * acc.interestRate / 100)
  .filter((int, i, arr) =>{
    console.log(arr);
    return int >= 1;
  })
  .reduce((acc, int) =>acc + int , 0)
  
labelSumInterest.textContent = `${interest}€`


}

// calcDisplaySummary(account5.movements)
// displayMovement(account5.movements)
// console.log(displayMovement(account1.movements));

console.log(containerMovements.innerHTML);

// console.log(containerMovements.innerHTML);

// const user = 'Akinola Fawaz Ololade'

const createUsernames = (accs) =>{
  accs.forEach( acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
}

createUsernames(accounts);

const updateUi = (acc)=> {
      // display movement
      displayMovement(acc.movements)

      // Display summary
      calcDisplaySummary(acc)
  
      //Display Balance
      calcDisplayBalance(acc)
  
}
// /////////////////////////////////////////////////////////////////////////////////
let currentAccount
// ////////////////////////////////////////////////////////////////////////////////
// Event listener


btnLogin.addEventListener('click', (e)=>{
  e.preventDefault()
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)

  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)){
    // console.log("Login");
    // DIsplay Ui and a welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ') [0]}`
    containerApp.style.opacity = 100

    // Clear input screen

    inputLoginUsername.value = inputLoginPin.value = ''
    inputLoginPin.blur()

    updateUi(currentAccount)
    // Display summary
    // calcDisplaySummary(currentAccount.movements)
  }
})

btnTransfer.addEventListener('click', (e)=>{
  e.preventDefault()
  const amount = Number(inputTransferAmount.value)
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value)
  inputTransferAmount.value = inputTransferTo.value = ''
  console.log(receiverAcc, amount);


  inputTransferAmount.value = inputTransferTo.value = ''

  if (amount > 0 &&
     receiverAcc && 
     currentAccount.balance >= amount 
     && receiverAcc?.username !== currentAccount.username
    ){

      // doing the transfer
      currentAccount.movements.push(-amount)
      receiverAcc.movements.push(amount)

      updateUi(currentAccount)
    }
})

btnClose.addEventListener('click', (e)=>{
  e.preventDefault()


  if( inputCloseUsername.value === currentAccount.username && 
    Number(inputClosePin.value) === currentAccount.pin ){

      const index = accounts.findIndex(
        acc => acc.username === currentAccount.username  
        )
        console.log(index);


        // delete Account
      accounts.splice(index, 1)

      
        // hideUI
        containerApp.style.opacity = 0
      // .indexOf(23)
  }
   

  inputClosePin.value = inputCloseUsername.value = ''


})


// Filter Method

const deposit = movements.filter(mov =>mov > 0)

// console.log(deposit);
// console.log(accounts);

const withdrawal = movements.filter(mov => mov < 0)

// console.log(withdrawal);


// Reduce Method

const balance = movements.reduce((acc, cur) => acc + cur, 0)

console.log(balance); 
// Maximum value of the array using the string

const max = movements.reduce((acc, mov) => acc > mov? acc : mov
, movements[0])

console.log(max);



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
  ['Naira', 'Nigeria Naira']
]);



console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Akinola Fawaz')

console.log(account);

// for (acc of accounts){
//   if (accc.owner === "Akinola Fawaz"){
//     console.log(acc);
//   }
// }







































/////////////////////////////////////////////////
// let arr = ['a', 'b', 'c', 'd', 'e' ]

// // Slice
// console.log(arr.slice(2)); 

// console.log(arr.slice(0, -3));
// console.log(arr.slice());
// console.log([...arr]);

// // console.log(arr.splice(2));
// // console.log(arr.splice(-1));

// // splice
// console.log(arr);
// arr.splice(1, 3)
// console.log(arr);

// // Reverse
// arr = ['a', 'b', 'c', 'd', 'e' ]
// const arr2 = ['j','i','h','w','g', 'e']
// console.log(arr2.reverse());

// // Concat
// const letters = arr.concat(arr2)
// console.log(letters);

// console.log([...arr , ...arr2]);

// // join
// console.log(letters.join('-'));


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for(const movement of movements){
// for(const [i, movement] of movements.entries()){
//   if (movement >0 ){
//     console.log(`movement ${i+1}: You deposited ${movement}`);
//   }
//   else{
//     console.log(`movement ${i+1}: You withdrew ${Math.abs(movement) }`);
//   }
// }

// console.log(`
//   for forEach method
//   lets see how it work
//   `);
// movements.forEach( (movement) => {
//   if (mov >0 ){
//     console.log(`movement ${i+1}: You deposited ${mov, i, arr}`);
//   }
//   else{
//     console.log(`movement ${i+1}: You withdrew ${Math.abs(mov) }`);
//   }
// })

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// MAP()

// const rest = new Map()
// rest.set('name', 'Classico Italiano')
// rest.set(1, 'Firenze, Italy')
// console.log(rest.set(2, 'Lisbon, Portugal')); 

// const question = new Map([
//   ['Question', 'What is the best programming language in the wolrd?'],
//   [1, 'c'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct😉'],
//   [false, 'Try again']
// ])
// console.log(question);

// console.log(question.get('Question'));
// for (const [key, value] of question){
//   if (typeof key === 'number'){
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
// currencies.forEach((value, key, map)=>{
//     console.log(`${key}: ${value}`);
// })

// const cuurenciesUnique = new Set('USD', 'GBP', 'USD', 'NAIRA', 'GBP')
// console.log(cuurenciesUnique);

// cuurenciesUnique.forEach((value, key, map)=>{
//   console.log(`${key}: ${value}`);
// })

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each).
For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's
less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the 
cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/


// const checkDogs = (dogsJulia, dogsKate) =>{
//   const dogsJuliaCorrected = dogsJulia.slice()
//   dogsJuliaCorrected.splice(0,1)
//   dogsJuliaCorrected.splice(-2)
//   console.log(dogsJuliaCorrected);

//   const dog = [...dogsJuliaCorrected , ...dogsKate]

//   dog.forEach((dog,i)=>{
//       if (dog >= 3){
//         console.log(`dog number ${i+1} is an adult and is ${dog} year old`);
//       }else{
//         console.log(`dog number ${i+1} is still a puppy and is ${dog} year old`);
//       }
//   })

// }
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1

// // const movementsUsd = movements.map(function(mov){
// //   return mov * eurToUsd
// // })

// const movementsUsdfor = []
// for (const mov of movements){
//   movementsUsdfor.push(mov * eurToUsd)
  
// }
// console.log(movementsUsdfor);

// const movementUsd = movements.map((mov) => mov * eurToUsd)
// console.log(movementUsd);

// movement.map((mov, i ,arr)=>{

// })

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog
ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), 
and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years 
old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs 
that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other 
challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

// const calcHumanDogAge = (dogs) => {
//   const humanAge = dogs.map((dog)=> dog<2? dog*2: 16+dog*4)
//   console.log(humanAge);

//   const adultDog = humanAge.filter(dog => dog >= 18)
//   console.log(adultDog);

//   const dogCumAge = adultDog.reduce((acc, dog, i, arr)=> acc + dog / arr.length, 0)

//   console.log(dogCumAge);
// }
// calcHumanDogAge([5, 2, 4, 1, 15, 8, 3], [16, 6, 10, 5, 6, 1, 4])

const eurToUsd = 1.1
movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov)=> acc + mov)

// Include methode

// To check for equality
console.log(movements.includes(-130))
console.log(movements.some(acc => acc === -130));

// Check for Condition and check for many stament
const anyDeposits =  movements.some(mov => mov > 0)