# README USAGE OF RandGamma

## Approach 1

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 50;
    var A = [];
    var argu =  { size: n, vect: A, engine: gen, k: 3, lambda: 2 };
    BBT.RandGamma.ShootArray( argu );
    console.log(A);
  ```

## Approach 2

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 50;
    var A = [];
    var g = new BBT.RandGamma( { engine: gen, engine: gen, k: 3, lambda: 2 } );
    g.FireArray( n, A );
    console.log(A);
  ```

## Approach 3

  ```javascript
    var n = 50;
    var A = [];
    var g = new BBT.RandGamma({});
    g.FireArray( n, A );
    console.log(A);
  ```


