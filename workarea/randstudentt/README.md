# README USAGE OF RandStudentT

## Approach 1

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 100;
    var A = [];
    var argu =  { size: n, vect: A, engine: gen, a: 2 };
    BBT.RandStudentT.ShootArray( argu );
    console.log(A);
  ```

## Approach 2

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 100;
    var A = [];
    var st = new BBT.RandStudentT( { engine: gen, a: 2 } );
    st.FireArray( n, A );
    console.log(A);
  ```

## Approach 3

  ```javascript
    var n = 100;
    var A = [];
    var st = new BBT.RandStudentT({});
    st.FireArray( n, A );
    console.log(A);
  ```


