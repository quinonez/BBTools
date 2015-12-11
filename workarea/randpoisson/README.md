# README USAGE OF RandPoisson

## Approach 1

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 50;
    var A = [];
    var argu =  { size: n, vect: A, engine: gen, mean: 105 };
    BBT.RandPoisson.ShootArray( argu );
    console.log(A);
  ```

## Approach 2

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 50;
    var A = [];
    var p = new BBT.RandPoisson( { engine: gen, mean: 105 } );
    p.FireArray( n, A );
    console.log(A);
  ```

## Approach 3

  ```javascript
    var n = 50;
    var A = [];
    var p = new BBT.RandPoisson({});
    p.FireArray( n, A );
    console.log(A);
  ```


