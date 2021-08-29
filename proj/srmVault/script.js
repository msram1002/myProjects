'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// SRM BANK APP

// Data
const account1 = {
  owner: 'John Doe',
  movements: [200, -100, 3000, -1500, -200, 70],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z'
  ],
};

const account2 = {
  owner: 'Mark Anthony',
  movements: [5000, 3000, -1500, -500, -3000, 1000],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [2000, -500, 300, 500, -200, 100],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
  ],
};

const account4 = {
  owner: 'Kevin Smith',
  movements: [400, 1000, 500, 100, 900],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelError = document.querySelector('.error');
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
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  // sort
  const sortedMovs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  sortedMovs.forEach(function (mov, i) {
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

// Computing user names - initials of account owner
const computeUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  })
};

computeUserName(accounts);

// Seperating out deposits and summing them
// const accDeposits = account2.movements
//   .filter(function(mov) {
//   return mov > 0;
//   }).reduce(function(acc, cur) {
//   return acc + cur;
//   }, 0);

// labelSumIn.textContent = `$ ${accDeposits}`;

// Seperating out withdrawals and summing them 
// using arrow function this time
// const accWithDrawals = account2.movements
//   .filter(mov => mov < 0)
//   .reduce((acc, cur) => acc + cur, 0);

// labelSumOut.textContent = `$ ${-(accWithDrawals)}`;

// accWithDrawals are already negative
// const remBal = accDeposits + accWithDrawals;

// labelBalance.textContent = `$ ${remBal}`;

const balanceSummary = function (account) {
  // Calculating sum of deposits
  const incomeSummary = account.movements
    .filter(function (mov) {
      return mov > 0;
    }).reduce(function (acc, cur) {
      return acc + cur;
    }, 0).toFixed(2);

  labelSumIn.textContent = `$ ${incomeSummary}`;

  // Calculating sum of expenditures
  const expendituresSummary = Math.abs(account.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0)).toFixed(2);

  labelSumOut.textContent = `$ ${expendituresSummary}`;

  // Calculating interest on deposits
  const interestSummary = account.movements
    .filter(mov => mov > 0)
    .map(newDeposit => newDeposit * (account.interestRate / 100))
    .reduce((acc, cur) => acc + cur, 0).toFixed(2);

  labelSumInterest.textContent = `$ ${interestSummary}`;

  // Calculating the final account balance
  const finalBal = Number(incomeSummary) + Number(interestSummary) - Number(expendituresSummary);
  // Storing as an property on the account object 
  // as we shall need when implementing transfers
  account.finalBalance = finalBal.toFixed(2);
  labelBalance.textContent = `$ ${account.finalBalance}`;
};

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// Implementing account login

// Variable for storing the username
// We have other implementations like transfer/ close 
// so needs to be outside of btnLogin function.
let currentAcc;

// Adding the Date when they log in
const now = new Date();
const day = now.getDate();
const month = now.getMonth() + 1;
const fullYear = now.getFullYear();
const hour = now.getHours();
const minutes = now.getMinutes();
labelDate.textContent = `${month}/${day}/${fullYear}, ${hour}:${minutes}`;

// Event handler for login button and enter key
// Enter key - automatically triggers the click when
// we have a form based html
btnLogin.addEventListener('click', function (e) {
  // Button on a form element does a page reload
  // Prevent form from submitting
  e.preventDefault();
  // Verify if it is existing user from the entered user value
  currentAcc = accounts.find(acc => acc.userName ===
    inputLoginUsername.value);
  // Check the pin for the user trying to login
  // We need to verify only if currentAcc is actually valid
  // For non-existing users, it returns undefined
  // and undefined.pin gives us an error, 
  // so we can use optional chaining
  if (currentAcc?.pin === Number(inputLoginPin.value)) {
    // if user exists, provide a welcome message 
    // to the user and display their balance summary
    // Removing the error message
    labelError.style.display = "none";
    // clearing the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    // removing the focus from pin field
    inputLoginPin.blur();
    // change the opacity to display the dashboard
    containerApp.style.opacity = 100;
    // Welcome message with their first word in their name
    labelWelcome.textContent = `Welcome back! ${currentAcc.owner.split(" ")[0]}`;
    // loading the dashboard for the logged in user
    displayMovements(currentAcc.movements);
    balanceSummary(currentAcc);
  } else {
    // for non-existing users
    // clearing the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    // removing the focus from pin field
    inputLoginPin.blur();
    // change the opacity to hide
    containerApp.style.opacity = 0;
    // unhide the error message
    labelError.style.display = "block";
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// Implementing transfers

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  // Getting the receiver account and amount
  const amountToBeTransferred = Number(inputTransferAmount.value);
  // Need to find the account so that we can move the 
  // amount to their movements array
  const recAcc = accounts.find(acc => acc.userName === inputTransferTo.value);
  // clearing out the transfer user and input values
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();
  // Before we actually transfer, we need to check if sender has the required amount or not
  // if sender is from the existing list or undefined
  if (amountToBeTransferred > 0 && amountToBeTransferred <= currentAcc.finalBalance && recAcc && recAcc?.userName !== currentAcc.userName) {
    // Add a negative amount to sender
    // Add a positive amount to the receiver
    currentAcc.movements.push(-(amountToBeTransferred));
    recAcc.movements.push(amountToBeTransferred);
    // Dashboard needs to be updated
    displayMovements(currentAcc.movements);
    balanceSummary(currentAcc);
  } else {
    console.log("no");
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// Implementing close of an account

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (inputCloseUsername.userName === currentAcc.userName &&
    Number(inputClosePin.value) === currentAcc.pin) {
    const arrIndex = accounts.findIndex(acc => acc.userName === closeUserName);
    // splice mutates the original array
    accounts.splice(arrIndex, 1);
    // change the opacity to hide the dashboard
    containerApp.style.opacity = 0;
  }
  // clearing out the input values
  inputCloseUsername.value = inputClosePin.value = '';
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// Implementing requests for loan
// Loan gets approved only if we have any deposits
// greater than or equal to 10% of the loan amount requested

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanReqAmount = Math.round(Number(inputLoanAmount.value));
  if (loanReqAmount > 0 && currentAcc.movements.some(mov => mov >= (loanReqAmount * 0.1))) {
    currentAcc.movements.push(loanReqAmount);
    // Dashboard needs to be updated
    displayMovements(currentAcc.movements);
    balanceSummary(currentAcc);
  }
  // clearing out the input values
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

// Variable for maintaing the sorting state
let sortedState = false;
// Sorting arrays, we add an extra parameter
// in displayMovements to check and apply the sort
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAcc.movements, !sortedState);
  sortedState = !sortedState;
});