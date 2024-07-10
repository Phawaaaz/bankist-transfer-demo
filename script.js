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
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2023-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2023-05-08T14:11:59.604Z',
    '2023-05-27T17:01:17.194Z',
    '2024-07-05T23:36:17.929Z',
    '2024-07-09T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-06-10T14:43:26.374Z',
    '2024-07-04T18:49:59.371Z',
    '2024-07-09T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
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
  movementsDates: [
    '2023-11-01T13:15:33.035Z',
    '2023-11-30T09:48:16.867Z',
    '2023-12-25T06:04:23.907Z',
    '2024-01-25T14:18:46.235Z',
    '2024-02-05T16:33:06.386Z',
    '2024-06-10T14:43:26.374Z',
    '2024-07-04T18:49:59.371Z',
    '2024-07-09T12:01:20.894Z',
  ],
  locale: 'en-NG',
  currency: "NGN"

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
// Date function
  const formatMovementdate = (date, locale) => {
    const calcDaysPassed = (date1, date2)=> 
      Math.round(Math.abs((date2 - date1) / (1000 *60 *60 *24)))
    // const date =  new Date(acc.movementsDates[i]);


    const daysPassed = calcDaysPassed(new Date(), date);

    console.log(date);
    console.log(daysPassed);

    if (daysPassed === 0)return 'Today'
    if (daysPassed === 1)return 'Today'
    if (daysPassed <= 7)return `${daysPassed} days ago`

    //   const day = `${date.getDate()}`.padStart(2 , 0)
    //   const month = `${date.getMonth() + 1}`.padStart(2 , 0)
    //   const year = `${date.getFullYear()}`.padStart(2 , 0)
    // return `${day}/${month}/${year}`
    return new Intl.DateTimeFormat(locale).format(date);
    }

    // /Formating number function
    const formatCur = (value, locale, currency) => {
      return  new Intl.NumberFormat(locale , {
        style: 'currency',
        currency: currency,
      }).format(value)
    }

    // const date = new Date()
   


// Implementing The depos/withdrawer display
const displayMovement = (acc, sort = false) => {


  const movs = sort?acc.movements.slice().sort((a, b) => a-b) : acc.movements

  containerMovements.innerHTML = '';

  movs.forEach((mov, i) => {

    const type = mov> 0? 'deposit': 'withdrawal';
    const date = new Date(acc.movementsDates[i]);

    const displayDate = formatMovementdate(date, acc.locale);
    // const displayDate = formatMovementdate(date)
    console.log(date);


    const calcDaysPassed = (date1, date2)=> Math.abs((date2 - date1) / (1000 *60 *60 *24))
    

    const formattedMov = formatCur(mov, acc.locale, acc.currency)
    
    const html =`
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">${displayDate}</div> 
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

const calcDisplayBalance =  (acc) => {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent =formatCur(acc.balance, acc.locale, acc.currency)
};

// calcDisplayBalance(accounts)

const calcDisplaySummary = (acc ) => {

  // For the money coming in
  const  incomes = acc.movements
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov , 0)
  // const formattedMov = formatCur(acc.balance, acc.locale, acc.currency)


  labelSumIn.textContent = formatCur(Math.abs(incomes), acc.locale, acc.currency)


//  For the Out going money
  const outcomes = acc.movements
  .filter(mov => mov < 0)
  .reduce((acc, mov) => acc + mov, 0)

  labelSumOut.textContent = formatCur(Math.abs(outcomes), acc.locale, acc.currency)

  // For the interest
  const interest = acc.movements
  .filter(mov => mov > 0)
  .map( (deposit)  => deposit * acc.interestRate / 100)
  .filter((int, i, arr) =>{
    console.log(arr);
    return int >= 1;
  })
  .reduce((acc, int) =>acc + int , 0)
  
labelSumInterest.textContent = formatCur(Math.abs(interest), acc.locale, acc.currency)


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
      displayMovement(acc)

      // Display summary
      calcDisplaySummary(acc)
  
      //Display Balance
      calcDisplayBalance(acc)
  
}
// /////////////////////////////////////////////////////////////////////////////////
let currentAccount
// ////////////////////////////////////////////////////////////////////////////////
// Event listener

// Fake Alway Logged in
currentAccount = account1
updateUi(currentAccount)
containerApp.style.opacity = 100

// Experimenting date Api

btnLogin.addEventListener('click', (e)=>{
  e.preventDefault()
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)

  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value){
    // console.log("Login");
    // DIsplay Ui and a welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ') [0]}`
    containerApp.style.opacity = 100

    // To Display Current Date
    //  const now = new Date()
      // const day = `${now.getDate()}`.padStart(2 , 0)
      // const month = `${now.getMonth() + 1}`.padStart(2 , 0)
      // const year = `${now.getFullYear()}`.padStart(2 , 0)
      // const hour = `${now.getHours()}`.padStart(2 , 0)
      // const min = `${now.getMinutes()}`.padStart(2 , 0)
      // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`
      const now = new Date()
      const option = {
          hour: 'numeric',
          minute: 'numeric',
          day: 'numeric',
          weekday: "long",
          month: "long",
          year: 'numeric',
        }
const locale = navigator.language
console.log(locale);
labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, option).format(now )



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
  const amount = +inputTransferAmount.value
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

      // Add the date
      currentAccount.movementsDates.push(new Date().toISOString())
      receiverAcc.movementsDates.push(new Date().toISOString())


      updateUi(currentAccount)
    }else{
      alert('Insufficient Fund')
    }
})


btnLoan.addEventListener('click', (e)=>{
  e.preventDefault()
  const amount = Math.floor(inputLoanAmount.value)

  if (amount > 0 && currentAccount.movements.some(mov => 
    mov >= amount * 0.1)){
      // add movement
      currentAccount.movements.push(amount)

      // Add loan date 
      currentAccount.movementsDates.push(new Date().toISOString())


      // updateUi
      updateUi(currentAccount)

      inputLoanAmount.value = ' '
    }else{
      alert('Insufficient funds')
    }
} )

btnClose.addEventListener('click', (e)=>{
  e.preventDefault()


  if( inputCloseUsername.value === currentAccount.username && 
    +inputClosePin.value === currentAccount.pin ){

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
let sorted = false

btnSort.addEventListener('click', (e)=>{

  e.preventDefault()

  displayMovement(currentAccount.movements, !sorted)

  sorted = !sorted

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





