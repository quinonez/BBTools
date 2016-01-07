# BBTools
## Building Blocks and Tools JavaScript Library.

### Usage
Using it by doing:

* Download the Library:
```bash
	git clone https://github.com/quinonez/BBTools
	cd BBTools
	git tag
	git checkout v1.3
```
* Start using it by going to ```workarea``` and edit files ```BBT-tests.js``` and ```index.html```.
* Open ```index.html``` with your favorite web browser.
* Do not forget to refresh the web page any time you edit the source files.
* The optimized library is put on ```dis/BBT.min.js```.


### Information About Versions

#### Version 1.2
* Added the Random package that contains modules: 
  * JamesRandom
  * RandBinomial
  * RandBit
  * RandBreitWigner
  * RandChiSquare
  * RandExponential
  * RandFlat
  * RandGamma
  * RandGauss
  * RandLandau
  * RandPoisson
  * RandStudentT
* Objects of kind H1 have a new member function: FillRandom that fill an 1D histogram with random values according to an especified probability distribution function.
* Folders with examples on ```BBTools/workarea```: ```jamesrandom```, ```rand*```, ```h1fillrandom```.



##### README USAGE OF RandBinomial

n is the number of Bermoulli trials. 
n is must be less or equal than the array's size
p is the probability to obtain 1 in one Bernoulli trial.

###### Approach 1

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


##### README USAGE OF RandBit


###### Approach 1

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 30;
    var A = [];
    var argu =  { size: n, vect: A, engine: gen };
    BBT.RandBit.ShootArray( argu );
    console.log(A);
  ```

###### Approach 2

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 30;
    var A = [];
    var bw = new BBT.RandBit( { engine: gen } );
    bw.FireArray( n, A );
    console.log(A);
  ```

###### Approach 3

  ```javascript
    var n = 30;
    var A = [];
    var bw = new BBT.RandBit({});
    bw.FireArray( n, A );
    console.log(A);
  ```


##### README USAGE OF RandBreitWigner


###### Approach 1

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 30;
    var A = [];
    var argu =  { size: n, vect: A, engine: gen, mean: 3, gamma: 0.5, cut: undefined };
    BBT.RandBreitWigner.ShootArray( argu );
    console.log(A);
    console.log( bw.FireM2() );
  ```

###### Approach 2

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 30;
    var A = [];
    var argu =  { size: n, vect: A, engine: gen, mean: 3, gamma: 0.5, cut: undefined };
    BBT.RandBreitWigner.ShootArray( argu );
    console.log(A);
    console.log( bw.FireM2() );
  ```

###### Approach 3

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 30;
    var A = [];
    var argu =  { size: n, vect: A, engine: gen, mean: 3, gamma: 0.5, cut: undefined };
    BBT.RandBreitWigner.ShootArray( argu );
    console.log(A);
    console.log( bw.FireM2() );
  ```


##### README USAGE OF RandChiSquare


###### Approach 1

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 30;
    var A = [];
    var argu =  { size: n, vect: A, engine: gen, pdf_a: 3 };
    BBT.RandChiSquare.ShootArray( argu );
    console.log(A);
  ```

###### Approach 2

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 30;
    var A = [];
    var bw = new BBT.RandChiSquare( { engine: gen } );
    bw.FireArray( n, A );
    console.log(A);
  ```

###### Approach 3

  ```javascript
    var n = 30;
    var A = [];
    var cs = new BBT.RandChiSquare({});
    cs.FireArray( n, A );
    console.log(A);
  ```


##### README USAGE OF RandExponential


###### Approach 1

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 30;
    var A = [];
    var argu =  { size: n, vect: A, engine: gen, mean: 3 };
    BBT.RandExponential.ShootArray( argu );
    console.log(A);
  ```

###### Approach 2

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 30;
    var A = [];
    var bw = new BBT.RandExponential( { engine: gen, mean: 3 } );
    bw.FireArray( n, A );
    console.log(A);
  ```

###### Approach 3

  ```javascript
    var n = 30;
    var A = [];
    var bw = new BBT.RandExponential({});
    bw.FireArray( n, A );
    console.log(A);
  ```


##### README USAGE OF RandFlat


###### Approach 1

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 30;
    var A = [];
    var argu =  { size: n, vect: A, a: 0, b: 1000000 };
    BBT.RandFlat.ShootArray( argu );
    console.log(A);
  ```

###### Approach 2

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 30;
    var A = [];
    var f = new BBT.RandFlat( { engine: gen } );
    f.FireArray( n, A );
    console.log(A);
  ```

###### Approach 3

  ```javascript
    var n = 30;
    var A = [];
    var f = new BBT.RandFlat({});
    f.FireArray( n, A );
    console.log(A);
  ```


##### README USAGE OF RandGamma


###### Approach 1

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 50;
    var A = [];
    var argu =  { size: n, vect: A, engine: gen, k: 3, lambda: 2 };
    BBT.RandGamma.ShootArray( argu );
    console.log(A);
  ```

