/* 
   +----------------------------------------------------------------------+
   |                            BBT Random                                |
   |                          --- RandFlat ---                            |
   |                            Module File                               |
   +----------------------------------------------------------------------+
  
   Module defining methods for shooting flat random numbers, double or
   integers.
   It provides methods to fill with double flat values arrays of
   specified size, as well as methods for shooting sequences of 0,1 (bits).
  

   +----------------------------------------------------------------------+
   | C++                                                                  |
   +----------------------------------------------------------------------+

   Part of Geant4 (simulation toolkit for HEP).

   Gabriele Cosmo - Created: 5th September 1995
   Peter Urban    - ShootBit() and related stuff added: 5th Sep 1996
   Gabriele Cosmo - Added operator() and additional methods to fill
                    arrays specifying boundaries: 24th Jul 1997 
   J.Marraffino   - Added default arguments as attributes and
                    operator() with arguments: 16th Feb 1998
   M. Fischler    - Moved copy constructor to protected so that
  		    Rderived RandBit can get at it.
   M Fischler      - put and get to/from streams 12/10/04
  

   +----------------------------------------------------------------------+
   | JavaScript                                                           |
   +----------------------------------------------------------------------+

   F. Quinonez - Created 2015-10-30                  


*/

define([ 
  '../BBT/Generation/Random/JamesRandom' 
], function(
  JamesRandom
)
{
  "use strict";

  function RandFlat( args ){
    this.fa = args.a || 0;
    this.fb = args.b || 1;
    this.fwidth = args.width || ( args.b - args.a );
    this.fengine = args.engine || Object.create( JamesRandom() );
  } 


  RandFlat.Shoot( args ){
    var sa = args.a || 0;
    var sb = args.b || 1;
    var swidth = args.width || ( args.b - args.a );  
    var sengine = args.engine || Object.create( JamesRandom() );
    return ( swidth * sengine.Flat() + sa ); 
  };


  RandFlat.prototype = {
    constructor: RandFlat,

    Fire: function(){
      return ( this.fb - this.fa ) * fengine.Flat() + this.fa;
    },

    FireArray: function( /* size of vect */ size, /* Array */ vect ){
      for( var i = 0; i < size; ++i ){
        vect.push( this.Fire() );
      }
    },

   


  }

  return RandFlat;
});

