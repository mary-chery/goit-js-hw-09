// // all modules
// import Notiflix from 'notiflix';

// const form = document.querySelector('form.form');
// const delay = document.querySelector('[name="delay"]');
// const step = document.querySelector('[name="step"]');
// const amount = document.querySelector('[name="amount"]');

// form.addEventListener('submit', onPromiseCreate);

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     } ,delay)
//   });
// }

// function onPromiseCreate(event) {
//   event.preventDefault();
//   let delayEl = Number(delay.value);
//   let stepEl = Number(step.value);
//   let amountEl = Number(amount.value);
  
//   for (let i = 1; i <= amountEl; i += 1) {
//     let promiseDelay = delayEl + stepEl * i;
//     createPromise(i , promiseDelay)
//       .then(({ position, delay }) => {
//         Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);

//         console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);

//         console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//       promiseDelay = delayEl + stepEl * i;
//   }
//         event.target.reset(); 
// }

// all modules
// import Notiflix from 'notiflix';

// const form = document.querySelector('form.form');
// const delay = document.querySelector('[name="delay"]');
// const step = document.querySelector('[name="step"]');
// const amount = document.querySelector('[name="amount"]');

// form.addEventListener('submit', onPromiseCreate);

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     } ,delay)
//   });
// }

// function onPromiseCreate(event) {
//   event.preventDefault();
//   let delayEl = Number(delay.value);
//   let stepEl = Number(step.value);
//   let amountEl = Number(amount.value);
  
//   for (let i = 1; i <= amountEl; i += 1) {
//     let promiseDelay = delayEl;
//     createPromise(i , promiseDelay)
//       .then(({ position, delay }) => {
//         Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);

//         console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);

//         console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//       promiseDelay = delayEl + stepEl * i;
//   }
//   event.target.reset(); 
// }


import Notiflix from 'notiflix';

const form = document.querySelector('form.form');
const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');

form.addEventListener('submit', onPromiseCreate);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onPromiseCreate(event) {
  event.preventDefault();
  let delayEl = Number(delay.value);
  let stepEl = Number(step.value);
  let amountEl = Number(amount.value);
  let promiseDelay = delayEl;
  for (let i = 1; i <= amountEl; i += 1) {
    createPromise(i, promiseDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );

        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );

        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    promiseDelay = delayEl + stepEl * i;
  }
  event.target.reset();
}









