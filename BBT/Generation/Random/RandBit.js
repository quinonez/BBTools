/* 
   +----------------------------------------------------------------------+
   |                            BBT Random                                |
   |                           --- RandBit ---                            |
   |                            Module File                               |
   +----------------------------------------------------------------------+
  
   Module defining methods for shooting Flat or Bit random numbers, 
   double or integers.
   It provides methods to fill with double flat values arrays of
   specified size, as well as methods for shooting sequences of 0,1 (bits).
  
  
   +----------------------------------------------------------------------+
   | C++                                                                  |
   +----------------------------------------------------------------------+

   This is derived from RandFlat and is a drop-in replacement.  However
   the shootBit() and fireBit() methods are stateless (which makes them
   an order of magnitude slower, but allows save/restore engine status
   to work correctly).

   M Fischler     - Created from RandFlat.cc, deleting almost all the 
                    content since inheritance takes care of it.  2/15/00
   M Fischler     - put and get to/from streams 12/10/04
  

   +----------------------------------------------------------------------+
   | JavaScript                                                           |
   +----------------------------------------------------------------------+

   F. Quinonez - Created 2015-10-30                  


*/

define( [], function(){
  "use strict";

  function RandBit( engine, ){
    this.fEngine = engine;
  } 





  RandBit.prototype = {
    constructor: RandBit,


    /*FIXME FIXME FIXME FIXME FIXME FIXME FIXME 
    FIRST IMPLEMENT RandFlat.js
    */
    FireEndPoints: function( a, b ){
      return ( ( b - a ) * this.fEngine.Flat() + a );
    },

    FireBit: function(){
      var x = FireEndPoints( 0, 1 );
      return ( ( x > 0.5 )? 1: 0 );
    },

    FireWidth: function( width ){
      return ( width * this.fEngine.Flat() );
    },



  }

  return RandBit;

});

