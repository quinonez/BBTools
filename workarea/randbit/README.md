# README USAGE OF RandBit

## Approach 1

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 30;
    var A = [];
    var argu =  { size: n, vect: A, engine: gen };
    BBT.RandBit.ShootArray( argu );
    console.log(A);
  ```

## Approach 2

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 30;
    var A = [];
    var bw = new BBT.RandBit( { engine: gen } );
    bw.FireArray( n, A );
    console.log(A);
  ```

## Approach 3

  ```javascript
    var n = 30;
    var A = [];
    var bw = new BBT.RandBit({});
    bw.FireArray( n, A );
    console.log(A);
  ```


