# README USAGE OF RandExponential

## Approach 1

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 30;
    var A = [];
    var argu =  { size: n, vect: A, engine: gen, mean: 3 };
    BBT.RandExponential.ShootArray( argu );
    console.log(A);
  ```

## Approach 2

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 30;
    var A = [];
    var bw = new BBT.RandExponential( { engine: gen, mean: 3 } );
    bw.FireArray( n, A );
    console.log(A);
  ```

## Approach 3

  ```javascript
    var n = 30;
    var A = [];
    var bw = new BBT.RandExponential({});
    bw.FireArray( n, A );
    console.log(A);
  ```


