/// <reference lib="webworker" />

import isPrimeNumber from 'prime-number';
import primeNumberList from 'prime-number/list';

addEventListener('message', ({ data }) => {
  console.log(data);
  const arePrimeList = primeNumberList.map((prime) => {
    return isPrimeNumber(prime);
  });
  postMessage(arePrimeList);
});
