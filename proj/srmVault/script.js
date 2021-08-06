'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// SRM VAULT APP

// Data
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

const accounts = [account1, account2, account3, account4];

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

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// Adding the movements for the money for a single person
// Passing in the movements array from the object
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const movementHtml = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type.toUpperCase()}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">$ ${mov}</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", movementHtml);
  })
};

displayMovements(account2.movements);

// Computing user names - initials of account owner
const computeUserName = function (accs){
  accs.forEach(function(acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name)=>name[0])
      .join("");
  })
};

computeUserName(accounts);

// Seperating out deposits and summing them
const accDeposits = account2.movements
  .filter(function(mov) {
  return mov > 0;
  }).reduce(function(acc, cur) {
  return acc + cur;
  }, 0);

labelSumIn.textContent = `$ ${accDeposits}`;

// Seperating out withdrawals and summing them 
// using arrow function this time
const accWithDrawals = account2.movements
  .filter(mov => mov < 0)
  .reduce((acc, cur) => acc + cur, 0);

labelSumOut.textContent = `$ ${-(accWithDrawals)}`;

// accWithDrawals are already negative
const remBal = accDeposits + accWithDrawals;

labelBalance.textContent = `$ ${remBal}`;