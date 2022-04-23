import './css/index.css';

function sum2(...args) {
  return args.reduce((p, c) => p + c, 0);
}

// eslint-disable-next-line
console.info(sum2(1, 2, 3, 4, 5))