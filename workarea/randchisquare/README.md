# README USAGE OF RandChiSquare

## Approach 1

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 30;
    var A = [];
    var argu =  { size: n, vect: A, engine: gen, pdf_a: 3 };
    BBT.RandChiSquare.ShootArray( argu );
    console.log(A);
  ```

## Approach 2

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 30;
    var A = [];
    var bw = new BBT.RandChiSquare( { engine: gen } );
    bw.FireArray( n, A );
    console.log(A);
  ```

## Approach 3

  ```javascript
    var n = 30;
    var A = [];
    var cs = new BBT.RandChiSquare({});
    cs.FireArray( n, A );
    console.log(A);
  ```


