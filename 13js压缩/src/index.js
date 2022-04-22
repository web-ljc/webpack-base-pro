// eslint-disable-next-line
// import '@babel/polyfill';

const add = (x, y) => x + y;

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(111);
  }, 100);
});
console.info(p1);
// eslint-disable-next-line
console.info(add(3, 3));
