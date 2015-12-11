# README USAGE OF RandBinomial
n is the number of Bermoulli trials. 
n is must be less or equal than the array's size
p is the probability to obtain 1 in one Bernoulli trial.

## Approach 1

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 300;
    var A = [];
    var argu;
    argu = { size: n, vect: A, engine: gen, n: 100, p: 0.5 };
    BBT.RandBinomial.ShootArray( argu );
    console.log(A);
    var B = A.sort();
    var minimo = B[0];
    var indmax = B.length - 1;
    var maximo = B[indmax];
    console.log("minimo %f",minimo);
    console.log("maximo %f",maximo);
  ```



