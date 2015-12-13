# BBTools
## Building Blocks and Tools JavaScript Library.

### Usage
Using it by doing:

* Download the Library:
```bash
	git clone https://github.com/quinonez/BBTools
	cd BBTools
	git tag
	git checkout v1.2
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
* Folders with examples on ```BBTools/workarea```: ```jamesrandom``, ```rand*```, ```h1fillrandom```.

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
    * index.php
    * qunit.css
    * qunit.js
    * __jamesrandom/__
      * BBT-tests.js
      * index.html
      * index.php
      * qunit.css
      * qunit.js
      * README.md
    * __h1fillrandom/__
      * BBT-tests.js
      * index.html
      * index.php
      * qunit.css
      * qunit.js
      * README.md
    * __randbinomial/__
      * BBT-tests.js
      * index.html
      * index.php
      * qunit.css
      * qunit.js
      * README.md
    * __randbit/__
      * BBT-tests.js
      * index.html
      * index.php
      * qunit.css
      * qunit.js
      * README.md
    * __randbreitwigner/__
      * BBT-tests.js
      * index.html
      * index.php
      * qunit.css
      * qunit.js
      * README.md
    * __randchisquare/__
      * BBT-tests.js
      * index.html
      * index.php
      * qunit.css
      * qunit.js
      * README.md
    * __randexponential/__
      * BBT-tests.js
      * index.html
      * index.php
      * qunit.css
      * qunit.js
      * README.md
    * __randflat/__
      * BBT-tests.js
      * index.html
      * index.php
      * qunit.css
      * qunit.js
      * README.md
    * __randlandau/__
      * BBT-tests.js
      * index.html
      * index.php
      * qunit.css
      * qunit.js
      * README.md
    * __randpoisson/__
      * BBT-tests.js
      * index.html
      * index.php
      * qunit.css
      * qunit.js
      * README.md
    * __randstudentt/__
      * BBT-tests.js
      * index.html
      * index.php
      * qunit.css
      * qunit.js
      * README.md

  