###### Approach 2

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 50;
    var A = [];
    var g = new BBT.RandGamma( { engine: gen, engine: gen, k: 3, lambda: 2 } );
    g.FireArray( n, A );
    console.log(A);
  ```

###### Approach 3

  ```javascript
    var n = 50;
    var A = [];
    var g = new BBT.RandGamma({});
    g.FireArray( n, A );
    console.log(A);
  ```


##### README USAGE OF RandGauss


###### Approach 1

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 50;
    var A = [];
    var argu =  { size: n, vect: A, engine: gen, mean: 115, stdDev: 5 };
    BBT.RandGauss.ShootArray( argu );
    console.log(A);
  ```

###### Approach 2

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 50;
    var A = [];
    var g = new BBT.RandGauss( { engine: gen, mean: 115, stdDev: 5 } );
    bw.FireArray( n, A );
    console.log(A);
  ```

###### Approach 3

  ```javascript
    var n = 30;
    var A = [];
    var g = new BBT.RandGauss({});
    g.FireArray( n, A );
    console.log(A);
  ```


##### README USAGE OF RandLandau


###### Approach 1

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 50;
    var A = [];
    var argu =  { size: n, vect: A, engine: gen };
    BBT.RandLandau.ShootArray( argu );
    console.log(A);
  ```


##### README USAGE OF RandPoisson


###### Approach 1

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 50;
    var A = [];
    var argu =  { size: n, vect: A, engine: gen, mean: 105 };
    BBT.RandPoisson.ShootArray( argu );
    console.log(A);
  ```

###### Approach 2

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 50;
    var A = [];
    var p = new BBT.RandPoisson( { engine: gen, mean: 105 } );
    p.FireArray( n, A );
    console.log(A);
  ```

###### Approach 3

  ```javascript
    var n = 50;
    var A = [];
    var p = new BBT.RandPoisson({});
    p.FireArray( n, A );
    console.log(A);
  ```


##### README USAGE OF RandStudentT


###### Approach 1

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 100;
    var A = [];
    var argu =  { size: n, vect: A, engine: gen, a: 2 };
    BBT.RandStudentT.ShootArray( argu );
    console.log(A);
  ```

###### Approach 2

  ```javascript
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 100;
    var A = [];
    var st = new BBT.RandStudentT( { engine: gen, a: 2 } );
    st.FireArray( n, A );
    console.log(A);
  ```

###### Approach 3

  ```javascript
    var n = 100;
    var A = [];
    var st = new BBT.RandStudentT({});
    st.FireArray( n, A );
    console.log(A);
  ```

#### Version 1.1
Same as version 1.0 but including folder of examples called ```BBTools/workarea```.


#### Version 1.0
* Users can define histograms like 

  ```javascript
     var h = BBT.H1("h", "h", nbinsx, xmin, xmax);
  ```
* Users can fill histograms like 

  ```javascript
      h.Fill(numericalValue);
  ```
* Users can draw histograms without drawing options like 

  ```javascript
      h.Draw();
  ```




### Folder/File Structure
* __BBTools/__
  * __BBT/__
    * __Analysis/__
    * convert.js
    * __Generation/__
      * __Random/__
        * JamesRandom.js
        * RandBinomial.js
        * RandBit.js
        * RandBreitWigner.js
        * RandChiSquare.js
        * RandExponential.js
        * RandFlat.js
        * RandGamma.js
        * RandGauss.js
        * RandLandau.js
        * RandPoisson.js
        * RandStudentT.js
    * __Visualization/__
      * Axis.js
      * H1.js
      * Painter.js
  * BBT.js
  * __dist/__
    * BBT.min.js
  * __latex/__
    * __viena2016/__
      * abstract.aux
      * abstract.log
      * abstract.pdf
      * abstract.tex
      * BBTools.svg
  * __lib/__
    * d3.js
    * d3.min.js
    * FileSaver.js
    * FileSaver.min.js
    * jquery.js
    * require.js
    * three.js
    * three.min.js
    * underscore.js
  * LICENSE
  * ModulesList.ods
  * README.md
  * __tools/__
    * almond.js
    * build.js
    * r.js
    * wrap.end
    * wrap.start
  * __workarea/__
    * BBT-tests.js
    * index.html
    * __jamesrandom/__
      * BBT-tests.js
      * index.html
      * README.md
    * __h1fillrandom/__
      * BBT-tests.js
      * index.html
      * README.md
    * __randbinomial/__
      * BBT-tests.js
      * index.html
      * README.md
    * __randbit/__
      * BBT-tests.js
      * index.html
      * README.md
    * __randbreitwigner/__
      * BBT-tests.js
      * index.html
      * README.md
    * __randchisquare/__
      * BBT-tests.js
      * index.html
      * README.md
    * __randexponential/__
      * BBT-tests.js
      * index.html
      * README.md
    * __randflat/__
      * BBT-tests.js
      * index.html
      * README.md
    * __randgamma/__
      * BBT-tests.js
      * index.html
      * README.md
    * __randgauss/__
      * BBT-tests.js
      * index.html
      * README.md
    * __randlandau/__
      * BBT-tests.js
      * index.html
      * README.md
    * __randpoisson/__
      * BBT-tests.js
      * index.html
      * README.md
    * __randstudentt/__
      * BBT-tests.js
      * index.html
      * README.md

  





