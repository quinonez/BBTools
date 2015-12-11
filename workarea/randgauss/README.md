# README USAGE OF RandGauss

## Approach 1

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 50;
    var A = [];
    var argu =  { size: n, vect: A, engine: gen, mean: 115, stdDev: 5 };
    BBT.RandGauss.ShootArray( argu );
    console.log(A);
  ```

## Approach 2

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 50;
    var A = [];
    var g = new BBT.RandGauss( { engine: gen, mean: 115, stdDev: 5 } );
    bw.FireArray( n, A );
    console.log(A);
  ```

## Approach 3

  ```javascript
    var n = 30;
    var A = [];
    var g = new BBT.RandGauss({});
    g.FireArray( n, A );
    console.log(A);
  ```


