/* 
   +----------------------------------------------------------------------+
   |                            HEP Random                                |
   |                     --- RandSkewNormal ---                           |
   |                            Module File                               |
   +----------------------------------------------------------------------+
   RandSkewNormal ---
      returns a skew-normal distribution with shape parameter k
      To get a distribution with scale parameter b and location m:
      r = m + b * RandSkewNormal.Fire(k);
   http://azzalini.stat.unipd.it/SN/
   algorithm from K. McFarlane, June 2010.
   +----------------------------------------------------------------------+
   | JavaScript                                                           |
   +----------------------------------------------------------------------+
   F. Quinonez - Created 2015-10-30                  
   +----------------------------------------------------------------------+
   | C++                                                                  |
   +----------------------------------------------------------------------+
   M Fischler and L Garren - Created: 26 May 2011
*/

define( [], function(){
  "use strict";

  function RandSkewNormal( args ){
    this.fshape = args.shape || 0.0;

  } 

  RandSkewNormal.GaussianSkewNormal = function( sengine, k ){

  };



  RandSkewNormal.prototype = {
    constructor: RandSkewNormal,

    GetShapeParameter: function(){

    },

    Fire: function(){

    },

    FireArray: function(){

    }
  }
  return RandSkewNormal;
});

