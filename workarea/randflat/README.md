# README USAGE OF RandFlat

## Approach 1

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 30;
    var A = [];
    var argu =  { size: n, vect: A, a: 0, b: 1000000 };
    BBT.RandFlat.ShootArray( argu );
    console.log(A);
  ```

## Approach 2

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 30;
    var A = [];
    var f = new BBT.RandFlat( { engine: gen } );
    f.FireArray( n, A );
    console.log(A);
  ```

## Approach 3

  ```javascript
    var n = 30;
    var A = [];
    var f = new BBT.RandFlat({});
    f.FireArray( n, A );
    console.log(A);
  ```


